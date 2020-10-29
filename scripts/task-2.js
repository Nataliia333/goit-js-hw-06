/*Задача 6-2
filter
Получи массив объектов пользователей, отобранный по цвету глаз (свойство eyeColor), используя деструктурирующее присваивание для параметра функции ({eyeColor}) без пробелов и переносов на новую строку.

Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

Деструктурирующее присваивание для параметра функции

PS Деструктурирующее присваивание (ДП):

1. Объект как параметр без ДП
const object = {num : 2}
function getNum (obj) { return obj.num; }
console.log(getNum(object)) // 2
2. ДП
const object = {num : 2}
// const num  =  object.num;
const { num } = object;
console.log(num) // 2
3. Объект как параметр c ДП
const object = {num : 2}
//function getNum (obj) { return obj.num; }
function getNum ({num}) { return num; }
console.log(getNum(object)) // 2*/
