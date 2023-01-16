const feast=(beast, dish)=>{
return(beast.toLowerCase().charAt(0) === dish.toLowerCase().charAt(0)&&beast.toLowerCase().charAt(beast.length-1)==dish.toLowerCase().charAt(dish.length-1)?true:false)
};

console.log(feast("great blue heron", "garlic naan"));