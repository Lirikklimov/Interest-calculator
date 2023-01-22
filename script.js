let calculateBtn = document.getElementById("calculate-btn");
let result = document.getElementById("result");

let calculate = () => {
    let principal = Number(document.getElementById("principal").value);
    let rate = Number(document.getElementById("rate").value);
    let time = Number(document.getElementById("time").value);
    let duration = document.getElementById("duration").value;

    let simpleInterest = duration == "year" ? (principal * rate * time) / 100 : (principal * rate * time) /1200;

    let amount = principal + simpleInterest;

    result.innerHTML = `<div>Principal Amount: <span>$${principal.toFixed(
        2
        )}</span></div>
        <div>Total Interest: <span>$${simpleInterest.toFixed(2)}</span></div>
        <div>Total Amount: <span>$${amount.toFixed(2)}</span></div>`;
};
calculateBtn.addEventListener("click", calculate);
window.addEventListener("load", calculate);