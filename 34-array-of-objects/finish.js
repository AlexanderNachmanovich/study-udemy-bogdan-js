/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
  {
    carBrand: "Toyota",
    price: 150000,
    isAvailableForSale: true,
  },
  {
    carBrand: "Volvo",
    price: 300000,
    isAvailableForSale: true,
  },
  {
    carBrand: "Citroen",
    price: 75000,
    isAvailableForSale: false,
  },
];

cars.push({
  carBrand: "Mitsubishi",
  price: 175000,
  isAvailableForSale: true,
});

console.table(cars);
