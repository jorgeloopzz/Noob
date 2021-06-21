//To change color of the page

document.addEventListener('DOMContentLoaded', () => {

    // Colors
    let defaultColor = "linear-gradient(to right, #000000 , #000000 ,#0044ff)"; // Color of the page
    let lightBgColor = "linear-gradient(to right, rgb(229, 229, 229), rgb(0, 68, 255), #04f)"; 
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
        let buttons = document.querySelectorAll("button")
        let borderBtn = document.querySelectorAll("div.border");
        

        // Change to light color 

        if (bg.style.background === "" || bg.style.background === defaultColor) {
            bg.style.background = lightBgColor;
            h1.style.color = darkColor; // Color of the title
            header.style.background = lightColor; // Background header

            // Border of the header
            header.style.border = borders; 
            header.style.borderTop = "none";

            // Border of the content
            /* document.getElementById('content').style.border = borders; */


            // Icons color
            for (let i = 0; i < icons.length; i++) {
                icons[i].style.color = darkColor;
            }

            // Buttons color
            for (let j = 0; j < buttons.length; j++) {
                buttons[j].style.color = darkColor;
            }

            /* Here Im learning how
            to chamge the border
            color whem I hover the buttons */
            
            // Border buttons color
            /* borderBtn.addEventListener('mouseover', () => {
                for (let z = 0; z < borderBtn.length; z++) {
                    borderBtn[z].style.borderBottom = borders;
                }
            }) */

        }   else {
            bg.style.background = defaultColor;
            h1.style.color = lightColor; // Color of the title
            header.style.background = darkColor; // Background header

            // Border of the header
            header.style.border = bordersLight; 
            header.style.borderTop = "none";

            // Border of the content
            /* document.getElementById('content').style.border = borders; */


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
