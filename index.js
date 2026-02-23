// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Select the button and add click event
const button = document.getElementById('colorBtn');

button.addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
    console.log("Background color changed!");
});