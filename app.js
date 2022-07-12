let reviews = [
  {
    id: 1,
    img: 'https://picsum.photos/100/100?code',
    name: 'kajal gaharwal',
    info:
      'hello my name is kajal gaharwal and i am from ajmer city with big dreams I m baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday'
  },
  {
    id: 2,
    img: 'https://picsum.photos/100/100?code',
    name: 'Anchal gaharwal',
    info:
      'hello my name is Anchal gaharwal and i am from ajmer city with big dreams I m baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday'
  },
  {
    id: 3,
    img: 'https://picsum.photos/100/100?code',
    name: 'sunil gaharwal',
    info:
      'hello my name is ksunilajal gaharwal and i am from ajmer city with big dreams I m baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday'
  },
  {
    id: 4,
    img: 'https://picsum.photos/100/100?code',
    name: 'kamlesh gaharwal',
    info:
      'hello my name is kamlesh gaharwal and i am from ajmer city with big dreams I m baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday'
  },
  {
    id: 5,
    img: 'https://picsum.photos/100/100?code',
    name: 'Mansingh gaharwal',
    info:
      'hello my name is Mansingh gaharwal and i am from ajmer city with big dreams I m baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday'
  }
];
let img = document.getElementById('img');
let author = document.getElementById('author');
let info = document.getElementById('info');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
const reviewsLength = reviews.length - 1;

let currentItem = 0;
window.addEventListener('DOMContentLoaded', () => {
  let item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.author;
  info.textContent = item.info;
});

function displayData(personId) {
  let item = reviews[personId];
  img.src = item.img;
  author.textContent = item.author;
  info.textContent = item.info;
}
previous.addEventListener('click', function() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviewsLength;
  }
  displayData(currentItem);
});

next.addEventListener('click', function() {
  currentItem++;
  if (currentItem > reviewsLength) {
    currentItem = 0;
  }
  displayData(currentItem);
});
