const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('#ingredients');

// const listRef = document.createElement('ul');
// listRef.classList.add('ingredients');

const createElement = ingredients.map(ingredient => {
    const itemRif = document.createElement('li');
    itemRif.textContent = ingredient;

    return itemRif;
});

listRef.append(...createElement);



// const itemRef_1 = document.createElement('li');
// itemRef_1.textContent = ingredients[0];

// const itemRef_2 = document.createElement('li');
// itemRef_2.textContent = ingredients[1];

// const itemRef_3 = document.createElement('li');
// itemRef_3.textContent = ingredients[2];

// const itemRef_4 = document.createElement('li');
// itemRef_4.textContent = ingredients[3];

// const itemRef_5 = document.createElement('li');
// itemRef_5.textContent = ingredients[4];

// const itemRef_6 = document.createElement('li');
// itemRef_6.textContent = ingredients[5];

// listRef.append(itemRef_1, itemRef_2, itemRef_3, itemRef_4, itemRef_5, itemRef_6);





// itemRef.textContent = ingredients.forEach(ingredient => {
//     ingredient.name;
//     return itemRef;
// });




// listRef.appendChild(itemRif);
// console.log(listRef);