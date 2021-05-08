namespace DynamicTyping {
    // The function takes an argument of type any, so it bypasses compile-time type checking.
    function quacker(duck:any) {
        duck.quack();
    }

    quacker({quack: function(){ console.log("quack"); }}); // prints “quack.”
    quacker(42); // This causes a run-time error: TypeError: duck.quack is not a function.
}