describe("Payments test", function () {

    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
        // Test submitPaymentInfo function
        // Create a sample payment and verify if it's added to allPayments
        billAmtInput.value = '100';
        tipAmtInput.value = '10';

        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1); // One payment should be added
        expect(allPayments['payment1']).toBeDefined(); // Payment object should be defined
        expect(allPayments['payment1'].billAmt).toEqual('100'); // Bill amount should be 100
        expect(allPayments['payment1'].tipAmt).toEqual('10'); // Tip amount should be 10
        expect(allPayments['payment1'].tipPercent).toEqual(10); // Tip percent should be 10
    });

    it('should not add a new payment on submitPaymentInfo() with empty or negative inputs', function () {
        // Test submitPaymentInfo function with empty or negative inputs
        billAmtInput.value = ''; // Empty bill amount
        tipAmtInput.value = '-10'; // Negative tip amount

        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(0); // No payment should be added
    });

    it('should update payment table on submitPaymentInfo()', function () {
        // Test submitPaymentInfo function with valid inputs
        billAmtInput.value = '100';
        tipAmtInput.value = '10';

        submitPaymentInfo();

        // Verify if the payment table is updated with the new payment
        let currentTRList = document.querySelectorAll('#paymentTable tbody tr');
        expect(currentTRList.length).toEqual(1); // One row should be added to the table
        expect(currentTRList[0].childNodes.length).toEqual(3); // Each row should have three columns (td)
        expect(currentTRList[0].childNodes[0].innerText).toEqual('$100'); // First column should display the bill amount
        expect(currentTRList[0].childNodes[1].innerText).toEqual('$10'); // Second column should display the tip amount
        expect(currentTRList[0].childNodes[2].innerText).toEqual('10%'); // Third column should display the tip percent
    });

    afterEach(function () {
        // Teardown logic
        // Reset any changes made during the test
        // For example, reset any variables or clear any modified DOM elements

        // Reset any variables
        allPayments = {};
        // Clear any modified DOM elements
        paymentTbody.innerHTML = '';
        // Ensure that summary table is reset
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    });

});
