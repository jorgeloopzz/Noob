//To change color of the page
document.addEventListener('DOMContentLoaded', () => {

    // Colors 
    let darkColor = "rgb(37, 37, 40)";
    let lightColor = "rgb(242, 242, 242)";

    // Elements that change
    let bg = document.body;
    let h1 = document.querySelector("h1");
    let icons = document.querySelectorAll("i");
    let buttons = document.querySelectorAll(".header-button") 
    let borderBtn = document.querySelectorAll(".border");
    let header = document.getElementById("insideHeader");
    const thmBtn = document.getElementById("changeThemeButton");

    thmBtn.addEventListener("click", () => {

        // Change to light color 

        if (bg.style.backgroundColor === "" || bg.style.backgroundColor === darkColor) {
            bg.style.backgroundColor = lightColor; // Page color
            h1.style.color = darkColor; // Color of the title
            header.style.backgroundColor = lightColor; // Background header

            // Icons, buttons and border buttons light color
            for (let i = 0; i < icons.length; i++) {
                for (let j = 0; j < buttons.length; j++) {
                    for (let z = 0; z < borderBtn.length; z++) {
                        borderBtn[z].style.backgroundColor = darkColor;                
                    }
                    buttons[j].style.color = darkColor;
                }
                icons[i].style.color = darkColor;
            }
        }
        
        // Change to dark color
        
        else {
            bg.style.backgroundColor = darkColor; // Page color
            h1.style.color = lightColor; // Color of the title
            header.style.backgroundColor = darkColor; // Background header

            // Icons, buttons and border buttons dark color
            for (let i = 0; i < icons.length; i++) {
                for (let j = 0; j < buttons.length; j++) {
                    for (let z = 0; z < borderBtn.length; z++) {
                        borderBtn[z].style.backgroundColor = lightColor;
                    }
                    buttons[j].style.color = lightColor;
                }
                icons[i].style.color = lightColor;
            }
        }
    })
});
