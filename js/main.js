const loadMeals=(searchValue)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>showMealCards(data.meals.slice(0,3)))
}

const showMealCards= meals => {
    console.log(meals);
    const cardSection=document.getElementById('card-section ');
    cardSection.innerHTML=''; 
    meals.forEach(meal => {
        // console.log(meal);
        const cardDiv=document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML=`
        <div class="card">
      <img src="${meal.strMealThumb}" class="img-fluid w-100" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
      </div>
    </div>
        `
        cardSection.appendChild(cardDiv);
    })
    

}

document.getElementById('searchBtn').addEventListener('click',()=>{
    const searchFoodStr=document.getElementById('searchFood');
    const searchValue=searchFoodStr.value;
    loadMeals(searchValue);
})

loadMeals('egg');