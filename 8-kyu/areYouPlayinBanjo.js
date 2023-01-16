function areYouPlayingBanjo(name) {
    // Implement me
    //if statemnet to check the first letter of the name.
    //return a concatenate string or template literal
    let newName = name.toLowerCase();
    if(newName.charAt(0)=='r'){
      return `${name} plays banjo`
    }
    else{
      return `${name} does not play banjo`
    }
  }