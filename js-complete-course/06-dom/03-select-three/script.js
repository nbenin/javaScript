/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // storing all in a variable
    let allParagraphElements = document.querySelectorAll("p.target");

    // looping through and changing inner html
    for (i = 0; i < allParagraphElements.length; i++) {
        allParagraphElements[i].innerHTML = "Owned";
    }

})();
