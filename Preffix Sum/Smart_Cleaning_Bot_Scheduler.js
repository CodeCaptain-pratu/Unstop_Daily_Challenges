function maxRoomsCleaned(N, E, dirtLevels) {
    /**
     * Write your logic here.
     * Parameters:
     *   N (number): Number of rooms
     *   E (number): Total energy available
     *   dirtLevels (Array<number>): Dirt levels of each room
     * Returns:
     *   number: Maximum number of rooms cleaned
     */
    let sum=0;
    let total=0;
    let canCleanRoom=0;
    for(let i=0;i<N;i++){
      sum+=dirtLevels[i]
      total=sum+2*i;
      if(total<=E){
      canCleanRoom=i+1;
      }else{
      break;
      }
    }
    return canCleanRoom; // Placeholder return
}

(function() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8');
    const lines = input.trim().split('\n');
    const [N, E] = lines[0].split(' ').map(Number);
    const dirtLevels = lines[1].split(' ').map(Number);

    // Call user logic function and print the output
    const result = maxRoomsCleaned(N, E, dirtLevels);
    console.log(result);
})();
