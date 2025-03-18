function showRecipes(category) {
    const recipeContainer = document.getElementById("recipe-container");

    const recipes = {
        recipe1: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6", "Step 7", "Step 8", "Step 9", "Step 10"],
        recipe2: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6", "Step 7", "Step 8", "Step 9", "Step 10"],
        recipe3: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6", "Step 7", "Step 8", "Step 9", "Step 10"],
        recipe4: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6", "Step 7", "Step 8", "Step 9", "Step 10"],
        recipe5: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6", "Step 7", "Step 8", "Step 9", "Step 10"],
        recipe6: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6", "Step 7", "Step 8", "Step 9", "Step 10"]
    };

    recipeContainer.innerHTML = `<h3 class="text-center mt-4">${category.replace(/^\w/, c => c.toUpperCase())} Preparation Steps</h3><ul class="list-group mt-3"></ul>`;

    const list = recipeContainer.querySelector(".list-group");

    recipes[category].forEach(recipe => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = recipe;
        list.appendChild(li);
    });
}
