function showRecipes(category) {
    const recipeContainer = document.getElementById("recipe-container");

    const recipes = {
        recipe1: ["Paneer Butter Masala", "Chole Bhature", "Biryani"],
        recipe2: ["Gulab Jamun", "Rasgulla", "Kheer"],
        recipe3: ["Biryani", "Dal Makhani", "Butter Chicken"],
        recipe4: ["Samosa", "Pakora", "Dhokla"],
        recipe5: ["Caesar Salad", "Greek Salad", "Fruit Salad"],
        recipe6: ["Mango Lassi", "Masala Chai", "Lemonade"]
    };

    recipeContainer.innerHTML = `<h3 class="text-center mt-4">${category.replace(/^\w/, c => c.toUpperCase())} Recipes</h3><ul class="list-group mt-3"></ul>`;

    const list = recipeContainer.querySelector(".list-group");

    recipes[category].forEach(recipe => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = recipe;
        list.appendChild(li);
    });
}