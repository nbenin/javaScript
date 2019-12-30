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
    console.log(textWave);
    let incrementationIndicator = true;
    let incrementValue = 0;
    console.log(document.getElementById("target").innerHTML[0]);

    // loop through the text, changing fontsize
    for (i = 0; i < textWave.length; i++) {

        // if incrementing do this loop
        if (incrementationIndicator === true) {
            switch (incrementValue) {
                case 0:
                    document.getElementById("target").innerHTML[i] = "small";
                    console.log(document.getElementById("target").innerHTML[i]);
                    incrementValue++;
                    break;
                case 1:
                    document.getElementById("target").style.fontSize[i] = "medium";
                    console.log(document.getElementById("target").innerHTML[i]);
                    incrementValue++;
                    break;
                case 2:
                    document.getElementById("target").style.fontSize[i] = "large";
                    console.log(document.getElementById("target").innerHTML[i]);
                    incrementValue++;
                    break;
                case 3:
                    document.getElementById("target").style.fontSize[i] = "x-large";
                    console.log(document.getElementById("target").innerHTML[i]);
                    incrementValue++;
                    break;
                case 4:
                    document.getElementById("target").style.fontSize[i] = "xx-large";
                    console.log(document.getElementById("target").innerHTML[i]);
                    incrementationIndicator = false;
                    break;
            }

        }

        // if not incrementing then must be decrementing
        else {
            switch (incrementValue) {
                case 4:
                    document.getElementById("target").style.fontSize[i] = "xx-large";
                    incrementValue--;
                    break;
                case 3:
                    document.getElementById("target").style.fontSize[i] = "x-large";
                    incrementValue--;
                    break;
                case 2:
                    document.getElementById("target").style.fontSize[i] = "large";
                    incrementValue--;
                    break;
                case 1:
                    document.getElementById("target").style.fontSize[i] = "medium";
                    incrementValue--;
                    break;
                case 0:
                    document.getElementById("target").style.fontSize[i] = "small";
                    incrementationIndicator = true;
                    break;
            }
        }
    }
    console.log(textWave);

})();
