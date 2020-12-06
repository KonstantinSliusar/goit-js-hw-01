let china = "китай";
let chilie = "чили";
let australia = "австралия";
let india = "индия";
let jamaica = "ямайка";
let country;
let delivery = prompt(`Введите страну доставки`);
delivery = delivery.toLowerCase();
switch (delivery) {
    case china:
        country = 'Китай';
        console.log(`Доставка в ${country} будет стоить 100 кредитов`);
        break;
    case chilie:
        country ='Чили';
        console.log(`Доставка в ${country} будет стоить 250 кредитов`);
        break;
    case australia:
        country = 'Австралия';
        console.log(`Доставка в ${country} будет стоить 170 кредитов`);
        break;
    case india:
        country = 'Индия';
        console.log(`Доставка в ${country} будет стоить 80 кредитов`);
        break;
    case jamaica:
        country = 'Ямайку';
        console.log(`Доставка в ${country} будет стоить 120 кредитов`);
        break;
    default:
        alert(`В вашей стране доставка не доступна`);
}





