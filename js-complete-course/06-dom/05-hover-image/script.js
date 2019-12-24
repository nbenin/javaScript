/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // Store image tag and sources in variables
    let imageTag = document.getElementsByTagName("img");
    let imageBeforeHover = imageTag[0].getAttribute("src");
    let imageAfterHover = imageTag[0].getAttribute("data-hover");
    console.log(imageAfterHover);
    console.log(imageBeforeHover);
    console.log(imageTag);

    // watch for hover and change if hoverd
    imageTag[0].addEventListener("mouseenter", function() {
        imageTag[0].setAttribute("src", imageAfterHover);
    });

    imageTag[0].addEventListener("mouseleave", function() {
        imageTag[0].setAttribute("src", imageBeforeHover);
    })



})();
