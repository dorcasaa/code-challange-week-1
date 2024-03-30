function calculateDemeritPoints(speed) {
    const speedInput = document.getElementById("speedInput");
    const pointsOutput = document.getElementById("pointsOutput");

    const speed = parseFloat(speedInput.value);
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointsPerKmAboveLimit = 1;

    if (speed <= speedLimit) {
        pointsOutput.textContent = "Ok";
        
    } else {
        const kmAboveLimit = speed - speedLimit;
        const demeritPoints = Math.floor(kmAboveLimit / kmPerDemeritPoint) * pointsPerKmAboveLimit;
        pointsOutput.textContent = "Points:" + demeritPoints;
        
        if (demeritPoints > 12) {
            pointsOutput.textContent += "License suspended";
        }
        
        
    }
}


