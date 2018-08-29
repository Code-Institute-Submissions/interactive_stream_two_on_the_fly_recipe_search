describe("Recipe define form", function() {
        const form = document.createElement('form');
        const input = document.createElement('input');
        input.id = "ingredient";
        input.value = "Chicken";
        form.id="recipeForm";
        form.appendChild(input);
        it("Check Submit Next", function() {
//            expect(submitIngredientNext(2)).toEqual(true);
        });
        it("focuses the search input field when the page loads", function() {
            expect(document.getElementsByTagName("input")[1].autofocus).toEqual(true);
        });
/*        it('submit Ingredient', function(){
            expect(window.getComputedStyle(document.getElementById("recipeForm")["ingredient"].value).toEqual("Chicken"));
        });
*/});