/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // adding event listeners to buttons
    document.getElementById('part-one').addEventListener('click', function() {

        // set new value, if above data-max, reset to data-min
        let newInnerValue = parseInt(document.getElementById('part-one').innerHTML, 10) + 1;
        if (newInnerValue === 500) {
            newInnerValue = 460;
        }

        // add new value to page and update page
        document.getElementById('part-one').innerHTML = newInnerValue;
        updateWholePage();

    });
    document.getElementById('part-two').addEventListener('click', function() {

        let newInnerValue = parseInt(document.getElementById('part-two').innerHTML, 10) + 1;
        if (newInnerValue === 100) {
            newInnerValue = 0;
        }

        // If Number smaller than 10, add a zero before
        newInnerValue += "";
        if (newInnerValue.length < 2) {
            newInnerValue = "0" + newInnerValue;
        }

        document.getElementById('part-two').innerHTML = newInnerValue;
        updateWholePage();
    });
    document.getElementById('part-three').addEventListener('click', function() {

        let newInnerValue = parseInt(document.getElementById('part-three').innerHTML, 10) + 1;
        if (newInnerValue === 100) {
            newInnerValue = 0;
        }

        newInnerValue += "";
        if (newInnerValue.length < 2) {
            newInnerValue = "0" + newInnerValue;
        }

        document.getElementById('part-three').innerHTML = newInnerValue;
        updateWholePage();
    });
    document.getElementById('part-four').addEventListener('click', function() {

        let newInnerValue = parseInt(document.getElementById('part-four').innerHTML, 10) + 1;
        if (newInnerValue === 100) {
            newInnerValue = 0;
        }

        newInnerValue += "";
        if (newInnerValue.length < 2) {
            newInnerValue = "0" + newInnerValue;
        }

        document.getElementById('part-four').innerHTML = newInnerValue;
        updateWholePage();
    });
})();

// function to update page
function updateWholePage() {

    // get values from the buttons
    let firstValue = document.getElementById('part-one').innerHTML;
    let secondValue = document.getElementById('part-two').innerHTML;
    let thirdValue = document.getElementById('part-three').innerHTML;
    let fourthValue = document.getElementById('part-four').innerHTML;

    // concatenate value add a + at beginning
    document.getElementById('target').innerHTML = "+" + firstValue + secondValue + thirdValue + fourthValue;
}
