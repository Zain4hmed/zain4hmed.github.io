document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById("grid-container");

    // Replace with the actual number of images you have
    const totalImages = 18;

    for (let i = 1; i <= totalImages; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");

        const img = document.createElement("img");
        img.src = `images/image${i}.jpg`;  // Change the extension to .jpg
        img.alt = `Image ${i}`;

        div.appendChild(img);
        gridContainer.appendChild(div);
    }
});
