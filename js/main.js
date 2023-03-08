const loadMeals=(searchValue)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>console.log(data.meals))
}

document.getElementById('searchBtn').addEventListener('click',()=>{
    const searchFoodStr=document.getElementById('searchFood');
    const searchValue=searchFoodStr.value;
    loadMeals(searchValue);
})

loadMeals();