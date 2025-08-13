function arrayMethods(){
    const arrayObj = [1,2,3,4];
    console.log(arrayObj);

    const multipleArray = arrayObj.map(num => num*2);
    console.log(multipleArray);

    const even = arrayObj.filter(num => num%2==0);
    console.log(even);

    //Reduces the array to a single value (number, object, string, etc.)
    const reduceResult = arrayObj.reduce((a,b)=> a+b,0);
    console.log(reduceResult);

    arrayObj.push(5);
    console.log(arrayObj);
    
    arrayObj.forEach(num => {
        console.log(num);
    });
}

arrayMethods();