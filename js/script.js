// Function to display recipe data on html page -------------------------------------------------------------------

function displayRecipeData(apiData) {
    let recipeData = JSON.parse(apiData);
    console.log(recipeData);

    //Jquery for expanding & closing ingredient and label lists----------------------------------------------------

    $(document).ready(function() {
        $(".bottom_button").click(function() {
            $(this).next().on().slideToggle();
        });
    });
    $(document).ready(function() {
        $(".bottom_button2").click(function() {
            $(this).next().stop(true).slideToggle('slow');
        });
    });
   
   
    //Display recipes as html--------------------------------------------------------------------------------------

    let htmlRecipe = "";
    let sugarRDI = 20;
    let fatRDI = 10;

    let count = 0;
     
    for (var i = 0; i < 12; i++) {

        count++;

        if (i % 3 == 0) {
            htmlRecipe += "</div>" + "</div>" + "<div class = 'container'>" + "<div class ='row' id = 'spacer'>";
        }
        let link = recipeData.hits[i].recipe.url;
        let image = recipeData.hits[i].recipe.image;
        let recipeTitle = recipeData.hits[i].recipe.label;
        let recipeSource = recipeData.hits[i].recipe.source;

        htmlRecipe += "<div class='col-xs-12 col-sm-12 col-md-4'>";
        htmlRecipe += "<div>" + `<img src=${image} class='image'>` + "</div>";
        htmlRecipe += "<div><strong><h3>" + recipeTitle.toUpperCase() + "</h3></strong></div>";
        htmlRecipe += "<div class='text-left'><strong>By: " + `<a href=${link}>` + recipeSource + "</a></strong></div>";
        

        let time = "No time available";
        if (recipeData.hits[i].recipe.totalTime != 0) {
            time = recipeData.hits[i].recipe.totalTime + " mins";
        }
        else {
            time = "No time available";
        }

        htmlRecipe += "<div class='text-left'><strong>Total Recipe Time: </strong> " + time + " </div>";


        // health, diet labels and cautions--------------------------------------------------------------------------------        

        htmlRecipe += "<button class = 'btn btn-default bottom_button'>Nutrition Details</button><div style='display:none'><ul class='text-left'>";

        for (var j = 0; j < recipeData.hits[i].recipe.healthLabels.length; j++) {
            htmlRecipe += "<li>" + recipeData.hits[i].recipe.healthLabels[j] + "</li>";
        }

        for (var k = 0; k < recipeData.hits[i].recipe.dietLabels.length; k++) {
            htmlRecipe += "<li>" + recipeData.hits[i].recipe.dietLabels[k] + "</li>";
        }

        for (var m = 0; m < recipeData.hits[i].recipe.cautions.length; m++) {
            htmlRecipe += "<li>" + recipeData.hits[i].recipe.cautions[m] + "</li>";
        }

        htmlRecipe += "</ul></div><br/>";


        htmlRecipe += "<button class = 'btn btn-default bottom_button2'>Ingredients</button><div style='display:none'><ul class='text-left'> ";

        for (var p = 0; p < recipeData.hits[i].recipe.ingredientLines.length; p++) {
            htmlRecipe += "<p>" + recipeData.hits[i].recipe.ingredientLines[p] + "</p>";
        }

        htmlRecipe += "</ul></div>";
        
        

        //Serving and nutritional information----------------------------------------------------------------------------        

        let serving = recipeData.hits[i].recipe.yield;
        let calories = recipeData.hits[i].recipe.calories;
        let caloriesPerServing = parseInt(calories) / parseInt(serving);

        caloriesPerServing = caloriesPerServing.toFixed(0);

        htmlRecipe += "<div class='text-left'><strong><p>Serves: </strong>" + serving + "</p></div>";
        htmlRecipe += "<div class='text-left'><strong><p>Cals per serving: </strong> " + caloriesPerServing + "</p></div>";


        let sugar = 1;
        if (recipeData.hits[i].recipe.totalNutrients.SUGAR != null) {
            sugar = recipeData.hits[i].recipe.totalNutrients.SUGAR.quantity;
        }

        let fat = recipeData.hits[i].recipe.totalNutrients.FAT.quantity;

        
        htmlRecipe += "<div class='text-left'><strong>Sugar % of RDI: </strong><div class='progress'><div class='progress-bar' role='progressbar' aria-valuenow='" + (fat / fatRDI).toFixed(2) + "%" + "aria-valuemin='0' aria-valuemax='100' style='width:" + (sugar / sugarRDI).toFixed(2) + "%'>"+ (sugar / sugarRDI).toFixed(2)  +"%</div></div></div>";
        htmlRecipe += "<div class='text-left'><strong>Fat % of RDI: </strong><div class='progress'><div class='progress-bar' role='progressbar' aria-valuenow='" + (fat / fatRDI).toFixed(2) + "%" + "aria-valuemin='0' aria-valuemax='100' style='width:" + (fat / fatRDI).toFixed(2) + "%'>"+ (fat / fatRDI).toFixed(2)  +"%</div></div></div></div>";
        //print out prev and next buttons
        if (i == 11) {
            htmlRecipe += "<button class='bt btn-default onclick='submitIngredient(pageNumber+1)'>Next</button>";
            if (pageNumber > 1) {
                htmlRecipe += "<button class='bt btn-default onclick='submitIngredient(pageNumber-1)'>Previous</button>";
            }
            pageNumber++;
            console.log("page number "+ pageNumber);
        }
        document.getElementById("data").innerHTML = htmlRecipe;
    }


}




