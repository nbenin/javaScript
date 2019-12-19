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

        // initializing array and filling with random numbers
        let randomNumberArray = [];
        for (index = 0; index < 10; index++) {
            randomNumberArray[index] = Math.floor(Math.random() * 100) + 1;
        }
        console.log(randomNumberArray);

    });

})();
