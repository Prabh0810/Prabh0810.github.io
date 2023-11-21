const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imagesnames  = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg','pic5.jpg']; 

/* Declaring the alternative text for each image file */
const alttext = ['Closeup of a blue human eye', 'A scenic landscape', 'Abstract art', 'City skyline at night', 'Colorful flowers'];

/* Looping through images */
for (let i = 1; i <= imageFilenames.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + i + '.jpg');
    newImage.setAttribute('alt', altTexts[i - 1]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', function() {
        displayedImage.src = this.src;
        displayedImage.alt = this.alt;
      });
    }
    

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
