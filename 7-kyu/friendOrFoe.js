const friend=(friends)=>{
    let f = [];
    friends.filter((friend)=>
    friend.length ==4? f.push(friend) : null);
    return f;
   }

   