
var treasureNumber = Math.floor(Math.random() *25)

var bombNumber = Math.floor(Math.random() *25)

var treasureNumber2 = Math.floor(Math.random()*25)

var bombNumber2 = Math.floor(Math.random()*25)

var counter = 5
    
const treasure = (location) => {
    if (counter === 1){
        alert('one last try!')
    }
    if(counter === 0){
        alert('sorry, you are a loser')
        return
    }
    if (treasureNumber === bombNumber){
    location.reload()
   }else if (treasureNumber === location){
        document.getElementById(location).innerHTML = "💰"
    }else if (treasureNumber2 === location){
        document.getElementById(location).innerHTML = "💰"
    }
    else if(bombNumber ===location){
        document.getElementById(location).innerHTML = "💣"
    }else if(bombNumber2 ===location){
        document.getElementById(location).innerHTML = "💣"
    }else {
        document.getElementById(location).innerHTML = "🌳"
        document.getElementById ("counter").innerHTML = counter -= 1
    }
    
    if(treasureNumber=== location){
        alert('congrats you are rich pirate!')
    }else if (treasureNumber2=== location){
        alert('congrats you are rich pirate!')
    }
    if (bombNumber === location){
        alert('you are a dead pirate')
    }else if (bombNumber2 === location){
        alert('you are a dead pirate')
    }
}

