const fun1 = function (val) { 
    counter = counter + val;
    const output = `<div> Hello ${counter}</div>`;
    document.write(output);
}

let counter = 0; 
let word = ''; 
fun1(21);
fun1(2);
fun1(3);
fun2('h');
fun2('e');
fun2('l');
fun2('l');
fun2('o');
 


function fun2(val) { 
    word = word + val;
    counter++; 
    let output = `<div> Hello ${counter}</div>`;
    output += `<div> Hello ${word}</div>`; 
    document.write(output);
}

let valTotal = fun3(10, 44, 55);

valTotal += valTotal = fun3(10, 44, 55);
console.log(valTotal)
function fun3(num1, num2, num3) { 
    
    const total = num1 + num2 + num3; 
    return total; 
}