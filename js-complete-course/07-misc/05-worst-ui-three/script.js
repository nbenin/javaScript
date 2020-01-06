/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // adding listeners to buttons
    document.getElementById('fix-part-one').addEventListener('click', function() {

        // Randomize a number and turn it into a string, if under 10, add a zero before
        let newInnerValue = Math.floor(Math.random() * (499 - 460 + 1) + 460);
        newInnerValue += "";

        // Add new value to page and update page
        document.getElementById('part-one').value = newInnerValue;
        updateWholePage();
    });

    // Other buttons
    document.getElementById('fix-part-two').addEventListener('click', function() {
        let newInnerValue = Math.floor(Math.random() * 100);
        newInnerValue += "";

        // If number under 10, add zero before
        if (newInnerValue.length < 2) {
            newInnerValue = "0" + newInnerValue;
        }

        document.getElementById('part-two').value = newInnerValue;
        updateWholePage();
    });

    document.getElementById('fix-part-three').addEventListener('click', function() {
        let newInnerValue = Math.floor(Math.random() * 100);
        newInnerValue += "";
        if (newInnerValue.length < 2) {
            newInnerValue = "0" + newInnerValue;
        }
        document.getElementById('part-three').value = newInnerValue;
        updateWholePage();
    });

    document.getElementById('fix-part-four').addEventListener('click', function() {
        let newInnerValue = Math.floor(Math.random() * 100);
        newInnerValue += "";
        if (newInnerValue.length < 2) {
            newInnerValue = "0" + newInnerValue;
        }
        document.getElementById('part-four').value = newInnerValue;
        updateWholePage();
    });
})();

// function to update page
function updateWholePage() {

    // get values from the buttons
    let firstValue = document.getElementById('part-one').value;
    let secondValue = document.getElementById('part-two').value;
    let thirdValue = document.getElementById('part-three').value;
    let fourthValue = document.getElementById('part-four').value;

    // concatenate value add a + at beginning
    document.getElementById('target').innerHTML = "+" + firstValue + secondValue + thirdValue + fourthValue;
}