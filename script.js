let quoteText = null;
let quoteDisplayEl = document.getElementById("quoteDisplay");

let url = "https://apis.ccbp.in/random-quote";
let options = {
    method: "GET"
}
fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        let qoute = jsonData.content;
        quoteDisplayEl.textContent = qoute;
        quoteText = qoute;
    })


let timerEl = document.getElementById("timer");
let secondsEl = document.getElementById("seconds");
let counter = 0;
timerEl.textContent = counter;
secondsEl.textContent = "seconds"
let intervalId = setInterval(function() {
    console.log(counter);
    counter = counter + 1;
    spinnerEl.classList.add("d-none");
    secondsEl.classList.remove("d-none");
    timerEl.classList.remove("d-none");
    timerEl.textContent = counter;
    secondsEl.textContent = "seconds";
}, 1000);

let submitBtnEl = document.getElementById("submitBtn");
let quoteInput = document.getElementById("quoteInput");
let resultEl = document.getElementById("result");
let resetBtnEl = document.getElementById("resetBtn");

submitBtnEl.addEventListener("click", function() {
    if (quoteText === quoteInput.value) {
        clearInterval(intervalId);
        resultEl.textContent = "You typed in " + counter + " seconds";
    } else {
        resultEl.textContent = "You typed incorrect sentance";
    }
})
let spinnerEl = document.getElementById("spinner");
resetBtnEl.addEventListener("click", function() {
    counter = 0;
    spinnerEl.classList.remove("d-none");
    secondsEl.classList.add("d-none");
    timerEl.classList.add("d-none");

})