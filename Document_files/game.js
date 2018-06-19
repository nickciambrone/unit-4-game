


var userScore = 0
var firstRandom = Math.floor(Math.random() * 17);
var secondRandom = Math.floor(Math.random() * 17);
var thirdRandom = Math.floor(Math.random() * 17);
var fourthRandom = Math.floor(Math.random() * 17);
var answer = (Math.floor((Math.random() * 101) + 19))
var wins=0
var losses=0

$("#randomNumberBox").text(answer)
$("#firstButton").on("click", function () {
    userScore += firstRandom
    $("#totalScore").text(userScore)
    if (userScore > answer) {
        losses++
        $("#losses").text(losses)
        userScore=0
        $("#totalScore").text(userScore)
        answer=(Math.floor((Math.random() * 101) + 19))
        $("#randomNumberBox").text(answer)
        firstRandom = Math.floor(Math.random() * 17);
        secondRandom = Math.floor(Math.random() * 17);
        thirdRandom = Math.floor(Math.random() * 17);
        fourthRandom = Math.floor(Math.random() * 17);
    }
    if (userScore == answer) {
        wins++
        $("#wins").text(wins)
        userScore=0
        $("#totalScore").text(userScore)
        answer=(Math.floor((Math.random() * 101) + 19))
        $("#randomNumberBox").text(answer)
        firstRandom = Math.floor(Math.random() * 17);
        secondRandom = Math.floor(Math.random() * 17);
        thirdRandom = Math.floor(Math.random() * 17);
        fourthRandom = Math.floor(Math.random() * 17);
    }
    console.log(userScore)
    console.log(answer)  
})
$("#secondButton").on("click", function () {
    userScore += secondRandom
    $("#totalScore").text(userScore)
    if (userScore > answer) {
        losses++
        $("#losses").text(losses)
        userScore=0
        $("#totalScore").text(userScore)
        answer=(Math.floor((Math.random() * 101) + 19))
        $("#randomNumberBox").text(answer)
        firstRandom = Math.floor(Math.random() * 17);
        secondRandom = Math.floor(Math.random() * 17);
        thirdRandom = Math.floor(Math.random() * 17);
        fourthRandom = Math.floor(Math.random() * 17);
        
        
       
    }
    if (userScore == answer) {
        wins++
        $("#wins").text(wins)
        userScore=0
        $("#totalScore").text(userScore)
        answer=(Math.floor((Math.random() * 101) + 19))
        $("#randomNumberBox").text(answer)
        firstRandom = Math.floor(Math.random() * 17);
        secondRandom = Math.floor(Math.random() * 17);
        thirdRandom = Math.floor(Math.random() * 17);
        fourthRandom = Math.floor(Math.random() * 17);
       
    }
    console.log(userScore)
console.log(answer)

})
$("#thirdButton").on("click", function () {
    userScore += thirdRandom
    $("#totalScore").text(userScore)
    if (userScore > answer) {
        losses++
        $("#losses").text(losses)
        userScore=0
        $("#totalScore").text(userScore)
        answer=(Math.floor((Math.random() * 101) + 19))
        $("#randomNumberBox").text(answer)
        firstRandom = Math.floor(Math.random() * 17);
        secondRandom = Math.floor(Math.random() * 17);
        thirdRandom = Math.floor(Math.random() * 17);
        fourthRandom = Math.floor(Math.random() * 17);
       
        
    }
    if (userScore == answer) {
        wins++
        $("#wins").text(wins)
        userScore=0
        $("#totalScore").text(userScore)
        answer=(Math.floor((Math.random() * 101) + 19))
        $("#randomNumberBox").text(answer)
        firstRandom = Math.floor(Math.random() * 17);
        secondRandom = Math.floor(Math.random() * 17);
        thirdRandom = Math.floor(Math.random() * 17);
        fourthRandom = Math.floor(Math.random() * 17);
       
    }
    console.log(userScore)
console.log(answer)

})
$("#fourthButton").on("click", function () {
    userScore += fourthRandom
    $("#totalScore").text(userScore)
    if (userScore > answer) {
        losses++
        $("#losses").text(losses)
        userScore=0
        $("#totalScore").text(userScore)
        answer=(Math.floor((Math.random() * 101) + 19))
        $("#randomNumberBox").text(answer)
        firstRandom = Math.floor(Math.random() * 17);
        secondRandom = Math.floor(Math.random() * 17);
        thirdRandom = Math.floor(Math.random() * 17);
        fourthRandom = Math.floor(Math.random() * 17);
       
    }
    if (userScore == answer) {
        wins++
        $("#wins").text(wins)
        userScore=0
        $("#totalScore").text(userScore)
        answer=(Math.floor((Math.random() * 101) + 19))
        $("#randomNumberBox").text(answer)
        firstRandom = Math.floor(Math.random() * 17);
        secondRandom = Math.floor(Math.random() * 17);
        thirdRandom = Math.floor(Math.random() * 17);
        fourthRandom = Math.floor(Math.random() * 17);
       
    }
    console.log(userScore)
console.log(answer)

})





