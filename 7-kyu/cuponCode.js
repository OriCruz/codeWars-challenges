function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    let d1 = new Date(currentDate);
    let d2 = new Date(expirationDate);
   //  if(d1.getTime()<=d2.getTime() && enteredCode === correctCode){
   //          return true;
   //        }
   //   else{
   //        return false;
   //       }
   // return(enteredCode === correctCode ? (d1.getTime()<=d2.getTime()? true : false) : false);
     return(enteredCode === correctCode ? (d1<=d2? true : false) : false);
   }