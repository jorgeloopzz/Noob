// To drop the games menu
document.addEventListener('DOMContentLoaded', () => {

    const dropBtn = document.getElementById('gamesButton');

    // Show drop-menu
    dropBtn.addEventListener('click', () => {

        const gamesMenu = document.getElementById('gamesDrop');

        // Animation
        let pos = -50;

        // Stablish the margin and opacity menu values
        games.style.top = "-50%"; // Start with a margin top at 50% and 0 opacity
        games.style.opacity = 0;

        let id = setInterval(animate, 1)
        function animate() {
            if (pos == 100) {
                clearInterval(id)
            } else {
                pos++;
                gamesMenu.style.top = pos + "%";
                gamesMenu.style.opacity = pos + "%"
            }
        }

        games.classList.toggle('show');
    })

    // Hide drop-menu
    window.onclick = function(event) {
        if (!event.target.matches('.stats')) {
            var dropdowns = document.getElementsByClassName('gamesDropdown');
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                   openDropdown.classList.remove('show')
               }
           }
       }
   }

});
