/* Selecting the row class from the HTML and assigning it to the variable rowElement. */
const rowElement = document.querySelector(".row");
/* Selecting the random-color class from the HTML and assigning it to the variable randomBtn. */
const randomBtn = document.querySelector(".random-color");

const maxBox = 100;
const generateRandomColor = () => {
   /* Creating a random color and adding it to the page. */
    rowElement.innerHTML = "";
    for (let i = 0; i < maxBox; i++) {
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;

        const block = document.createElement("div");
        block.className = "col l-3 m-6 c-12";

        block.innerHTML = `<div class="list-color">
                                    <div class="color" style="background-color: ${randomHex}";></div>
                                    <span class="hex-value">${randomHex}</span>
                                </div>`;

        block.addEventListener("click", () => copyColor(block, randomHex));

        rowElement.appendChild(block);
    }
};
generateRandomColor();
/**
 * It takes the hex value of the color and copies it to the clipboard.
 * @param elem - The element that was clicked on.
 * @param hexValue - The hex value of the color that you want to copy.
 */
const copyColor = (elem, hexValue) => {
    const colorElement = elem.querySelector(".hex-value");

    navigator.clipboard.writeText(hexValue).then(() => {
        colorElement.innerHTML = "Copied";
    });
    setTimeout(() => (colorElement.innerText = hexValue), 1000);
};
randomBtn.addEventListener("click", generateRandomColor);