// HTTP Requests --------------------------------------------------------------------------------------------------
let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        displayRecipeData(this.responseText);
    }
    if (this.readyState == 4 && this.status == 404) {
        document.getElementById("data").innerHTML = "<strong>Ingredient not found. Please try again!</strong>";
    }
};

//Function getting called when the search button is clicked--------------------------------------------------------

function showLoader() {
    let loader = document.getElementById("loader");
    loader = loader.style.display = "block";
}

function stopLoader() {
    let loader = document.getElementById("loader");
    loader = loader.style.display = "none";
}




let pageNumber = 0;

function submitIngredient(pageNumber) {
    let appid = config.APP_ID;
    let appKey = config.APP_KEY;

    let searchBarIngredient = document.getElementById("recipeForm")["ingredient"].value;

    let apiRequest = "https://api.edamam.com/search?q=" + searchBarIngredient;
    let popular = document.getElementById("preselect");
    let preselect = popular.options[popular.selectedIndex].value;
    if (preselect != "") {
        apiRequest += " " + preselect;
    }

    pageNumber = parseInt(pageNumber, 10);
    let start = pageNumber * 12 - 12;
    let end = pageNumber * 12;
    if (pageNumber==0){
        start = 0;
        end = 12;
    }
    apiRequest += "&from=" + start + "&to=" + end;
    apiRequest += "&app_id=" + appid + "&app_key=" + appKey;

    let nuts = document.getElementById("dietaryForm")["nutFree"].checked;
    if (nuts == true) {
        apiRequest += "&health=tree-nut-free";
    }
    let peanuts = document.getElementById("dietaryForm")["peanutFree"].checked;
    if (peanuts == true) {
        apiRequest += "&health=peanut-free";
    }

    let vegan = document.getElementById("dietaryForm")["vegan"].checked;
    if (vegan == true) {
        apiRequest += "&health=vegan";
    }

    let vegetarian = document.getElementById("dietaryForm")["vegetarian"].checked;
    if (vegetarian == true) {
        apiRequest += "&health=vegetarian";
    }

    let alcohol = document.getElementById("dietaryForm")["alcohol-free"].checked;
    if (alcohol == true) {
        apiRequest += "&health=alcohol-free";
    }

    let sugarConscious = document.getElementById("dietaryForm")["sugarConscious"].checked;
    if (sugarConscious == true) {
        apiRequest += "&health=sugar-conscious";
    }

    let balanced = document.getElementById("dietaryForm")["balanced"].checked;
    if (balanced == true) {
        apiRequest += "&diet=balanced";
    }

    let protein = document.getElementById("dietaryForm")["high-protein"].checked;
    if (protein == true) {
        apiRequest += "&diet=high-protein";
    }

    // let fibre = document.getElementById("dietaryForm")["high-fibre"].checked;
    // if (fibre == true) {
    //     apiRequest += "&diet=high-fibre";
    // }

    let fat = document.getElementById("dietaryForm")["low-fat"].checked;
    if (fat == true) {
        apiRequest += "&diet=low-fat";
    }

    let carb = document.getElementById("dietaryForm")["low-carb"].checked;
    if (carb == true) {
        apiRequest += "&diet=low-carb";
    }

    // let sodium = document.getElementById("dietaryForm")["low-sodium"].checked;
    // if (sodium == true) {
    //     apiRequest += "&diet=low-sodium";
    // }

    let calories = document.getElementById("dietaryForm")["maxCalories"].value;
    if (calories != "") {
        calories = "&calories=120-" + calories;
    }
    apiRequest += calories;
    console.log("api request "+apiRequest);

    request.open("GET", apiRequest);
    request.send();
    //stoploader();
}





// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    }
    else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
