// Function to show months since I started to program
document.addEventListener('DOMContentLoaded', () => {
    const text = document.getElementById('months'); // Where to put the months
    const date = new Date(2020, 10); // When I started to program
    const currentDate = new Date(); // Current date
    const calcDate = (currentDate.getTime() - date.getTime()) / 1000; // Calculate the diference beetwen the dates in seconds
    const countMonths = Math.round(calcDate * 3.803*10**-7); // Change from seconds to month
    text.innerHTML = countMonths;
});