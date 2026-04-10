function validatePassword(password) {
      let mp=new Map();
      for(let num of password){
            mp.set(num,(mp.get(num)||0)+1);
      }
      let valid=true;
      let hasTwo=false;
      let maxkey=-1;
      let maxi=-Infinity;
      for(let [key,value] of mp) {
            if(value%2!==0){
              valid=false;
            }
            if(value===2){
              hasTwo=true;
            }
            if((value>maxi)||(value===maxi && key<maxkey)){
              maxi=value;
              maxkey=key;
            }
      }
      if(!hasTwo){
        valid=false;
      }
      return [valid?"VALID":"INVALID",maxkey];
}
function main() {
      const input = require('fs').readFileSync('/dev/stdin', 'utf8');
      const data = input.trim().split(/\s+/);
      const N = parseInt(data[0], 10);
      const password = data.slice(1).map(Number);
      const [validationResult, mostFrequentElement] = validatePassword(password);
      console.log(validationResult);
      console.log(mostFrequentElement);
}
main();
  
  
        
                  
        
  
  
  
  
        
  
