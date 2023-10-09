<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `ReferenceError: greetign is not defined`

<i>In the given code, there is a typo in the variable name. The variable is declared as let greeting; but is assigned a value using the incorrect spelling greetign = {};. JavaScript is case-sensitive, so greeting and greetign are considered different variables. As a result, greetign is not defined, leading to a ReferenceError when trying to log its value.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: `"12"`

<i>In JavaScript, when the + operator is used with a string and a number, it performs string concatenation. In the given code, the function sum(1, "2") is called with a number 1 and a string "2". JavaScript converts the number 1 into a string and concatenates it with the string "2", resulting in the string "12"</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>The info object is created with a property favoriteFood that initially references the first element of the food array, which is "🍕". However, later in the code, info.favoriteFood is reassigned to "🍝". This reassignment does not affect the original food array. When console.log(food) is executed, it prints the original food array, which remains unchanged.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>The sayHi function expects a name parameter, but when it is called in console.log(sayHi()); without passing any argument, the name variable inside the function is undefined. JavaScript does not throw an error in this case; instead, it uses the default value of undefined for the name parameter. Therefore, the function returns "Hi there, undefined" when logged to the console.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>The forEach method iterates over each element in the nums array. In JavaScript, 0 is considered a falsy value, and all other numbers (including 1, 2, and 3 in this case) are truthy. The if (num) condition checks if the current element is truthy, and if it is, the count variable is incremented by 1. Since there are three truthy values (1, 2, and 3) in the array, the count variable becomes 3. When console.log(count) is executed, it prints the value of count, which is 3.</i>

</p>
</details>


