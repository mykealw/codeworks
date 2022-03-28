let homeScore = 0
let awayScore = 0
let totalScore = 0

function totalScored() {
 totalScore= homeScore + awayScore
    drawTotalScored()
}

function drawTotalScored() {
    // console.log('word')
    let totalElem = document.getElementById('total')
    totalElem.innerText = totalScore.toString()
}

function homeScored(number) {
    homeScore += number
    console.log(homeScore);
    drawHome()
   totalScored()
}

function drawHome() {
    let homeElem = document.getElementById('home')
    homeElem.innerText = homeScore.toString()
}

function awayScored(number) {
    awayScore += number
    // console.log(awayScore)
    drawAway()
    totalScored()
}

function drawAway() {
    let awayElem = document.getElementById('away')
    awayElem.innerText = awayScore.toString()
}

function reset() {
    homeScore = 0
    awayScore = 0
    totalScore =0
    drawHome()
    drawAway()
    totalScored()
}

function homeReset() {
    homeScore = 0
    drawHome()
    totalScored()
}

function awayReset() {
    awayScore = 0
    drawAway()
    totalScored()
}
