// script.js
document.addEventListener("DOMContentLoaded", function () {
    const viewDetailsButtons = document.querySelectorAll(".project a");

    viewDetailsButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            alert("You clicked 'View Details' for a project.");
        });
    });
});
