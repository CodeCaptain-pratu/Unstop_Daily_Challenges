function calculateMaxReward(numTrucks, numShipments, truckLimits, shipments) {
    // User logic goes here
    truckLimits.sort((a,b)=>a-b);
    let arr=[];
    for(let {pickup,delivery,reward} of shipments){
        let dist = 2 * Math.max(pickup,delivery);
        arr.push([dist,reward]);
    }
    arr.sort((a,b)=>a[0]-b[0]);
    let heap=[];
    let i=0, total=0;
    for(let truck of truckLimits){
        while(i<arr.length && arr[i][0]<=truck){
            heap.push(arr[i][1]);
            i++;
        }
        if(heap.length>0){
            heap.sort((a,b)=>b-a);
            total+=heap.shift();
        }
    }
    return total; // Placeholder return statement
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
readline.on('line', line => {
    input.push(line);
}).on('close', () => {
    const [numTrucks, numShipments] = input[0].split(' ').map(Number);
    const truckLimits = input[1].split(' ').map(Number);
    const shipments = input.slice(2).map(line => {
        const [pickup, delivery, reward] = line.split(' ').map(Number);
        return { pickup, delivery, reward };
    });

    const maxReward = calculateMaxReward(numTrucks, numShipments, truckLimits, shipments);

    console.log(maxReward);
});
