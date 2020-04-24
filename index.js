


fetch('https://pokeapi.co/api/v2/pokemon/').then(res => res.json())
  .then(response => getPokemon(response.results))
  .catch(err => console.log('err', err))

function getPokemon(data) {
  var counter = 0;
  var container = document.getElementById('testData');

  data.map((pokemon, index) => {
    fetch(pokemon.url).then(res => res.json())
      .then((response) => {
        var div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `<h2 class="title">${response.name}</h2> <img src=${response.sprites.front_default} /> <h3>Attributes</h3> <br>Experience Points: ${response.base_experience}<br>Height: ${response.height} FT<br> Weight: ${response.weight}  <br> <ul><h3>Battle Moves</h3><li><p>${response.abilities[0].ability.name}</li><li><p>${response.abilities[1].ability.name}</p></li></ul>`
        container.appendChild(div)
        counter++;
      })
  })
}


