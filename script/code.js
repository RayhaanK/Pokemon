const randomBtn = document.querySelector('.getRandomPokemon')
const name = document.getElementById('name')
const image = document.getElementById('pokeImage')
const type = document.getElementById('poketype')
const abilities = document.getElementById('abilities')


randomBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    const randomNumber = Math.ceil(Math.random() * 1017)
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`)
        .then(response => response.json())
        .then(pokemon => {
            console.log(pokemon);
            name.innerHTML = pokemon['name']
            image.src =  pokemon["sprites"].front_default
        })
})
