document.addEventListener("DOMContentLoaded", function () {
    var hiddenDiv = document.getElementById("bottomMenu");

    var show = function () {
        hiddenDiv.style.display = "flex";
        // You can use CSS classes or other styles for fading in the element if needed
        // For a simple fade-in effect, consider using CSS transitions or animations.
    };

    hiddenDiv.style.display = "none";

    setTimeout(show, 2000);
});
