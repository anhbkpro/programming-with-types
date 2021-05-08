namespace InsufficientTypeInformation {
    // Without providing enough type information, 
    // we can allow a value of any type to be passed as an argument to our function. 
    // We are going to hit run-time errors if the argument is not a string
    // Solution: make any to string, so in the line 11, there will be a compile-time error
    function scriptAt(s: any) : number {
        return s.indexOf("Script");
    }

    console.log(scriptAt("TypeScript"));
    console.log(scriptAt(42));
}