
let personalMovieDB = {
    count: 0, // number
    movies: {}, // ??
    actors: {}, // ??
    genres: [], // string[]
    isPrivate: false
}


function askQuestions() {
    let lastSeen;
    let lastRate;

    do {
        lastSeen = prompt("Какой фильм вы посмотрели последним?");
        lastRate = prompt("На сколько оцените его?");

        if ((lastSeen.length >= 0 && lastSeen.length <= 50) && (lastRate.length >= 0 && lastRate.length <= 50)) {
            break;
        } else {
            alert("Пожалуйста, введите корректные значения от 0 до 50.");
        }
    } while (true);

    return [lastSeen, lastRate];
}

let numberOfFilms = prompt("Сколько фильмов мы уже посмотрели?")
personalMovieDB.count = numberOfFilms

if (personalMovieDB.count > 0) {
    let lastSeen = ""
    let lastRate = ""
    let answers = []
    for (let i = 0; i < personalMovieDB.count; i++) {
        answers = askQuestions()
        console.log(answers)
        personalMovieDB.count = numberOfFilms
        personalMovieDB.movies[answers[0]] = answers[1]
    }
    if (personalMovieDB.count < 10) {
        alert("Просмотрено мало фильмов")
    }
    else if (personalMovieDB.count < 10 && personalMovieDB.count > 30) {
        alert("Вы классический зритель")

    } else {
        alert("Вы киноман")

    }
    showMyDB()
}

function showMyDB() {
    if (!personalMovieDB.isPrivate)
        console.log(personalMovieDB)
}

document.querySelector('button').onclick = function () {
    for (let i = 1; i < 4; i++) {
        let genre = prompt(`Ваш любимый жанр под номером: ${i}`)
        personalMovieDB.genres.push(genre)
    }
}



