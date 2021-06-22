//To change color of the page
document.addEventListener('DOMContentLoaded', () => {

    // Colors
    let defaultColor = "rgb(11, 11, 11)"; // Color of the page
    let lightBgColor = "rgb(242, 242, 242)"; 
    let darkColor = "rgb(11, 11, 11)";
    let lightColor = "rgb(242, 242, 242)";
    const thmBtn = document.getElementById("changeThemeButton"); 

    thmBtn.addEventListener("click", () => {
        // Elements that change
        let bg = document.body;
        let h1 = document.querySelector("h1");
        let icons = document.querySelectorAll("i");
        let header = document.getElementById("insideHeader");
        let buttons = document.querySelectorAll(".header-button")
        let borderBtn = document.getElementsByClassName(".border");
        
        // Change to light color 

        if (bg.style.backgroundColor === "" || bg.style.backgroundColor === defaultColor) {
            bg.style.backgroundColor = lightBgColor;
            h1.style.color = darkColor; // Color of the title
            header.style.backgroundColor = lightColor; // Background header
            // Buttons color
            for (let j = 0; j < buttons.length; j++) {
                buttons[j].style.color = darkColor;
            }
            // Icons color
            for (let i = 0; i < icons.length; i++) {
                icons[i].style.color = darkColor;
            }
        }
        
        // Change to dark color
        
        else {
            bg.style.backgroundColor = defaultColor;
            h1.style.color = lightColor; // Color of the title
            header.style.backgroundColor = darkColor; // Background header
            // Buttons color
            for (let j = 0; j < buttons.length; j++) {
                buttons[j].style.color = lightColor;
            }
            // Icons color
            for (let i = 0; i < icons.length; i++) {
                icons[i].style.color = lightColor;
            } 
        }
    })
})
