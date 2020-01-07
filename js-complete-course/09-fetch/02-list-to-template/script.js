/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener('click', function() {

        let xmenTemp = document.getElementById('tpl-hero');

        // on click, fetch api and append
        fetch('../../_shared/api.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                return data.heroes;
            })
            .then(objects => {

                // loop through and append template
                for (let obj in objects) {

                    // add all templated list nodes
                    let listNode = document.importNode(xmenTemp.content.querySelector('li'), true);
                    document.getElementById('target').appendChild(listNode);
                }

                // get lists for editing
                let nameNode = document.getElementsByClassName('name');
                let alterEgoNode = document.getElementsByClassName('alter-ego');
                let powersNode = document.getElementsByClassName('powers');

                // Loop through heroes and add info
                for (let obj in objects) {
                    nameNode[obj].textContent += 'Name: ' + objects[obj].name;
                    alterEgoNode[obj].textContent += 'Alter-Ego: ' + objects[obj].alterEgo;
                    powersNode[obj].textContent += 'Powers: ';

                    // loop for abilities
                    for (let pow = 0; pow < objects[obj].abilities.length; pow++) {
                        powersNode[obj].innerHTML += objects[obj].abilities[pow] + '</br>';

                    }
                }

            });
    });
})();
