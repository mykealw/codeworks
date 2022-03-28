let homeScore = 0
let awayScore = 0

function homeScored() {
    homeScore++
    console.log(homeScore);
    drawHome(homeScore)
}

function drawHome() {
    let homeElem = document.getElementById('home')
    homeElem.innerText = homeScore
}

function awayScored() {
    awayScore++
    console.log(awayScore)
    drawAway(awayScore)
}

function drawAway() {
    let awayElem = document.getElementById('away')
    awayElem.innerText = awayScore
}

function reset() {
    homeScore = 0
    awayScore = 0
    drawHome(homeScore)
    drawAway(awayScore)
}

function homeReset() {
    homeScore = 0
    drawHome(homeScore)
}

function awayReset() {
    awayScore = 0
    drawAway(awayScore)
}

function homeScored3() {
    homeScore = homeScore + 3
    console.log(homeScore);
    drawHome(homeScore)
}

function awayScored3() {
    awayScore = awayScore + 3
    console.log(awayScore)
    drawAway(awayScore)
}

function homeReduction(){
    homeScore--
    drawHome(homeScore)
}

function awayReduction(){
    awayScore--
    drawAway(awayScore)
}