/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    // event listener
    document.getElementById('run').addEventListener('click', function() {

        // on click, fetch api and read to console
        fetch('../../_shared/api.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                return data.heroes;
            })
            .then(objects => {

                // get id to be removed
                let idToBeRemoved = parseFloat(document.getElementById('hero-id').value);

                // error check
                if (isNaN(idToBeRemoved) || Number.isInteger(idToBeRemoved) === false || idToBeRemoved > 5 || idToBeRemoved < 1) {
                    alert('please enter a real number between 1 and 5.');
                    return;
                }

                // remove from array
                objects.splice(idToBeRemoved - 1, 1)
                console.log(objects);
            });
    });
})();
