import { fifaData } from './fifa.js';
// console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
const task1 = fifaData.filter(function(data){
    if(data.Year === 2014 && data.Stage === 'Final'){
        console.log(data['Home Team Name']);
        console.log(data['Away Team Name']);
        console.log(data['Home Team Goals']);
        console.log(data['Away Team Goals']);
        console.log(data['Win conditions']);
    }
});

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    return data.filter(x => x.Stage === 'Final');

};
console.log(getFinals(fifaData));

/* Task 3: Impliment a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    
    const years = callback.map(x => x.Year);
    return years;

};

console.log(getYears(getFinals(fifaData)));

/* Task 5: Impliment a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {

    const winners = callback.map(function(data){
        if(data['Home Team Goals'] > data['Away Team Goals']){
            return data['Home Team Name'];
        } else {
            return data['Away Team Name'];
        }
    })
    return winners;

};

console.log(getWinners(getFinals(fifaData)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winners, years) {

    return winners.map(function(winner, index){
        return `In ${years[index]}, ${winner} won the world cup!`;
    })

};

console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))));

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
    const winnerInitials = data.map(function(element){
        if(element['Home Team Goals'] > element['Away Team Goals']){
            return element['Home Team Initials'];
        } else {
            return element['Away Team Initials'];
        }
    })

    return winnerInitials.reduce(function(accumulator, index){
        if(index === teamInitials){
            accumulator += 1;
        }
        return accumulator;
    }, 0);

};

console.log(getCountryWins(getFinals(fifaData), 'BRA'));


/* Task 8: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals() {

};

getGoals();


/* Task 9: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();


/* Task 10: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let homeTotal = data.reduce((accumulator, element) => {
        return accumulator += element['Home Team Goals'];
    }, 0);

    let awayTotal = data.reduce((accumulator, element) => {
        return accumulator += element['Away Team Goals'];
    }, 0);

    return `The home average is ${(homeTotal / data.length)}
    \nThe away average is ${(awayTotal / data.length)}`;
};

console.log(getAverageGoals(fifaData));


/// STRETCH 🥅 //

/* Use the space below to work on any stretch goals of your chosing as listed in the README file. */