// click to botton Section BG to change color Section BG
// method 1 => using array + i++
// const arrColors = ["#D6D46D", "#DE8F5F", "#B6FFFA", "#363062"];
// let i = 0;
// sectionbg.addEventListener("click", (eo) => {
//     allSection = document.querySelectorAll("section");
//     allSection.forEach((item) => {
//         item.style.backgroundColor = arrColors[i];
//     });
//     i < arrColors.length - 1 ? i++ : (i = 0);
// });
/* ********************************* method 2 ******************************************************** */
// click to botton Section BG to change color Section BG
// method 2 => using array + math.random()
// const arrColors = ["#D6D46D", "#DE8F5F", "#B6FFFA", "#363062"];
// sectionbg.addEventListener("click", (eo) => {
//     let random = Math.floor(Math.random() * arrColors.length);
//     allSection = document.querySelectorAll("section");
//     allSection.forEach((item) => {
//         item.style.backgroundColor = arrColors[random];
//     });
// });
/* ********************************* method 3 ******************************************************** */
// // click to botton Section BG to change color Section BG
// // method 3 => using RGB + math.random() + return
// // Generates a random RGB color between 0 and 255.
// const randomRgb = (eo) => {
//     // Returns a random number between 0 and 255.
//     const getRandomNumber = () => Math.round(Math.random() * 255);
//     // Generate a random RGB color.
//     return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
// };
// // Adds an event listener to the section background to change the background color of all sections on the page to a random RGB color when the user clicks on it.
// sectionbg.addEventListener("click", (eo) => {
//     // Generate a random RGB color.
//     const rgbColor = randomRgb();
//     // Get all sections on the page.
//     const allSections = document.querySelectorAll("section");
//     // Iterate over all sections and change their background color to the random RGB color.
//     allSections.forEach((item) => {
//         item.style.backgroundColor = rgbColor;
//         // Log the random RGB color to the console.
//         console.log(rgbColor);
//     });
// });
/* ********************************* method 3 ******************************************************** */
// // click to botton Section BG to change color Section BG
// // method 3 => using RGB + math.random() + return
// // Generates a random RGB color between 0 and 255.
// // Adds an event listener to the section background to change the background color of all sections on the page to a random RGB color when the user clicks on it.
// sectionbg.addEventListener("click", (eo) => {
//     const randomhex = Math.random().toString(16).slice(2, 8);
//     const allSections = document.querySelectorAll("section");
//     // Iterate over all sections and change their background color to the random RGB color.
//     allSections.forEach((item) => {
//         item.style.backgroundColor = `#${randomhex}`;
//         console.log(`#${randomX}`);
//     });
// });
/* ********************************* method 4 ******************************************************** */
// click to botton Section BG to change color Section BG
// method 4 => using hex + don't use ForEach + use for
sectionbg.addEventListener("click", (eo) => {
    const allSections = document.querySelectorAll("section");
    const randomhex = Math.random().toString(16).slice(2, 8);

    for (let i = 0; i < allSections.length; i++) {
        const item = allSections[i];

        item.style.backgroundColor = `#${randomhex}`;
    }
});
