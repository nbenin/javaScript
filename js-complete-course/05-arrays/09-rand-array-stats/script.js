/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        // initializing array and filling with random numbers and putting them in html
        let randomNumberArray = [];
        for (index = 0; index < 10; index++) {
            randomNumberArray[index] = Math.floor(Math.random() * 100) + 1;
            document.getElementById("n-" + (index + 1)).innerHTML = randomNumberArray[index];
        }

        // finding values for the rest of assignment
        let highestNumber = randomNumberArray.forEach(findLowestNumber);
        let lowestNumber = randomNumberArray.forEach(findHighestNumber);
    });

})();

function findHighestNumber() {

}

function findLowestNumber() {
    
}