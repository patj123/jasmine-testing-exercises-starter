describe("Calculator Tests", function () {
  let container;

  // Setup initial values before each test
  beforeEach(function () {
    // Create a container element to hold dynamically created elements
    container = document.createElement('div');
    document.body.appendChild(container);

    // Create and append the input elements for loan amount, years, and rate
    const loanAmountInput = document.createElement('input');
    loanAmountInput.type = 'number';
    loanAmountInput.id = 'loan-amount';
    container.appendChild(loanAmountInput);

    const loanYearsInput = document.createElement('input');
    loanYearsInput.type = 'number';
    loanYearsInput.id = 'loan-years';
    container.appendChild(loanYearsInput);

    const loanRateInput = document.createElement('input');
    loanRateInput.type = 'number';
    loanRateInput.id = 'loan-rate';
    container.appendChild(loanRateInput);

    // Set initial values for the inputs
    loanAmountInput.value = '100000';
    loanYearsInput.value = '3';
    loanRateInput.value = '5.00';

    // Call the setupIntialValues function
    setupIntialValues();
  });

  // Test case: should calculate the monthly rate correctly
  it('should calculate the monthly rate correctly', function () {
    const values = { amount: 10000, years: 8, rate: 3.14 };
    expect(calculateMonthlyPayment(values)).toEqual('117.93');
  });

  // Test case: should return a result with 2 decimal places
  it("should return a result with 2 decimal places", function () {
    const values = { amount: 10000, years: 8, rate: 3.14 };
    expect(calculateMonthlyPayment(values)).toEqual('117.93');
  });

  // Test case: This should get correct current UI values
  it('should get correct current UI values', function () {
    // Define the expected values
    const expectedValues = { amount: 100000, years: 3, rate: 5.00 };
    // Call the getCurrentUIValues function
    const values = getCurrentUIValues();
    // Expect the result to match the expected values
    expect(values).toEqual(expectedValues);
  });

  // Test case for updateMonthly function
  it('should update monthly payment UI correctly', function () {
    // Create a div element to hold the monthly payment UI
    const monthlyPaymentDiv = document.createElement('div');
    monthlyPaymentDiv.id = 'monthly-payment';
    container.appendChild(monthlyPaymentDiv);

    // Call the updateMonthly function with a sample monthly payment value
    updateMonthly('117.93');
    const monthlyUI = document.getElementById("monthly-payment");
    // Expect the UI element to have the correct content
    expect(monthlyUI.innerText).toEqual("$117.93");
  });

  // Teardown logic: Reset initial values after each test
  afterEach(function () {
    // Clear the container element instead of the entire document body
    container.innerHTML = '';
  });
});