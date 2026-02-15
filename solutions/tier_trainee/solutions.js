// ---------------------------------------------
// Решения задач из tasks/tier_3/task_list.md
// ---------------------------------------------

//// ---- 1 уровень:

// 1. Приоритет операторов и выражения.
function expressionResults(a, b, c) {
  return {
    defaultPriority: a + b * c,
    withParentheses: (a + b) * c,
  };
}

// 2. Строка из переменных.
function profileString(userName, userAge, userCity) {
  return `Имя: ${userName}, возраст: ${userAge}, город: ${userCity}`;
}

// 3. Типы значений.
function detectTypes(values) {
  return values.map((value) => typeof value);
}

// 4. Сумма двух чисел, переданных строками.
function sumNumericStrings(first, second) {
  const a = Number(first);
  const b = Number(second);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return "Некорректный ввод";
  }

  return a + b;
}

// 5. Операции со счётчиком.
function applyCounterSteps(counter) {
  let result = counter;
  result += 5;
  result *= 2;
  result -= 1;
  return result;
}

// 6. Оператор присваивания с операцией + унарный оператор.
function addThenDecrement(a, b) {
  let result = a;
  result += b;
  result -= 1;
  return result;
}

//// ---- 2 уровень:

// 1. Создание, добавление и удаление свойств объекта.
function manageUserObject(name, age, isStudent = false) {
  const user = { name, age };
  user.isStudent = isStudent;
  user.email = `${String(name).toLowerCase()}@mail.com`;
  delete user.age;
  return user;
}

// 2. Вложенные свойства.
function setUserAddress(user, city, zip) {
  if (!user.address) {
    user.address = {};
  }

  user.address.city = city;
  user.address.zip = zip;
  return user;
}

// 3. Сокращённый формат + метод объекта.
function createProduct(title, price, inStock) {
  return {
    title,
    price,
    inStock,
    getInfo() {
      return `${this.title}: ${this.price} грн (${this.inStock ? "в наличии" : "нет в наличии"})`;
    },
  };
}

// 4. Методы объекта и this.
function createAccount(owner, balance = 0) {
  return {
    owner,
    balance,
    deposit(amount) {
      if (amount <= 0) {
        return this.balance;
      }

      this.balance += amount;
      return this.balance;
    },
    withdraw(amount) {
      if (amount <= 0 || amount > this.balance) {
        return "Недостаточно средств";
      }

      this.balance -= amount;
      return this.balance;
    },
  };
}

// 5. Работа с глобальным объектом Math.
function mathReport(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  const sum = numbers.reduce((acc, current) => acc + current, 0);
  const average = sum / numbers.length;

  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers),
    roundedAverage: Math.round(average),
  };
}

// 6. JSON stringify/parse.
function jsonRoundTrip(obj) {
  const json = JSON.stringify(obj);
  const parsed = JSON.parse(json);

  return {
    json,
    parsed,
  };
}

//// ---- 3 уровень:

// 1. Мутирующее изменение объекта.
function mutateName(user, newName) {
  user.name = newName;
  return user;
}

// 2. Изменение объекта без мутации.
function updateNameImmutable(user, newName) {
  return {
    ...user,
    name: newName,
  };
}

// 3. Функция с параметром по умолчанию.
function greetUser(name = "Гость") {
  return `Привет, ${name}!`;
}

// 4. Колбэк-функция.
function applyOperation(a, b, callback) {
  if (typeof callback !== "function") {
    return "Колбэк не является функцией";
  }

  return callback(a, b);
}

// 5. Цепочка областей видимости (closure).
function buildScopeMessage(globalLabel) {
  return function outer(outerLabel) {
    return function inner(innerLabel) {
      return `global=${globalLabel}, outer=${outerLabel}, inner=${innerLabel}`;
    };
  };
}

// 6. Калькулятор в строгом режиме.
function strictCalculator(first, second, operation) {
  "use strict";

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

// Примеры запуска
console.log("1.1 expressionResults(2, 3, 4):", expressionResults(2, 3, 4));
console.log("1.2 profileString(...):", profileString("Анна", 23, "Киев"));
console.log("1.3 detectTypes(...):", detectTypes([42, "42", true, null, undefined, {}]));
console.log("1.4 sumNumericStrings('10', '5.5'):", sumNumericStrings("10", "5.5"));
console.log("1.5 applyCounterSteps(4):", applyCounterSteps(4));
console.log("1.6 addThenDecrement(10, 3):", addThenDecrement(10, 3));

const user = manageUserObject("Alex", 19, true);
console.log("2.1 manageUserObject(...):", user);
console.log("2.2 setUserAddress(...):", setUserAddress(user, "Lviv", "79000"));

const product = createProduct("Наушники", 2499, true);
console.log("2.3 createProduct(...):", product);
console.log("2.3 product.getInfo():", product.getInfo());

const account = createAccount("Maria", 1000);
console.log("2.4 account.deposit(300):", account.deposit(300));
console.log("2.4 account.withdraw(500):", account.withdraw(500));
console.log("2.4 account.withdraw(2000):", account.withdraw(2000));

console.log("2.5 mathReport([4, 9, 11, 20]):", mathReport([4, 9, 11, 20]));
console.log("2.6 jsonRoundTrip(product):", jsonRoundTrip(product));

const mutableUser = { name: "Olga", age: 28 };
console.log("3.1 mutateName(...):", mutateName(mutableUser, "Olesya"));
console.log("3.1 исходный объект после мутации:", mutableUser);

const immutableUser = { name: "Ivan", age: 30 };
console.log("3.2 updateNameImmutable(...):", updateNameImmutable(immutableUser, "John"));
console.log("3.2 исходный объект без мутации:", immutableUser);

console.log("3.3 greetUser():", greetUser());
console.log("3.3 greetUser('Maks'):", greetUser("Maks"));

console.log("3.4 applyOperation(7, 3, (a, b) => a * b):", applyOperation(7, 3, (a, b) => a * b));

const scopeFn = buildScopeMessage("GLOBAL");
console.log("3.5 buildScopeMessage(...):", scopeFn("OUTER")("INNER"));

console.log("3.6 strictCalculator(10, 3, 'mod'):", strictCalculator(10, 3, "mod"));

module.exports = {
  expressionResults,
  profileString,
  detectTypes,
  sumNumericStrings,
  applyCounterSteps,
  addThenDecrement,
  manageUserObject,
  setUserAddress,
  createProduct,
  createAccount,
  mathReport,
  jsonRoundTrip,
  mutateName,
  updateNameImmutable,
  greetUser,
  applyOperation,
  buildScopeMessage,
  strictCalculator,
};
