const categoryRef = document.querySelectorAll('.item');
console.log(categoryRef);

const computeList = (array) => `В списке ${array.length} категории.`;
console.log(computeList(categoryRef));

// const categories = document.querySelectorAll('li.item');
// categories.forEach((category) => {
//   const title = category.querySelector('h2');
//   ...

//   const categories = document.querySelectorAll('li.item');
categoryRef.forEach((category) => {
    const title = category.querySelector('h2');
    const contItem = category.querySelectorAll('li');

    return console.log(`Категория: ${title.textContent}
Количество элементов: ${contItem.length}`)


})