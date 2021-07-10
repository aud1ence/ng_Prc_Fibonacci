let fibonacci = (num: number): number => {
    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
}

let result = (num: number) => {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum += fibonacci(i);
        console.log(`-> ${fibonacci(i)}`);
        
    }
    console.log(`The sum of list Fibonacci: ${sum}`);
}
result(10);

// Promise
