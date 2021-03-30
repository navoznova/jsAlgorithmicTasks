
//Фибоначчи
function fib(n){
    if(n < 2) {
        return 1;
    } else {
        return fib(n-1) + fib (n-2);
    }
}

//Факториал числа
function fuct(num){
    if(num == 1){
        return 1;

    } else {
        return num * fuct(num - 1);
    }
}

//Сумма чисел
function sumTo(n) {
    //Решение через рекурсию
    if(num == 1){
        return 1;
    } else {
        return num += sumTo(num-1);
    }

    //Решение через цикл
    let sum = 0;
    for(let i = 1; i<=num; i++){
        sum +=i;
    }
    return sum;

    //Арифметическая прогрессия     
    return n * (n + 1) / 2;
}