/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener('click', function() {

        // get json
        fetch("../../_shared/api.json")
            .then(response => {
                return response.json();
            })
            .then(heroList => {

                // Get variables that we will use often
                let heroName = document.getElementById('hero-id').value.toLowerCase();
                let xmenTemplate = document.getElementById('tpl-hero');
                let xmenTemplateClone = xmenTemplate.content.cloneNode(true);
                let heroToBeShown = null;

                // set hero to be shown as a vairbale
                for (let hero in heroList.heroes) {
                    if (heroName == heroList.heroes[hero].name.toLowerCase()) {
                        heroToBeShown = heroList.heroes[hero];
                        console.log(heroToBeShown);
                    }
                }

                // error check
                if (heroToBeShown === null) {
                    alert('choose from: Cyclops, Marvel Girl, Beast, Angel, or Iceman');
                    return;
                }

                // using the clone to set inner HTML
                xmenTemplateClone.querySelector('.name').innerHTML = heroToBeShown.name + '</br>';
                xmenTemplateClone.querySelector('.alter-ego').innerHTML = heroToBeShown.alterEgo;
                xmenTemplateClone.querySelector('.powers').innerHTML += '<ul style="text-decoration: underline; padding-right: 50px;">Powers';
                for (let i = 0; i < heroToBeShown.abilities.length; i++) {
                    xmenTemplateClone.querySelector('.powers').innerHTML += '<li>' + heroToBeShown.abilities[i] + '</li>';
                }
                xmenTemplateClone.querySelector('.powers').innerHTML += '</ul>';

                document.getElementById('target').appendChild(xmenTemplateClone);

            });
    });
})();
