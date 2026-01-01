var num=prompt("enter a number");
if (num % 3===0 && num % 5===0){
    alert("fizzbuzz");
}
else if (num % 3===0){
    alert("fizz");
}
else if (num % 5===0){
    alert("buzz");
}  
else{
    alert(num);
}