const randomBtn = document.querySelector('.getRandomPokemon')
const name = document.getElementById('name')
const image = document.getElementById('pokeImage')
const type = document.getElementById('poketype')
const Fability = document.getElementById('firstAbility')
const Hability = document.getElementById('hiddenAbility')


randomBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    name.innerHTML = '<em>loading...</em>'
    type.innerHTML = '<em>loading...</em>'
    Fability.innerHTML = '<em>loading...</em>'
    Hability.innerHTML = '<em>loading...</em>'
    const randomNumber = Math.ceil(Math.random() * 1017)
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`)
        .then(response => response.json())
        .then(pokemon => {
            console.log(pokemon);
            name.innerHTML = pokemon['name']
            image.src =  pokemon["sprites"]["front_default"]
            type.innerHTML = pokemon["types"][0]["type"]["name"]
            // Fability.innerHTML = pokemon["abilities"][0]["ability"]["name"]
            Fability.innerHTML = pokemon["abilities"][0].ability.name
            Hability.innerHTML = pokemon["abilities"][1].ability.name
            if (pokemon["abilities"].length > 1) {
                Hability.innerHTML = pokemon["abilities"][1].ability.name;
            } else {
                Hability.innerHTML = "No hidden ability";
            }
        });
        })
