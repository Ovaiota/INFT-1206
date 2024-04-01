const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArray = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altText = ['first image', 'second image','Third image','fourth image', 'fifth image'];

/* Looping through images */
for (let i = 0; i < imageArray.length; i ++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + imageArray[i]);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', (e) => {
        displayedImage.src = e.target.src;
    });
}

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', (e) => {
    if (e.target.className == 'dark') {
      btn.setAttribute('class', 'light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  }
  
   else {
      btn.setAttribute('class', 'dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
  }); // Close event listener
        
