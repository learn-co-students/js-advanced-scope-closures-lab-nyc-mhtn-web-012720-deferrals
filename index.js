function produceDrivingRange(blockRange) {
    return function(start, end) {
        let startDist = parseInt(start);
        let endDist = parseInt(end);
        let range = Math.abs(endDist - startDist);
        if(range < blockRange) {
            return `within range by ${blockRange - range}`;
        } else {
            return `${range - blockRange} blocks out of range`; 
        }
    }
};

function produceTipCalculator(tip) {
    return function(fare) {
        return fare * tip;
    }
};

function createDriver(){
    let driverId = 0
    return class {
        constructor(name) {
        this.id = driverId++
        this.name = name
        }
    }
};