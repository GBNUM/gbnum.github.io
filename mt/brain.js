let url = 'https://api.themoviedb.org/3/search/movie'
let apikey = '5152522eff144b746606231e78e3c46f'
let imgUrl = 'https://image.tmdb.org/t/p/w500'
let posterEl = document.getElementById('poster')
let titleEl = document.querySelector('.title')
let body = document.querySelector('body')
let movieCont = document.createElement('div')
let search = document.querySelector('.search').addEventListener('click', ()=>{
let moviename = document.querySelector('.tSearch').value
movieCont.remove()
searchMovie(moviename)
})

function searchMovie(moviename){
fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${moviename}`)
.then(response => {
  if (response.ok) {
    return response.json();
  }
})
.then(data => {
  console.log(data.results);
  let results = data.results;
  let length = results.length
  movieCont = document.createElement('div')
  movieCont.classList.add('movieCont')
  body.appendChild(movieCont)
  for(let i = 0; i<length; i++){
    let movie = document.createElement('div')
    movie.classList.add('movie')
    movieCont.appendChild(movie)
   movie.innerHTML = '<img id="poster" class="w-100" src="'+ imgUrl + results[i].poster_path + '" alt="' + moviename +'"> <p class="text-sm bg-danger text-light"> '+ results[i].title + '</p> ';
  };
})
.catch(error => {
  console.error('Fetch operation error:', error);
})
}
let the = 'the'
searchMovie(the)