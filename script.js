const inputOneEl = document.getElementById("input-box1");
const inputTwoEl = document.getElementById("input-box2");
const submitBtnEl = document.getElementById("button");
const messageEl = document.getElementById("message");
const formEl = document.getElementById("form");

function getData(event) {
     event.preventDefault();
     const inputOneVal = inputOneEl.value;
     const inputTwoVal = inputTwoEl.value;
     console.log(inputOneVal, inputTwoVal);

     if (isAnagram(inputOneVal, inputTwoVal)) {
          messageEl.innerHTML = "Yes, entered inputs are Anagram";
     } else {
          messageEl.innerHTML = "No, entered inputs are not Anagram";
     }
}

formEl.addEventListener("submit", getData);

function isAnagram(text1, text2) {
     const text1Arr = text1.trim().toLowerCase().split("").sort();
     const text2Arr = text2.trim().toLowerCase().split("").sort();

     return Array.isArray(text1Arr) &&
          Array.isArray(text2Arr) &&
          text1Arr.length === text2Arr.length &&
          text1Arr.every((val, index) => val === text2Arr[index])
          ? true
          : false;
}
