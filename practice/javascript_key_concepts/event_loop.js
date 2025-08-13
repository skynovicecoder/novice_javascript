console.log('Hiii');

//testEventloop(); //this will also run due to hoisting of the function declaration and definition both

function testEventloop(){
    console.log('A');
    setTimeout(() => console.log('B'), 0);
    Promise.resolve().then(() => console.log('C'));
    console.log('D');
}

testEventloop();