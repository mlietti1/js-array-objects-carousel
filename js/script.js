const images = [
  {
    name: 'Svezia',
    url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
    caption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, harum dolores voluptas amet distinctio et.'
  },
  {
    name: 'Perù',
    url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
    caption: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit nihil expedita nostrum fugit laudantium illum?'
  },
  {
    name: 'Chile',
    url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odit distinctio dignissimos eius, fugiat libero.'
  },
  {
    name: 'Argentina',
    url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
    caption: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio facere praesentium expedita eaque aut molestias?'
  },
  {
    name: 'Colombia',
    url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cumque consequuntur dignissimos recusandae labore. Aperiam?'
  }
]

const slider = document.querySelector('.slider');
const thumbnails = document.querySelector('.thumbnail-preview');
const next = document.querySelector('.btn-next');
const prev = document.querySelector('.btn-prev');
let counterImages = 0;



init();

function init(){
  slider.innerHTML = '';
  thumbnails.innerHTML = '';

  images.forEach(image => {
    slider.innerHTML += getTemplateImage(image);
    thumbnails.innerHTML += getTemplateThumb(image);

  })
  
  activateImage();
}

function activateImage(){
  document.getElementsByClassName('item')[counterImages].classList.add('active');
  document.getElementsByClassName('thumbnail-image')[counterImages].classList.add('active');
}


next.addEventListener('click', nextPrev);
prev.addEventListener('click', nextPrev);

function getTemplateImage(image){
  const {name, url, caption} = image;
  return `
    <div class="img-wrapper item">
      <img src="${url}" alt="${name}">
      <div class="img-text">
        <h3>${name}</h3>
        <p>${caption}</p>
      </div>
    </div>
    `;
}

function getTemplateThumb (image){
  const {name, url} = image;
  return `
  <img class="thumbnail-image" src="${url}" alt="${name}">
  `
}
