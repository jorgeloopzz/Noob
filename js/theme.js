//To change color of the page
document.addEventListener('DOMContentLoaded', () => {

    // Colors 
    let darkColor = "rgb(37, 37, 40)";
    let lightColor = "rgb(242, 242, 242)";

    // Elements that change
    let bg = document.body;
    let h1 = document.querySelector("h1");
    let icons = document.querySelectorAll("i");
    let header = document.getElementById("insideHeader");
    let buttons = document.querySelectorAll(".header-button") 
    var borderBtn = document.querySelectorAll(".border2");
    const thmBtn = document.getElementById("changeThemeButton");

    thmBtn.addEventListener("click", () => {

        // Change to light color 

        if (bg.style.backgroundColor === "" || bg.style.backgroundColor === darkColor) {
            bg.style.backgroundColor = lightColor;
            h1.style.color = darkColor; // Color of the title
            header.style.backgroundColor = lightColor; // Background header
            // Icons color
            for (let i = 0; i < icons.length; i++) {
                icons[i].style.color = darkColor;
            }
            // Buttons color
            for (let j = 0; j < buttons.length; j++) {
                buttons[j].style.color = darkColor;
            }
            // Border btns color
            for (let z = 0; z < borderBtn.length; z++) {
                borderBtn[z].style.backgroundColor = darkColor;
            }
        }
        
        // Change to dark color
        
        else {
            bg.style.backgroundColor = darkColor;
            h1.style.color = lightColor; // Color of the title
            header.style.backgroundColor = darkColor; // Background header
            // Icons color
            for (let i = 0; i < icons.length; i++) {
                icons[i].style.color = lightColor;
            }
            // Buttons color
            for (let j = 0; j < buttons.length; j++) {
                buttons[j].style.color = lightColor;
            }
            // Border btns color
            for (let z = 0; z < borderBtn.length; z++) {
                borderBtn[z].style.backgroundColor = lightColor;
            }
        }
    })
});
