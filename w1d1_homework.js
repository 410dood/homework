/* Concatenation works with two strings only. You can use interpolation with numbers, booleans, etc. without first turning them into Strings, which you would have to do if you used concatenation.

concatenation example:
var firstName = "Bill";
var lastName = "Doody";
var age = 28;
currentYear = 2018
var x = currentYear - 1990;
var stringAge = "28";


concatenation
fullName = firstName + lastName; //works
nameAge = firstName + age // doesnt work
nameAge = firstName + stringAge // works

interpolation example:
nameAge = firstName + " is" + x // variables work with interpolation but not concatenation


DRY = dont repeat yourself
*/

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

/*BOOLEAN EXPRESSIONS*/
console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a !== b % c);
console.log(a === a % d);
console.log(e === 'Kevin');
console.log(48 !== '48');

//INFINITE LOOP
//infinite loop I - Yes
//infinite loop II - Not infinite, because runProgram = false; stopped the code from continuing to run

//READING CODE
console.log('Reading Code');
// compound asignment guess is 20;
// the answer was: AAAAAAAAAAAAAAAAAAAAA
// my mind went straight to a number; i didn't even think about it returning letters.


//SECTION4

// a for loop is used when we know the number of times we need the loop to perform the operation; whereas a while loop is used until a condition is satisfied.
for (let i=0; i <= 999; i++) {
    console.log(i);
}
/*
start value, end value, step value
The first part of the control panel is: for (let i=0;
The second part of the control panel is: i < 100;
The third part of the control panel is: i++) {console.log('Without you, today\'s emotions are the scurf of yesterday\'s');}
*/

for (let i=999; i >= 0; i--) {
    console.log(i);
}


for (let i=1; i <= 10; i++) {
    console.log("The value of i is: " + i + " of 10");
}

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
console.log(StarWars);
//console.log(StarWars[i]);

for(var i = 0; i < StarWars.length; i+=2) {
 console.log(StarWars[i]);
}

/*
command + "terminal"
cd desktop
mkdir galaxy_far_far_away
cd galaxy_far_far_away
mkdir death_star
cd death_star
touch darth_vader.txt priness_leia.txt storm_trooper.txt
cd ..
mkdir tatooine
cd tatooine
touch luke.txt ben_kenobi.txt
mkdir millenium_falcon
cd millenium_falcon
touch han_solo.txt chewbaca.txt
cd ..
mv ben_kenobi.txt obi_wan.txt
cd death_star
cp storm_trooper.txt" ../tatooine
mv luke.txt ..
mv obi_wan.txt millenium_falcon
mv millenium_falcon ~/galaxy_far_far_away
mv millenium_falcon ~/galaxy_far_far_away/death_star
mv priness_leia ~/galaxy_far_far_away/millenium_falcon
rm obi_wan.txt
cd galaxy_far_far_away
mkdir yavin_4
mv millenium_falcon ~/galaxy_far_far_away/yavin_4
cd yavin_4
mkdir x_wing
cd ..
mv luke ~galaxy_far_far_away/yavin_4/x_wing
mv priness_leia ~galaxy_far_far_away/yavin_4
mv millenium_falcon ..
mv x_wing ..
cd death_star
mkdir tie_fighter_1 tie_fighter_2 tie_fighter_3
cd..
cd..
cd death_star
mv darth_vader.txt tie_fighter_1
cp storm_trooper {tie_fighter_1 tie_fighter_tie_fighter_2}
mv tie_fighter_1 ..
mv tie_fighter_2 ..
mv tie_fighter_3 ..
rm -iR tie_fighter_2
rm -iR tie_fighter_3
cd ..
cd x_wing 
touch the_force.txt
rm -iR death_star
mv x_wing yavin_4
mv millenium_falcon yavin_4
*/



//SECTION6
// You learn by doing, not by listening. Real leaning comes from making mistakes and figuring out how to fix them.

//slack
//1. learned how to paste code blocks and edit a message i already sent
//2. learned some slack shortcuts which i think will be super useful

//SECTION7
