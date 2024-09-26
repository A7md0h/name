document.querySelectorAll('.class-btn').forEach(button => {
    button.addEventListener('click', () => {
        const url = button.getAttribute('data-url');
        window.open(url, '_blank');
    });
});
