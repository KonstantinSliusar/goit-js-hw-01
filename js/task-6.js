
let total = 0;
let mainInput ;

do {
    let input = prompt('Введите число');
    if(input === null){
        break;
    }
    
    mainInput = Number(input);
    
    let notANumber = Number.isNaN(mainInput);
    if(notANumber === true) {
        continue;
    }
    total += mainInput;
}while(true);
alert(`Общая сумма чисел равна ${total}`);


