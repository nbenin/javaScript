/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // store text in a variable set boolean for incrementing
    let textWave = document.getElementById("target").innerHTML;
    let incrementationIndicator = true;
    let incrementValue = 0;

    // loop through the text, changing fontsize
    for (i = 0; i < textWave.length; i++) {

        // if incrementing do this loop
        if (incrementationIndicator === true) {
            switch (incrementValue) {
                case 0:
                    textWave[i].style.fontSize = "small";
                    incrementValue++;
                    break;
                case 1:
                    textWave[i].style.fontSize = "medium";
                    incrementValue++;
                    break;
                case 2:
                    textWave[i].style.fontSize = "large";
                    incrementValue++;
                    break;
                case 3:
                    textWave[i].style.fontSize = "x-large";
                    incrementValue++;
                    break;
                case 4:
                    textWave[i].style.fontSize = "xx-large";
                    incrementationIndicator = false;
                    break;
            }

        }

        // if not incrementing then must be decrementing
        else {
            switch (incrementValue) {
                case 4:
                    textWave[i].style.fontSize = "xx-large";
                    incrementValue--;
                    break;
                case 3:
                    textWave[i].style.fontSize = "x-large";
                    incrementValue--;
                    break;
                case 2:
                    textWave[i].style.fontSize = "large";
                    incrementValue--;
                    break;
                case 1:
                    textWave[i].style.fontSize = "medium";
                    incrementValue--;
                    break;
                case 0:
                    textWave[i].style.fontSize = "small";
                    incrementationIndicator = true;
                    break;
            }
        }
    }

})();
