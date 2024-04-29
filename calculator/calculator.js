window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanAmount = document.getElementById('loan-amount');
  const loanYears = document.getElementById('loan-years');
  const loanRate = document.getElementById('loan-rate');
  const initialValues = {amount: 100000, years: 3, rate: 5.00};
  loanAmount.value = initialValues.amount;
  loanYears.value = initialValues.years;
  loanRate.value = initialValues.rate;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const initialUIValues = getCurrentUIValues();
  calculateMonthlyPayment(initialUIValues);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate/100)/12
  
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {

}
