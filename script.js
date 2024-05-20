function firstNonRepeatedChar(str) {
 // Write your code here
	const obj = {}
    for (let ch of str) {
        let currChar = obj[ch];
        //if charecter is available return +1 or else return 1
        
        obj[ch] = currChar?obj[ch]+1:1;
    }
    const arr = [];
    let isFind = false;
    
    for (let key in obj) {
      if(obj[key] == 1){
        arr.push(key);
        isFind = true;
      }
    }
    if(isFind){
      return arr;
    }else{
      return null;
    }
    
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
