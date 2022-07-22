let name = prompt('Как вас зовут?')
if(name.charAt() == 'A') {
    let age = prompt('Сколько вам лет?')
   if(age >=20) {
    if( age <40) {
        let dollar = prompt('Сколько баблишек есть?')
        if(dollar >=100) {
            let people = prompt('Сколько вас?')
            if(people <= 8) {
                alert('Проходи')
            } else {
                alert('Мест не хватит')
            }
        } else{
            alert('Бомж')
        }
    } else {
        alert('Старик')
    }
   } else{
    alert('Не дорос')
   }
} else {
    alert('Нету вас в списке')
}