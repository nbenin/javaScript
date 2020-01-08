/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
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

                // get values and store in variable
                let newHeroName = document.getElementById('hero-name').value;
                let newHeroAlterEgo = document.getElementById('hero-alter-ego').value;
                let newHeroPowers = document.getElementById('hero-powers').value.split(",");
                let newHeroId = objects.length + 1;

                // make new hero using class and push to array
                let userCreatedHero = new Hero(newHeroId,  newHeroName, newHeroAlterEgo, newHeroPowers);
                objects.push(userCreatedHero);
                console.log(objects);

            });
    });
})();

// making a class for New Heroes (thanks emma ;))
class Hero {
    constructor(heroId, heroName, heroAlterEgo, heroAbilities) {
        this.id = heroId;
        this.name = heroName;
        this.alterEgo = heroAlterEgo;
        this.abilities = heroAbilities;
    }
}

