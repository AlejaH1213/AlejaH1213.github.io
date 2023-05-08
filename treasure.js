var treasureNumber = Math.floor(Math.random() *25)
var bombNumber = Math.floor(Math.random() *25)
var treasureNumber2 = Math.floor(Math.random()*25)
var bombNumber2 = Math.floor(Math.random()*25)
var counter = 5

    
const treasure = (location) => {
    if(counter === 0){
        alert('sorry, you are a loser')
        return
    }
    if (treasureNumber === bombNumber){
    location.reload()
    }
    else if (treasureNumber === location || treasureNumber2 === location){
        document.getElementById("table").innerHTML = "<img src=pirate-dance.gif>"
        return alert ("You won!");
    }
    else if(bombNumber ===location || bombNumber2 ===location){
        document.getElementById("table").innerHTML = "<img src=bomb.gif>"
        return alert ('You are dead, try again');
    }else {
        document.getElementById(location).innerHTML = "🌴"
        document.getElementById ("counter").innerHTML = counter -= 1
    }
}
