// ---------------------------------------------
// Решения задач из tasks/tier_2/task_list.md
// ---------------------------------------------

//// ---- 1 уровень:

// 1. Через сколько секунд вода закипит.
function boilingTimeSeconds(startTemp = 7, targetTemp = 100) {
  if (startTemp >= targetTemp) {
    return 0;
  }

  const delta = targetTemp - startTemp;
  return delta * 2;
}

// 2. Пять строк из "000" с нумерацией.
function numberedZeroLines(lines = 5) {
  const result = [];

  for (let i = 1; i <= lines; i += 1) {
    result.push(`${i}. 000`);
  }

  return result;
}

// 3. Прямоугольный треугольник из '*'.
function rightTriangle(height) {
  const rows = [];

  for (let i = 1; i <= height; i += 1) {
    rows.push("*".repeat(i));
  }

  return rows.join("\n");
}

//// ---- 2 уровень:

// 1. Можно ли пронести коробку через дверь.
function canBoxPassDoor(a, b, c, m, k) {
  const door = [m, k].sort((x, y) => x - y);
  const faces = [
    [a, b],
    [a, c],
    [b, c],
  ];

  for (const face of faces) {
    const [x, y] = face.sort((p, q) => p - q);

    if (x <= door[0] && y <= door[1]) {
      return "Да";
    }
  }

  return "Нет";
}

// 2. Равнобедренный треугольник из '*'.
function isoscelesTriangle(height) {
  const rows = [];

  for (let i = 1; i <= height; i += 1) {
    const spaces = " ".repeat(height - i);
    const stars = "*".repeat(2 * i - 1);
    rows.push(spaces + stars);
  }

  return rows.join("\n");
}

// 3. Квадраты натуральных чисел меньше N.
function squaresLessThanN(n) {
  const result = [];
  let i = 1;

  while (i * i < n) {
    result.push(i * i);
    i += 1;
  }

  return result;
}

//// ---- 3 уровень:

// 1. Можно ли купить ровно k шариков (по 3 и по 5).
function canBuyIceCreamBalls(k) {
  for (let fivePortions = 0; fivePortions * 5 <= k; fivePortions += 1) {
    const remainder = k - fivePortions * 5;

    if (remainder % 3 === 0) {
      return "Да";
    }
  }

  return "Нет";
}

// 2. Через сколько лет вклад превысит s.
function yearsToExceedDeposit(m, k, s) {
  let amount = m;
  let years = 0;

  while (amount <= s) {
    amount += (amount * k) / 100;
    years += 1;
  }

  return years;
}

// 3. Сумма цифр числа N.
function digitSum(n) {
  let number = Math.abs(n);
  let sum = 0;

  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }

  return sum;
}

//// ---- Задачи на работу со списком через цикл:

// 1. Сумма всех элементов списка.
function sumArrayElements(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }

  return sum;
}

// 2. Сумма чётных элементов списка.
function sumEvenElements(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }

  return sum;
}

// 3. Минимальный и максимальный элемент списка.
function minMaxInArray(arr) {
  if (arr.length === 0) {
    return null;
  }

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return { min, max };
}

// 4. Индексы минимального и максимального элемента.
function minMaxIndices(arr) {
  if (arr.length === 0) {
    return null;
  }

  let minIndex = 0;
  let maxIndex = 0;

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }

    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }

  return { minIndex, maxIndex };
}

//// ---- Задачи на методы списка:

// 1. Сформировать итоговый список покупок.
function buildShoppingList() {
  const list = [];

  list.push("молоко", "огурцы", "пиво", "рыбка");
  list.push("чай", "сахар", "сухарики");

  const withoutBeer = list.filter((item) => item !== "пиво");
  const finalList = withoutBeer.filter((item) => item !== "рыбка");

  return {
    list: finalList,
    count: finalList.length,
  };
}

// 2. Проверка, есть ли число в списке.
function hasNumber(arr, value) {
  return arr.includes(value);
}

// 3. Сколько раз число встречается в списке.
function countOccurrences(arr, value) {
  return arr.filter((item) => item === value).length;
}

// Примеры запуска
console.log("1.1 boilingTimeSeconds():", boilingTimeSeconds());
console.log("1.2 numberedZeroLines(5):\n" + numberedZeroLines(5).join("\n"));
console.log("1.3 rightTriangle(4):\n" + rightTriangle(4));

console.log("2.1 canBoxPassDoor(2, 3, 4, 3, 2):", canBoxPassDoor(2, 3, 4, 3, 2));
console.log("2.2 isoscelesTriangle(4):\n" + isoscelesTriangle(4));
console.log("2.3 squaresLessThanN(30):", squaresLessThanN(30));

console.log("3.1 canBuyIceCreamBalls(11):", canBuyIceCreamBalls(11));
console.log("3.2 yearsToExceedDeposit(10, 10, 15):", yearsToExceedDeposit(10, 10, 15));
console.log("3.3 digitSum(2026):", digitSum(2026));

const sample = [7, 2, 9, 4, 2, 10, -1, 3, 8, 2];
console.log("list.1 sumArrayElements(sample):", sumArrayElements(sample));
console.log("list.2 sumEvenElements(sample):", sumEvenElements(sample));
console.log("list.3 minMaxInArray(sample):", minMaxInArray(sample));
console.log("list.4 minMaxIndices(sample):", minMaxIndices(sample));

console.log("methods.1 buildShoppingList():", buildShoppingList());
console.log("methods.2 hasNumber(sample, 9):", hasNumber(sample, 9));
console.log("methods.3 countOccurrences(sample, 2):", countOccurrences(sample, 2));

module.exports = {
  boilingTimeSeconds,
  numberedZeroLines,
  rightTriangle,
  canBoxPassDoor,
  isoscelesTriangle,
  squaresLessThanN,
  canBuyIceCreamBalls,
  yearsToExceedDeposit,
  digitSum,
  sumArrayElements,
  sumEvenElements,
  minMaxInArray,
  minMaxIndices,
  buildShoppingList,
  hasNumber,
  countOccurrences,
};
