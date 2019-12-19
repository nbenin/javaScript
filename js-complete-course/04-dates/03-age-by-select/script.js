/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        // Get user input and set it in a date object
        let userYearOfBirth = document.getElementById("dob-year").value;
        let userMonthOfBirth = document.getElementById("dob-month").value - 1;
        let userDayOfBirth = document.getElementById("dob-day").value;
        let userBirthday = new Date(userYearOfBirth, userMonthOfBirth, userDayOfBirth);

        // get current day/month/year to compare
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let currentMonth = currentDate.getMonth();
        let currentDay = currentDate.getDate();
        let currentDateForComparison = new Date(currentYear, currentMonth, currentDay);

        // Compare the days and give the age
        let differenceInTime = currentDateForComparison.getTime() - userBirthday.getTime();
        let ageOfUser = (differenceInTime / (1000*60*60*24)) / 365;

        alert("you are " + Math.floor(ageOfUser) + "years old")

    });



})();
