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

    // store text in a variable, set boolean for incrementing, set incrementation counter, set empty array
    let textWave = document.getElementById("target").innerHTML;
    let incrementationIndicator = true;
    let incrementValue = 0;
    let modifiedTextWave = "";

    // loop through the text, changing fontsize
    for (i = 0; i < textWave.length; i++) {

        // check if space
        if (textWave[i] === " ") {
            modifiedTextWave += " ";
            continue;
        }

        // if incrementing do this loop
        if (incrementationIndicator === true) {
            switch (incrementValue) {
                case 0:
                    modifiedTextWave += "<span style='font-size:20px'>";
                    modifiedTextWave += textWave[i];
                    modifiedTextWave += "</span>";
                    incrementValue++;
                    break;
                case 1:
                    modifiedTextWave += "<span style='font-size:40px'>";
                    modifiedTextWave += textWave[i];
                    modifiedTextWave += "</span>";
                    incrementValue++;
                    break;
                case 2:
                    modifiedTextWave += "<span style='font-size:60px'>";
                    modifiedTextWave += textWave[i];
                    modifiedTextWave += "</span>";
                    incrementValue++;
                    break;
                case 3:
                    modifiedTextWave += "<span style='font-size:80px'>";
                    modifiedTextWave += textWave[i];
                    modifiedTextWave += "</span>";
                    incrementValue++;
                    break;
                case 4:
                    modifiedTextWave += "<span style='font-size:100px'>";
                    modifiedTextWave += textWave[i];
                    modifiedTextWave += "</span>";
                    incrementationIndicator = false;
                    break;
            }
        }

        // if not incrementing then must be decrementing
        else {
            switch (incrementValue) {
                case 4:
                    modifiedTextWave += "<span style='font-size:100px'>";
                    modifiedTextWave += textWave[i];
                    modifiedTextWave += "</span>";
                    incrementValue--;
                    break;
                case 3:
                    modifiedTextWave += "<span style='font-size:80px'>";
                    modifiedTextWave += textWave[i];
                    modifiedTextWave += "</span>";
                    incrementValue--;
                    break;
                case 2:
                    modifiedTextWave += "<span style='font-size:60px'>";
                    modifiedTextWave += textWave[i];
                    modifiedTextWave += "</span>";
                    incrementValue--;
                    break;
                case 1:
                    modifiedTextWave += "<span style='font-size:40px'>";
                    modifiedTextWave += textWave[i];
                    modifiedTextWave += "</span>";
                    incrementValue--;
                    break;
                case 0:
                    modifiedTextWave += "<span style='font-size:20px'>";
                    modifiedTextWave += textWave[i];
                    modifiedTextWave += "</span>";
                    incrementationIndicator = true;
                    break;
            }
        }
    }

    // Set inner html to new array
    document.getElementById("target").innerHTML = modifiedTextWave;

})();
