

async function getCategoryData() {
    let url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
    try {
      let res = await fetch(url);
      if (!res.ok) throw new Error("Network response was not ok");
      let data = await res.json();
      displayDishes(data.meals, "Seafood Dishes");
    } catch (error) {
      console.error("Something went wrong:", error);
      alert("Something went wrong. Please try again.");
    }
  }
  
  async function getIngredientData() {
    let url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
    try {
      let res = await fetch(url);
      if (!res.ok) throw new Error("Network response was not ok");
      let data = await res.json();
      displayDishes(data.meals, "Chicken Dishes");
    } catch (error) {
      console.error("Something went wrong:", error);
      alert("Something went wrong. Please try again.");
    }
  }
  
  function displayDishes(dishes, title) {
    const dishDisplay = document.getElementById("dish-display");
    dishDisplay.innerHTML = `<h2>${title}</h2>`; 
  
    dishes.forEach(dish => {
      const dishItem = document.createElement("div");
      dishItem.classList.add("dish-item");
      dishItem.innerHTML = `
        <img src="${dish.strMealThumb}" alt="${dish.strMeal}">
        <h3>${dish.strMeal}</h3>
      `;
      dishDisplay.appendChild(dishItem);
    });
  }
  
  document.getElementById("get-category-data").addEventListener("click", getCategoryData);
  document.getElementById("get-ingredient-data").addEventListener("click", getIngredientData);
  