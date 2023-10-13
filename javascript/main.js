// toggele dark & light mode
{
    const dark = document.getElementById("dark");
    const body = document.getElementById("body");

    dark.addEventListener("click", (eo) => {
        body.classList.toggle("dark");
    });
}

//hover to botton change color
changecolor.addEventListener("mousemove", (eo) => {
    hiddenul.style.display = "block";
});

changecolor.addEventListener("mouseout", (eo) => {
    hiddenul.style.display = "none";
});

//click to botton Header BG to change Color Header BG
headerbg.addEventListener("click", (eo) => {
    //random number [ 0 => 360 ]
    const random = Math.round(Math.random() * 360);
    const random2 = Math.round(Math.random() * 360);
    // change color of header
    header.style.backgroundColor = `hsl(${random}, 44%, 55%)`;
    // change color of title 1
    const websiteTitle = document.querySelector("#header > h1");
    websiteTitle.style.backgroundColor = `hsl(${random}, 44%, 55%)`;
    // change color of botton dark mode
    dark.style.backgroundColor = `hsl(${random2}, 44%, 55%)`;
});

//click to botton Title BG to change color Title BG
titlebg.addEventListener("click", (eo) => {
    //random number [ 0 => 360 ]
    const random = Math.round(Math.random() * 360);
    // change color of header
    const h1List = document.querySelectorAll("h1:not(#header > h1");
    h1List.forEach((h1) => {
        h1.style.backgroundColor = `hsl(${random}, 44%, 55%)`;
    });
});

//click to botton Title BG to change color Title BG
const changebgcolor = (eo) => {
    return Math.round(Math.random() * 360);
};
titlecolor.addEventListener("click", (eo) => {
    // change color of title
    const h1List = document.querySelectorAll("h1:not(#header > h1");
    h1List.forEach((h1) => {
        h1.style.color = `hsl(${changebgcolor()}, 44%, 55%)`;
    });
});

//click to botton Section BG to change color Section BG
// sectionbg.addEventListener("click", (eo) => {
//     //random number [ 0 => 360 ]
//     const random = Math.round(Math.random() * 360);
//     // change color of header
//     const section = document.querySelectorAll("section");
//     section.forEach((item) => {
//         item.style.backgroundColor = `hsl(${random}, 44%, 55%)`;
//     });
// });
