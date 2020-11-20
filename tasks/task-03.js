const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('#gallery');

// const list1 = document.createElement('li');
// const imageLink1 = document.createElement('img');
// list1.append(imageLink1);
// imageLink1.setAttribute('src', images[0].url);
// imageLink1.setAttribute('atl', images[0].alt);

// const list2 = document.createElement('li');
// const imageLink2 = document.createElement('img');
// list2.append(imageLink2);
// imageLink2.setAttribute('src', images[1].url);
// imageLink2.setAttribute('atl', images[1].alt);

// const list3 = document.createElement('li');
// const imageLink3 = document.createElement('img');
// list3.append(imageLink3);
// imageLink3.setAttribute('src', images[2].url);
// imageLink3.setAttribute('atl', images[2].alt);

// createListImg.append(list1, list2, list3);

const imagesList = images.map(item => {

  const list = document.createElement('li');
  // list.insertAdjacentHTML('beforeend', '<img src=${item.url} alt=${item.alt} />');
  list.appendChild(item);
  // list.append(imageLink);
});

galleryRef.append(...imagesList);