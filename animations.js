document.addEventListener("load", function () {
    const zoomedText = document.getElementById("zoomedText");
    const zoomedImage = document.getElementById("zoomedImage");

    function zoomInElements() {
        const currentTextSize = window.getComputedStyle(zoomedText).fontSize;
        const newTextSize = parseInt(currentTextSize) * 12; 
        zoomedText.style.fontSize = newTextSize + "px";

        const currentImageWidth = window.getComputedStyle(zoomedImage).width;
        const newImageWidth = parseInt(currentImageWidth) * 2; 
        zoomedImage.style.width = newImageWidth;
    }

    zoomInElements();
});

