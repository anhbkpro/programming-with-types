namespace StrongTyping {
    const a: string = "hello world";
    const b: number = 42;

    // All three comparisons fail to compile, as TypeScript doesn’t allow comparing different types.
    // console.log(a == b);

    // console.log("42" == b);

    // console.log("42" === b);
}
