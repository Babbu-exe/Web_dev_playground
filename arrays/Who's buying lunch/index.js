 //(Math.random()*buyers.length) will generate a random number between 0 to length of array
 //and Math.floor will round it down to nearest whole number

 
function lunchbuyer(){
    const buyers =["babbu","imran papa","ifu","sultan mishra","kallu"];
    const randombuyer =buyers[Math.floor(Math.random()*buyers.length)];
    return randombuyer +" is buying lunch today!";
}