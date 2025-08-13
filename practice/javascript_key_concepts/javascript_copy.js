function copy(){
    const original = {name:"Sonil", address:{city:"Pune"}};
    //const shallow = {...original};

    // ... Spread Operator
    //const user = { name: "Sonil", age: 30 };
    //const updated = { ...user, age: 31 };  // age updated immutably

    //shallow.name = "Rocky"; //deep copy
    //shallow.address.city="Hyderabad";  //but for aray and object it is always a shallow copy, so reference were copied ,hence will affect both


    const deep = structuredClone(original);

    //const deep = JSON.parse(JSON.stringify(original)); //Simple, but fails for functions, Dates, undefined, etc.

    //JSON.stringify() //Converts a JavaScript object/array into a JSON string.
    //To send data over the network or save it in localStorage, you must turn the object into a string format.

    //JSON.parse()
    //Converts a JSON string back into a JavaScript object.
    //When receiving JSON data from a server or reading from localStorage.

    console.log(typeof deep);

    deep.name = "Sonu";
    deep.address.city="Varanasi";

    console.log("original name: "+original.name);
    console.log("original city: "+original.address.city); //address will be affected for shallow but not for deep copy

    //console.log("shallow name: "+shallow.name);
    //console.log("shallow city: "+shallow.address.city); 

    console.log("deep name: "+deep.name);
    console.log("deep city: "+deep.address.city); 


}

copy();