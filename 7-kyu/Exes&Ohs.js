function XO(str) {
    //str has the same number of x's and o's
    //set string to lowerCase
    //iterate over the string 
    //keep counter for x and o
    //returns a boolean
    //code here
    let s = str.toLowerCase();
    let counterX=0;
    let counterO=0;
    for(let i=0; i<s.length; i++){
  
      if(s[i]=='x'){
        counterX ++;
      }
      else if (s[i]=='o'){
        counterO++;
      }
    }
    if(counterX === counterO){
         return true;
        }
    else if(s.includes('x') || s.includes('o')){
      return false;
    }
  }