
var treasureNumber = Math.floor(Math.random() *25)

var bombNumber = Math.floor(Math.random() *25)

var treasureNumber2 = Math.floor(Math.random()*25)

var bombNumber2 = Math.floor(Math.random()*25)

// adding tracking variables for has been guessed might help if you make the logic more complex
// var treasureOneFound = false
// var treasureTwoFound = false
// var bombOneFound = false
// var bombTwoFound = false

var counter = 5
    
const treasure = (location) => {
    // i like it when i can program a binary choice of code path,
    // because it tends to limit bugs i introduce later haha
    // this spot feels like user's path is binary: can move or cannot move
    //
    // this is also an interesting example that is less programming
    // and more engineering... but maybe violates the requirements
    // of the assignment? it feels trickier to handle this firing
    // only once when a loss occurs, 
    // 
    // sometimes a more correct and robust outcome can be achieved
    // by simplifying the design, in this case by genericizing the
    // message when the user clicks without having any guesses left.
    if(counter === 0){  
        alert('No more guesses :( restart to try again!')
    }else {
        // now that we've isolated where the counter would need to change, 
        // this feels pretty robust even if the user can waste guesses
        // on already-guessed squares.
        counter -= 1  
        // doing multiple things in one statement is cool, but also makes
        // it a little harder to read.  just a personal preference
 
        // this only fires as the 2nd-to-last guess is made
        // and is notification-only, so we'll just stick it here where
        // it can fire as we hit it.
        if (counter === 1){
            alert('one last try!')
        }

        // one tweak to minify it since you've hard-coded 2 bombs and 2 treasures, 
        // but at the cost of making it harder to make a variable number of bombs/treasures later
        if (treasureNumber === bombNumber){
            // this feels like an awkward way to handle bomb/treasure collisions.
            // the randoms are handled up top, so i'd suggest cleaning up the random
            // values up there as well. as-is you could have duplicates in:
            // T1/B2, T2/B1, T1/T2, B1/B2 
            // 
            // maybe fix up to by choosing a treasure/bomb and then while-loop through 
            // randoms until they don't collide?  this will get complicated quickly, but 
            // might be instructive to try it.
            location.reload()
        }else if (treasureNumber === location || treasureNumber2 === location){
            document.getElementById(location).innerHTML = "💰"
            // this happens at the same time as updating the innerHTML values,
            // as shown by the similarity of the if-block logical checks,
            // so we can move it in with its cousin and prevent users from
            // padding their ego by clicking on treasures over and over
            alert('congrats you are rich pirate! 💰')
        }else if(bombNumber === location || bombNumber2 === location){
            document.getElementById(location).innerHTML = "💣"
            alert('you are a dead pirate 💣')  // same as above
            counter = 0  // if i'm dead, i'm probably not guessing any more hahaha
        }else {
            document.getElementById(location).innerHTML = "🌳"
        }

        // update innerHTML at the end because we modify counter in 2 places now
        document.getElementById ("counter").innerHTML = counter
    }
}