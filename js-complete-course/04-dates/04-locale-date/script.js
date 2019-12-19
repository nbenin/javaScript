/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // Get date and extract values
    let currentDate = new Date();
    let currentNameOfDay = nameOfDay(currentDate.getDay());
    let currentNumberOfDay = currentDate.getDate();
    let currentMonth = nameOfMonth(currentDate.getMonth());



    document.getElementById("target").innerHTML = currentDate;

    // your code here

})();

// Function to get name of day
function nameOfDay(x) {
    switch (x) {
        case 0:
            return "Sunday";
            break;
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
            break;
    }
}

// Function to get name of Month



