namespace Immutability {
    function safeDivide(): number {
        const x: number = 42;
        if (x == 0) throw new Error("x should not be 0");

        //x = x - 42; //compiler do not allow this

        return 42 / x;
    }

    console.log(safeDivide())
}