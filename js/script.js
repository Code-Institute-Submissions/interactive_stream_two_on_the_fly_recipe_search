
// Function to display recipe data on html page -------------------------------------------------------------------

function displayRecipeData(apiData) {
    let recipeData = JSON.parse(apiData);
    console.log(recipeData);
    let htmlRecipe = "";
     
    for (var i = 0; i < 12; i++) {
        let recipeTitle = recipeData.hits[i].recipe.label;
        
        htmlRecipe += "<div><strong><h3>" + recipeTitle.toUpperCase() + "</h3></strong></div>";

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

    let requestString = "https://api.edamam.com/search?q=" + searchBarIngredient;
    let popular = document.getElementById("preselect");
    let preselect = popular.options[popular.selectedIndex].value;
    if (preselect != "") {
        requestString += " " + preselect;
    }

    requestString += "&app_id=" + appid + "&app_key=" + appKey;

    request.open("GET", requestString);
    request.send();
}


