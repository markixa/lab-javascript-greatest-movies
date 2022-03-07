//import movies from "./data.js";


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple 
//movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified 
//(without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map(element => {

  });
/*   for (let i=0; i<movies.length; i++){
    allDirectors[i]=movies[i];
  } */

  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const arrayDramaFilter=movies.filter((element) => {
    return element==="Drama";
  });
  return arrayDramaFilter.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
/*   array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;  
  }); */
  //array.reduce((accumulator, currentValue) => accumulator + currentValue);
  movies.reduce((accumulator, currentValue) => accumulator + currentValue);
  return Number((accumulator/movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average score of Drama Movies
function dramaMoviesScore(movies) {
  let averageScore=0;
  if (movies.length>0){

  }
  return Number(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const yearSortedMovies=movies.sort((a,b) => parseFloat(a.year)-parseFloat(b.year));
    return yearSortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {


}










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
    bestYearAvg,
  };
}
