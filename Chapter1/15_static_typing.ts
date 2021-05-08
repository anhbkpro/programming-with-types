namespace StaticTyping {
    interface Duck {
        quack();
    }

    function quacker(duck: Duck){
        duck.quack();
    }

    quacker({quack: function () { console.log("quack") }})

    // quacker(42); // compilation failure: 42 does not typecheck as a Duck object
}
