const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imagenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altText = ['Closeup of a blue human eye', 'A scenic landscape', 'Abstract art', 'City skyline at night', 'Colorful flowers'];

/* Looping through images */
for (let i = 1; i <= imageFilenames.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imageFilenames[i - 1]); // Corrected the array name and index
    newImage.setAttribute('alt', altText[i - 1]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', function() {
        displayedImage.src = this.src;
        displayedImage.alt = this.alt;
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
    const btnClass = btn.getAttribute('class');

    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});
