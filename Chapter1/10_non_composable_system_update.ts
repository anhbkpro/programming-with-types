namespace NonComposableSystemUpdate {
    function findFirstNagativeNumber (numbers: number[]): number | undefined {
        for(let number of numbers){
            if (number < 0){
                return number;
            }
        }
        console.log("No matching value found");
    }

    function findFirstOneCharacterString(strings: string[]): string | undefined {
        for (let str of strings){
            if (str.length == 1){
                return str;
            }
        }
        console.log("No matching value found");
    }
}