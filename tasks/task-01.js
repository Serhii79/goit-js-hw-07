const categoryRef = document.querySelectorAll('.item');
console.log(categoryRef);



const computeList = (array) => `В списке ${array.length} категории.`;
console.log(computeList(categoryRef));

// const nameCategory = category.querySelector('h2');
// const contItem = category.querySelectorAll('li');
// console.log(computeList(contItem));


const nameCategory = categoryRef.forEach(category => category.querySelector('h2') + category.querySelectorAll('li').length);
// const contItem = categoryRef.forEach(category => category.querySelectorAll('li').length);
console.log(nameCategory(categoryRef));

// console.log(nameCategory);
// console.log(contItem);
