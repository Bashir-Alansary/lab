// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const messageDiv = document.getElementById('responseMessage');

    form.addEventListener('submit', (event) => {
        // 1. Prevent the page from reloading
        event.preventDefault();

        // 2. Extract data using FormData (very efficient)
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // 3. Do something with the data
        console.log('Form Captured:', data);
        
        // 4. Show a success message to the user
        messageDiv.innerText = `Thanks, ${data.username}! Check the console.`;
        
        // 5. Optional: Clear the form
        form.reset();
    });
});