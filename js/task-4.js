let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;
let result;
let count = prompt("Количество дроидов которые пользователь хочет купить");


if(count === null) { 
    result = "Отменено пользователем!";
} else { 
    totalPrice = pricePerDroid * count;

if((credits - totalPrice) <= 0) {  
    result = "Недостаточно средств на счету!.";
} else {
    (credits = credits - totalPrice);
    result = `Вы купили ${count} дроида(ов), на счету осталось ${credits}`;
    }
}

console.log(result);

    
        
         
       
        

        
            
 
        