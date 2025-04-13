// changeImage.js
export function changeImage(src, title, link) {
  // Your implementation of changeImage function
  const image = document.getElementById('main-image');
  const titleElem = document.getElementById('image-title');
  const linkElem = document.getElementById('image-link');

  image.src = src;
  titleElem.textContent = title;
  linkElem.href = link;
}

~                                                           ~           
