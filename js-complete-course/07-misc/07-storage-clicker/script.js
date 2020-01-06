/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // set new storage if first time, otherwise set counter
    if (localStorage.getItem('clickCounter') === null) {
        localStorage.setItem('clickCounter', '0');
    }
    else {
        document.getElementById('target').innerHTML = localStorage.getItem('clickCounter');
    }

    // listen for clicks and increment counter
    document.getElementById('increment').addEventListener('click', function() {
        let numberOfClicks = localStorage.getItem('clickCounter');
        numberOfClicks++;
        localStorage.setItem('clickCounter', numberOfClicks);
        document.getElementById('target').innerHTML = numberOfClicks;
    });

})();
