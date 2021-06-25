// To drop the stats
function myFunction() {
    document.getElementById('gamesDrop').classList.toggle('show')
}

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
