
const numOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numOfCategories.length}`);

const categoriesArray = [...numOfCategories];
categoriesArray.forEach(element => {
    const title = element.querySelector("h2").textContent;
    const itemsLength = element.querySelectorAll("li").length;
    console.log(`Category: ${title}
     Elements: ${itemsLength}`);
});


