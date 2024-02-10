// Anatomy of a JavaScript Function
/**
 * function addition(a, b) {
 *  // const result = a + b; -> 3
 *    return result;
 * }
 *
 * const responseOfFunction = addition(1,2);
 * responseOfFunction -> 3
 */

// DRY -> Don't Repeat yourself
function addition(a, b) {
  const response = a + b;
  console.log("response:", response);
  return response;
}

let h2Element = document.querySelector("h2");

h2Element.innerText = addition(1, 2);
console.log(h2Element.innerText);

const name = () => {
  const value = "Foo";
  return value;
};

console.log("name", name());

(function () {
  console.log("anonymous function!");
})();

document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});
