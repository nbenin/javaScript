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

        // convert number to string for later concatenation. If under 10, add a zero before
        newInnerValue += "";
        if (newInnerValue.length < 2) {
            newInnerValue = "0" + newInnerValue;
        }

        // add new value to page
        document.getElementById('part-one').innerHTML = newInnerValue;

    });
    document.getElementById('part-two').addEventListener('click', function() {

        let newInnerValue = parseInt(document.getElementById('part-two').innerHTML, 10) + 1;
        if (newInnerValue === 100) {
            newInnerValue = 0;
        }

        newInnerValue += "";
        if (newInnerValue.length < 2) {
            newInnerValue = "0" + newInnerValue;
        }

        document.getElementById('part-two').innerHTML = newInnerValue;
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
    });

    // Add listener to the whole button section, on change update info in target
    document.getElementsByClassName('actions')[0].addEventListener('change', function() {

        // get values from the buttons
        let firstValue = document.getElementById('part-one').innerHTML;
        let secondValue = document.getElementById('part-two').innerHTML;
        let thirdValue = document.getElementById('part-three').innerHTML;
        let fourthValue = document.getElementById('part-four').innerHTML;

        document.getElementById('target').innerHTML = firstValue + secondValue + thirdValue + fourthValue;
    });

})();
