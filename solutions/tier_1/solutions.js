// ---------------------------------------------
// Решения задач из tasks/tier_1/task_list.md
// ---------------------------------------------

//// ---- 1 уровень:

// 1. Возвести A в степень B.
function power(a, b) {
  return a ** b;
}

// 2. День недели по числу от 1 до 7.
function getWeekDay(dayNumber) {
  const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

  if (!Number.isInteger(dayNumber) || dayNumber < 1 || dayNumber > 7) {
    return "Некорректный номер дня";
  }

  return days[dayNumber - 1];
}

// 3. Вывести наибольшее из двух чисел.
function maxOfTwo(a, b) {
  return a > b ? a : b;
}

// 4. Перевод долларов в гривны.
function usdToUah(usd, rate) {
  return usd * rate;
}

//// ---- 2 уровень:

// 1. Четное / нечетное.
function parity(number) {
  return number % 2 === 0 ? "четное" : "нечетное";
}

// 2. Наименьшее из трех чисел.
function minOfThree(a, b, c) {
  let min_value = a > b ? b : a;
  min_value = min_value > c ? c : min_value;
  return min_value;
}

// 3. Режим сна Ани.
function sleepStatus(a, b, h) {
  if (h < a) {
    return "Недосып";
  }

  if (h > b) {
    return "Пересып";
  }

  return "Это нормально";
}

//// ---- 3 уровень:

// 1. Простой калькулятор.
function calculator(first, second, operation) {
  switch (operation) {
    case "+":
      return first + second;
    case "-":
      return first - second;
    case "*":
      return first * second;
    case "/":
      if (second === 0) return "Деление на ноль невозможно";
      return first / second;
    case "mod":
      if (second === 0) return "Деление на ноль невозможно";
      return first % second;
    case "pow":
      return first ** second;
    case "div":
      if (second === 0) return "Деление на ноль невозможно";
      return Math.trunc(first / second);
    default:
      return "Неизвестная операция";
  }
}

// 2. Проверка делимости A на B и B на A.
function divisibilityCheck(a, b) {
  const aDivisibleByB = b !== 0 && a % b === 0;
  const bDivisibleByA = a !== 0 && b % a === 0;

  return {
    aDivisibleByB,
    bDivisibleByA
  };
}

// 3. Есть ли одинаковые цифры в трехзначном числе.
function hasSameDigits(threeDigitNumber) {
  const number = Math.abs(threeDigitNumber);

  if (number < 100 || number > 999) {
    return false;
  }

  const a = Math.floor(number / 100);
  const b = Math.floor(number / 10) % 10;
  const c = number % 10;

  return a === b || a === c || b === c;
}

// Примеры запуска
console.log("1.1 power(2, 5):", power(2, 5));
console.log("1.2 getWeekDay(4):", getWeekDay(4));
console.log("1.3 maxOfTwo(17, 9):", maxOfTwo(17, 9));
console.log("1.4 usdToUah(50, 39.5):", usdToUah(50, 39.5));

console.log("2.1 parity(11):", parity(11));
console.log("2.2 minOfThree(7, -3, 10):", minOfThree(7, -3, 10));
console.log("2.3 sleepStatus(7, 9, 6):", sleepStatus(7, 9, 6));

console.log("3.1 calculator(10, 3, 'mod'):", calculator(10, 3, "mod"));
console.log("3.2 divisibilityCheck(12, 4):", divisibilityCheck(12, 4));
console.log("3.3 hasSameDigits(787):", hasSameDigits(787));

module.exports = {
  power,
  getWeekDay,
  maxOfTwo,
  usdToUah,
  parity,
  minOfThree,
  sleepStatus,
  calculator,
  divisibilityCheck,
  hasSameDigits
};
