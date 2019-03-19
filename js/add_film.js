// url
// add
// genre
// name_film
// description
// start
// end
// prise
$(document).ready(function() {
  $('#add').click(function() {
    var films = []

    if (localStorage.getItem('FILMS') != undefined) {
      //check date on a localStorage
      films = JSON.parse(localStorage.getItem('FILMS')) //continue a write date in a localStorage
    }
    var img = $('#img').val()
    var genre = $('#genre').val()
    var name_film = $('#name_film').val()
    var description = $('#description').val()
    var start = $('#start').val()
    var end = $('#end').val()
    var prise = $('#prise').val()
    // alert(img + "\n"+ genre
    // +"\n"+name_film+"\n"+description+"\n"+start
    // +"\n"+end+"\n"+prise);

    var film = {}
    film.Img = img
    film.Genre = genre
    film.Name_film = name_film
    film.Description = description
    film.Start = start
    film.End = end
    film.Prise = prise

    // var i = films.length
    // films[i] = film
    // console.log(films)
    // localStorage.setItem('FILMS', JSON.stringify(films))
    var idFilm = films.push(film)
    // console.log(users);
    localStorage.setItem('FILMS', JSON.stringify(films))

    
  })

  
})
function getFilms() {
  var films = JSON.parse(localStorage.getItem('FILMS'))
  return films
}

function deleteFilm(filmId) {
  var films = JSON.parse(localStorage.getItem('FILMS'))
  films.splice(filmId, 1)
  localStorage.setItem('FILMS', JSON.stringify(films))
}
