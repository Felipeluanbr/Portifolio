document.getElementById('toggleButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

// Define o tema inicial
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('light-mode');
});

