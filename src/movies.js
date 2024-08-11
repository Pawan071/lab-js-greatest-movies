// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return [...new Set(moviesArray.map((movie) => movie.director))];
}
const directors = getAllDirectors(movies);
console.log(directors);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter((movie) => {
    if (movie.director === 'Steven Spielberg') {
      return movie.director;
    }
  });
}

const steven = howManyMovies(movies);
console.log(steven);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const totalScore = moviesArray.reduce((sum, movie) => sum + movie.score, 0);
  const averageScore = totalScore / moviesArray.length;

  return Number(averageScore.toFixed(2));
}

const average = scoresAverage(movies);
console.log(average);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes('Drama')
  );

  if (dramaMovies.length === 0) return 0;

  const totalScore = dramaMovies.reduce((sum, movie) => sum + movie.score, 0);
  const averageScore = totalScore / dramaMovies.length;

  return Number(averageScore.toFixed(2));
}

const dramAverage = dramaMoviesScore(movies);
console.log(dramAverage);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return [...moviesArray].sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
}
const sortedMovies = orderByYear(movies);
console.log(sortedMovies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
    .map((movie) => movie.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);
}
const first20Titles = orderAlphabetically(movies);
console.log(first20Titles);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((moive) => {
    const durationParts = moive.duration.split(' ');
    let minutes = 0;
    durationParts.forEach((part) => {
      if (part.includes('h')) {
        minutes += parseInt(part) * 60;
      } else if (part.includes('min')) {
        minutes += parseInt(part);
      }
    });
    return {
      ...moive,
      duration: minutes
    };
  });
}

const movieInMinutes = turnHoursToMinutes(movies);
console.log(movieInMinutes);

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;
  const scoresByYear = {};
  moviesArray.forEach((moive) => {
    if (!scoresByYear[moive.year]) {
      scoresByYear[moive.year] = [];
    }
    scoresByYear[moive.year].push(moive.score);
  });
  let bestYear = null;
  let bestAvgScore = 0;

  for (const year in scoresByYear) {
    const scores = scoresByYear[year];
    const avgScore =
      scores.reduce((sum, score) => sum + score, 0) / scores.length;

    if (avgScore > bestAvgScore) {
      bestAvgScore = avgScore;
      bestYear = year;
    } else if (avgScore === bestAvgScore && year < bestYear) {
      bestYear = year;
    }
  }
  return `The best year was ${bestYear} with an average score of ${bestAvgScore.toFixed(
    2
  )}`;
}

const bestYear = bestYearAvg(movies);
console.log(bestYear);

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
