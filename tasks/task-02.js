const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// const ingredientsRef = document.querySelector('ul#ingredients');

const listRef = document.createElement('ul');
listRef.classList.add('ingredients');
console.log(listRef);

const itemRef = document.createElement('li');
itemRef.textContent = 