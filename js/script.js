
// Function to display recipe data on html page -------------------------------------------------------------------

function displayRecipeData(apiData) {
    let recipeData = JSON.parse(apiData);
    console.log(recipeData);
    
    let htmlRecipe = "";
    let sugarRDI = 20;
    let fatRDI = 10;
     
    for (var i = 0; i < 12; i++) {
        let link = recipeData.hits[i].recipe.url;
        let image = recipeData.hits[i].recipe.image;
        let recipeTitle = recipeData.hits[i].recipe.label;
        let recipeSource = recipeData.hits[i].recipe.source;
        
        htmlRecipe += "<div>" + `<img src=${image} class='image'>` + "</div>";
        htmlRecipe += "<div><strong><h3>" + recipeTitle.toUpperCase() + "</h3></strong></div>";
        htmlRecipe += "<div><strong>By: "+ `<a href=${link}>` + recipeSource + "</a></strong></div>";
        htmlRecipe += "<div><strong>Link to website: </strong>" + `<a href=${link}>` + "Link to source" + "</a>" + "</div>";
        
        let time = "No time available";
        if(recipeData.hits[i].recipe.totalTime!=0){
            time = recipeData.hits[i].recipe.totalTime + " mins";
        }
        
        else{
            time = "No time available";
        }
        
        htmlRecipe += "<div><strong>Total Recipe Time: </strong> " + time + " </div>";
        
        
// health, diet labels and cautions--------------------------------------------------------------------------------        
        
        for (var j = 0; j < recipeData.hits[i].recipe.healthLabels.length; j++) {
            htmlRecipe += "<li>" + recipeData.hits[i].recipe.healthLabels[j] + "</li>";
        }
        
         for (var k = 0; k < recipeData.hits[i].recipe.dietLabels.length; k++) {
            htmlRecipe += "<li>" + recipeData.hits[i].recipe.dietLabels[k] + "</li>";
        }
        
        for (var m = 0; m < recipeData.hits[i].recipe.cautions.length; m++) {
            htmlRecipe += "<li>" + recipeData.hits[i].recipe.cautions[m] + "</li>";
        }
        
        for (var p = 0; p < recipeData.hits[i].recipe.ingredientLines.length; p++) {
            htmlRecipe += "<p>" + recipeData.hits[i].recipe.ingredientLines[p] + "</p>";
        }

//Serving and nutritional information----------------------------------------------------------------------------        
        
        let serving = recipeData.hits[i].recipe.yield;
        let calories = recipeData.hits[i].recipe.calories;
        let caloriesPerServing = parseInt(calories) / parseInt(serving);
        
        caloriesPerServing = caloriesPerServing.toFixed(0);
        
        htmlRecipe += "<div><p>Serves: </p>" + serving + "</div>";
        htmlRecipe += "<div><p>Cals par serve: </p><p> " + caloriesPerServing + "</p></div>";
        
        
        let sugar = 1;
        if(recipeData.hits[i].recipe.totalNutrients.SUGAR!=null){
            sugar = recipeData.hits[i].recipe.totalNutrients.SUGAR.quantity;
        }
        
        let fat = recipeData.hits[i].recipe.totalNutrients.FAT.quantity;
        
        htmlRecipe += "<div><strong>Sugar % of RDI: </strong> " + (sugar / sugarRDI).toFixed(2) + "</div>";
        htmlRecipe += "<div><strong>Fat % of RDI: </strong> " + (fat / fatRDI).toFixed(2) + "</div>";
    
        
        
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
let pageNumber = 1;
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

    apiRequest += "&app_id=" + appid + "&app_key=" + appKey;

    request.open("GET", apiRequest);
    request.send();
}


