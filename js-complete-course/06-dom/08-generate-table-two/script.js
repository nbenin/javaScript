/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // using shorter formula from last exercise
    document.getElementById('target').appendChild(document.createElement('TABLE'));
    document.getElementsByTagName('table')[0].appendChild(document.createElement('TBODY'));

    // nested for loops
    for (i = 0; i < 10; i++) {
        document.getElementsByTagName('tbody')[0].appendChild(document.createElement('TR'));
        for (j = 0; j < 10; j++) {
            document.getElementsByTagName('tr')[i].appendChild(document.createElement('td'));
            document.getElementsByTagName('td')[(i * 10) + j].appendChild(document.createTextNode((i + 1) * (j + 1)));
        }
    }

})();
