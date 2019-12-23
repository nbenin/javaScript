/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // create table elements
    let generateNewTable = document.createElement("TABLE");
    let generateTableRow = document.createElement("TR");
    let generateTableData = document.createElement("TD");

    // select "target" div and append


    for (i = 0; i < 10; i++) {
        if (i === 0) {
            let divForTable = document.getElementById("target");
            divForTable.appendChild(generateNewTable);
        }
        generateNewTable.appendChild(generateTableRow);
        generateTableRow.appendChild(generateTableData);


    }
})();
