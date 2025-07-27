const galleryContainer = document.querySelector('.gallery');

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// 1. <li> etiketli img'leri oluştur
const galleryMarkup = images
  .map(image => {
    return `<li class="gallery-item"><img src="${image.url}" alt="${image.alt}" width="300"></li>`;
  })
  .join('');

// 2. Oluşturulan HTML’i tek bir işlemde DOM’a ekle
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

// 3. Stil (galeri görünümü için esnek kutu düzeni)
galleryContainer.style.display = 'flex';
galleryContainer.style.gap = '16px';
galleryContainer.style.listStyle = 'none';
galleryContainer.style.padding = '0';
