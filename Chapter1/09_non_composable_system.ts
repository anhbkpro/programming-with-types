namespace NonComposableSystem {
    function findFirstNagativeNumber (numbers: number[]): number | undefined {
        for(let number of numbers){
            if (number < 0){
                return number;
            }
        }
    }

    function findFirstOneCharacterString(strings: string[]): string | undefined {
        for (let str of strings){
            if (str.length == 1){
                return str;
            }
        }
    }
}