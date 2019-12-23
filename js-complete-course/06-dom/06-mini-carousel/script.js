/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // set counter fro carousel
    let carouselCounter = 0;

    // listening to button for clicks
    document.getElementById("next").addEventListener("click", function() {
         let imageTag = document.getElementsByTagName("img");

         // check if carousel starts over or not
         if (carouselCounter === 5) {
            carouselCounter = 0;
         }

         // set attribute
         imageTag[0].setAttribute("src", gallery[carouselCounter]);
         carouselCounter++;
    });

})();
