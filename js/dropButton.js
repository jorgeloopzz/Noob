// To drop the games menu
document.addEventListener('DOMContentLoaded', () => {

    // Show drop-menu
    let dropBtn = document.getElementById('gamesButton');

    dropBtn.addEventListener('click', () => {
        document.getElementById('gamesDrop').classList.toggle('show');
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
