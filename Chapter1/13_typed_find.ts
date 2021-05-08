namespace TypedFind {
    // this code makes understanding the code a lot easier
    // for any type T, we need to provide an array T[] as the range argument 
    // and a function that takes a T and returns a boolean as the -p argument
    declare function find<T>(range:T[], pred: (elem: T) => boolean): T | undefined;
}