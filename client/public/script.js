// index.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    
    const form = document.querySelector('.form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch('/submit', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                // Handle successful response
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (error) {
            console.error(error);
            // Handle error
        }
    });
});
