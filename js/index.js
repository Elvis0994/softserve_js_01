function print(val) {
    document.write(val + '<br>');
}

const a = Number(prompt('Enter the coefficient a'));
const b = Number(prompt('Enter the coefficient b'));
const c = Number(prompt('Enter the coefficient c'));

function discr(a, b, c) {
    const res = b * b - 4 * a * c;
    return res;
}

function quadEquation(a, b, c) {
   const d = discr(a, b, c);
    if (d > 0) {
        const dSqrt = Math.sqrt(d);
        const x1 = (-b + dSqrt)/(2*a);
        const x2 = (-b - dSqrt)/(2*a);
        return 'Discriminant is ' + d + '<br>' + 'Result is: x1 = ' + x1 +';' + '<br>' + 'x2 = ' + x2 + ';' ;
    }else if(d === 0){
        const dSqrt = Math.sqrt(d);
        const x = (-b + dSqrt)/(2*a);
        return 'Discriminant is ' + d + '<br>' + 'Result is: x = ' + x +';';
    }else {
    return 'Discriminant is ' + d + '<br>' + 'There are no real roots as discriminant < 0';   
    }
}   

document.write('Your equation: ' + a + 'x&sup2 + ' + b + 'x + ' + c + ' = 0' + '<br>');
const result = quadEquation(a,b,c);
print(result);