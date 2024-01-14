// script.js
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('getStartedBtn').addEventListener('click', function() {
        // Scroll to the specified section
        document.querySelector('#section-2').scrollIntoView({ behavior: 'smooth' });
    });
});