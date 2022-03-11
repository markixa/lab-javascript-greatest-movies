// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple 
//movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified 
//(without duplicates)? 

function getAllDirectors(movies) {
  const allDirectors = movies.map(element => element.director);
  return allDirectors;
}



// Iteration 2: Steven Spielberg. The best? - 
//How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const filteredMovies = movies.filter((element) => {
    if((element.director=="Steven Spielberg")&&((element.genre[0]=="Drama")||(element.genre[1]=="Drama"))){
      return true;
    }else{
      return false;
    }
  })
  return filteredMovies.length;
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) { 
  const averageScore=0;
  if(movies.length>0){
    avgScore=movies.reduce((acc, value) => acc+value.score, 0);
  }
  return Math.round((averageScore/movies.length)*100)/100;
}



// Iteration 4: Drama movies - Get the average score of Drama Movies
function dramaMoviesScore(movies) {
  let avgScore=0;
  if (movies.length>0){
    const filteredByDrama = movies.filter(element => element.genre == "Drama");
    avgScore=filteredByDrama.reduce((avgScore, value) => avgScore + value.score);
  }
  return avgScore.toFixed(2);
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const yearSortedMovies=movies.sort((a,b) => parseFloat(a.year)-parseFloat(b.year));
    return yearSortedMovies;
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const alphabetOrderMovies=[];
  if(movies.length>0){
    //order array
    const sortedArray=movies.map((title) => {
      return movies.title;
    });
    //sort array
    return sortedArray.sort((a, b) => {
      return a-b;//ascending
    })
    //insert on array only 20 first titles
    let i=0;
    do{
      alphabetOrderMovies.push(sortedArray[i]);
      i++;
    }while(alphabetOrderMovies.length<=20);
  }

  return alphabetOrderMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const hoursToMinuteArray=[];


  return hoursToMinuteArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  const bestYear=" ";
  const avgRate=null;
  if (movies.length=0){
    return avgRate;
  }else{
    //fixed return string
    return `The best year was ${bestYear} with an average score of ${avgRate}>`;
  }
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
