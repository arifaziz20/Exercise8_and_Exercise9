
//remember to put keyword 'function' before declaring any function!
function calMonthlyPayment(loan,depo,ann_rate,repaymnt){

  let totalPrinciple = loan-depo;
  let totalInterest = (ann_rate/100)*totalPrinciple*repaymnt;
  let totalToPay = totalInterest+totalPrinciple;
  let monthlyToPay = totalToPay/repaymnt/12;

  return monthlyToPay.toFixed(2);
}

  let calcButton = document.getElementById("kira");
  calcButton.addEventListener("click", function() {
    let carloan =  document.getElementById("principal").value;
    let deposit =  document.getElementById("deposit").value;
    let rate =  document.getElementById("interest").value;
    let repay =  document.getElementById("years").value;
  document.getElementById("payment").innerHTML = "RM " + calMonthlyPayment(carloan,deposit,rate,repay);
});
