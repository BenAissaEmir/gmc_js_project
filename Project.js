// String Manipulation Function
function Ch_Counter(ch) {
    let char_count = 0;
    let voyel_count = 0;
    let words_count = 0; 

    for (let char of ch) {
        char_count++;
        
        if (char === " ") {
            console.log(" espace : " + char);
            words_count++;
        }
        
        if (char === "n") {
        }

        if ("aeiouyAEIOUY".includes(char)) {
            voyel_count++;
        }
    }
    
    return {
        totalCharacters: char_count,
        totalVowels: voyel_count,
        totalSpaces: words_count
    };
}

console.log(Ch_Counter("My name is Emir."));
// Array Functions:
function Sum_of_Array(arr){
    let sum = 0;
    for(let i = 0; i < arr.length;i++){
        sum+= arr[i]
    }
    return sum;
}
console.log(Sum_of_Array([10,20,25,5]));
// Mathematical Functions:
function Factorial_number(num) {
    if (num < 0) return "Undefined"; 
    
    let result = 1;
    
    for (let i = 2; i <= num; i++) {
        result *= i; 
    }
    
    return result;
}

console.log(Factorial_number(5)); 
console.log(Factorial_number(0)); 