namespace ComposableSystem {
    function first<T>(range: T[], p: (elem: T) => boolean): T | undefined {
        for(let elem of range){
            if (p(elem)) return elem;
        }
    }

    function findFirstNagativeNumber(numbers: number[]) : number | undefined {
        return first(numbers, n => n < 0);
    }

    function findFirstOneCharacterString(strs: string[]): string | undefined {
        return first(strs, s => s.length == 1);
    }
}
