function exponentialPopulationGrowth() {
    
    let intialPop = parseFloat( prompt('Enter the initial population: '));
    let rateGrowth = parseFloat( prompt('Enter the rate of growth: '));
    let timeHours = parseFloat( prompt('Enter the time in hours: '));
    
    let finalPop = Math.round(intialPop*Math.pow(Math.E, (rateGrowth*timeHours)));
    
    let location = prompt('Enter the location of the Monster');
    let monsterName = prompt('Enter the name of the Monster');
    
    let nameAndLoc = location.concat(" ", monsterName).toUpperCase();
    
    document.getElementById("result").innerHTML="After " + timeHours + " hour/s, the population of " + nameAndLoc + " has risen to " + finalPop + "."; 
}
