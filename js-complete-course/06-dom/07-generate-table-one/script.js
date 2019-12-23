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
    let divForTable = document.getElementById("target");
    let generateNewTable = document.createElement("TABLE");
    let generateTableBody = document.createElement("TBODY");

    // looping 10 times to create table
    for (i = 0; i < 10; i++) {

        // only create table during first loop
        if (i === 0) {
            divForTable.appendChild(generateNewTable);
            generateNewTable.appendChild(generateTableBody);
        }

        // create all the elements
        let tableRow = document.createElement("TR");
        let tableData = document.createElement("TD");
        let fillerText = document.createTextNode("Filling");

        // append elements to eachother
        tableData.appendChild(fillerText);
        tableRow.appendChild(tableData);
        generateTableBody.appendChild(tableRow);

    }
})();
