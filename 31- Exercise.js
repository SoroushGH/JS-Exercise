var movies = ['matrix', 'the dark knight', 'a beautiful mind', 'american pie']
var movieList = []

function addToList(array) {
    movies.forEach((item, idx) => {
        movieList.push({ title: item, id: idx })
    })
    return movieList
}

addToList(movies)