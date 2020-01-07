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

        let xmenTemp = document.getElementsByTagName('template')[0];

        // on click, fetch api and append
        fetch('../../_shared/api.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                return data.heroes;
            })
            .then(objects => {

                // loop through and append
                for (let obj in objects){
                    console.log(objects[obj]);
                    let listNode = document.importNode(xmenTemp.content.querySelector('li'), true);
                    listNode.textContent += 'Name: ' + objects[obj].name;
                    document.getElementById('target').appendChild(listNode);
                }
            });
    });
})();
