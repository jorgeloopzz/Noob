// To drop the stats menu
document.addEventListener('DOMContentLoaded', () => {
    const dropBtn = document.getElementById('gamesButton');

    dropBtn.addEventListener('click', () => {
        document.getElementById('games').classList.toggle('show'); // Add the class 'show' that constains display: block; to the element
    })


    /* window.addEventListener('click', function(event) {
        if(!event.target.matches(".stats")) {
            let dropDowns = document.querySelector('.games');
            for (let i = 0; i < dropDowns.length; i++) {
                let openMenu = dropDowns[i];
                if (openMenu.classList.contains('show')) {
                    openMenu.classList.remove('show');
                }
            }
        }
    }) */

    window.onclick = function(event) {
        if(!event.target.matches(".stats")) {
            var dropDowns = document.getElementsByClassName('.games');
            var i;
            for (i = 0; i < dropDowns.length; i++) {
                var openMenu = dropDowns[i];
                if (openMenu.classList.contains('show')) {
                    openMenu.classList.remove('show');
                }
            }
        }
    } 
})
