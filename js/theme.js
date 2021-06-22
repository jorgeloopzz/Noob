//To change color of the page
document.addEventListener('DOMContentLoaded', () => {

    // Colors
    let defaultColor = "linear-gradient(to right, rgb(0, 0, 0) , rgb(0, 0, 0) , rgb(0, 68, 255))"; // Color of the page
    let lightBgColor = "linear-gradient(to right, rgb(229, 229, 229), rgb(0, 68, 255), rgb(0, 68, 255))"; 
    let darkColor = "#000";
    let lightColor = "#ffffff";
    let borders = "3px solid #000";
    let bordersLight = "3px solid #ffffff"
    const thmBtn = document.getElementById("changeThemeButton"); 

    thmBtn.addEventListener("click", () => {

        // Elements that change
        let bg = document.body;
        let h1 = document.querySelector("h1");
        let icons = document.querySelectorAll("i");
        let header = document.getElementById('header');
        let buttons = document.querySelectorAll(".header-button")
        let borderBtn = document.querySelectorAll("div.border");
        

        // Change to light color 
        if (bg.style.background === "" || bg.style.background === defaultColor) {
            bg.style.background = lightBgColor;
            h1.style.color = darkColor; // Color of the title
            header.style.background = lightColor; // Background header
            header.style.border = borders;   // Border of the header
            header.style.borderTop = "none";
            /* document.getElementById('content').style.border = borders; */  // Border of the content
            // Icons color
            for (let i = 0; i < icons.length; i++) {
                icons[i].style.color = darkColor;
            }
            // Buttons color
            for (let j = 0; j < buttons.length; j++) {
                buttons[j].style.color = darkColor;
            }
        }   else {
            bg.style.background = defaultColor;
            h1.style.color = lightColor; // Color of the title
            header.style.background = darkColor; // Background header
            header.style.border = bordersLight;  // Border of the header
            header.style.borderTop = "none";
            /* document.getElementById('content').style.border = borders; */  // Border of the content
            // Icons color
            for (let i = 0; i < icons.length; i++) {
                icons[i].style.color = lightColor;
            }
            // Buttons color
            for (let j = 0; j < buttons.length; j++) {
                buttons[j].style.color = lightColor;
            }
        }
    })
})
