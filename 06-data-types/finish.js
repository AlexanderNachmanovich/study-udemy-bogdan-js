/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

const testString = 'Israel'
const testNumber = 1948
const testBoolean = true
const testNull = null
const testUndefined = undefined
const testObject = {
  name: 'Alexander',
  age: 35,
  birthplace: 'Leningrad'
}
const testArray = [1, 2, 10, 'Hatul', false, true, 'Epsilon']

console.log(typeof testString, typeof testNumber, typeof testBoolean, typeof testNull, typeof testUndefined, typeof testObject, typeof testArray)
