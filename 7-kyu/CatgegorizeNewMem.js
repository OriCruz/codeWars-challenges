function openOrSenior(data){
    //read in the data and clasify it
      let age = 0;
      let handicap = 0;
      let status = [];
      for(let i=0; i<data.length; i++){
        //reads thru the 2D array
          age = data[i][0];
          handicap = data[i][1];
          if(age>=55 && handicap>7){
                  status.push('Senior');
          }
          else {
              status.push('Open');
          }
      }
      return status;
   
  }