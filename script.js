function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    for(let i=0; i<numOfDice; i++){
        const value = Math.floor(Math.random()*6)+1;
        //console.log(value); use this to check
        
        values.push(value);
        images.push(`<img src="img/${value}.png">`)

        diceResult.textContent = `dice:${values.join(',')}`; //play the game. roll dice to see
        diceImages.innerHTML = images.join('');
    }
}