/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // getting value from data-target and making new tag
    let newImageNode = document.createElement("img");
    newImageNode.setAttribute("src", document.querySelector("#source").getAttribute("data-image"));

    // appending new tag to figure and removing span
    document.getElementById("target").appendChild(newImageNode);
    let imageSource = document.getElementById("source");
    imageSource.parentNode.removeChild(imageSource);


})();
