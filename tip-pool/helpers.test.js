describe("Helpers test", function () {

    it('should sum total payment of specified type', function () {
        // Test sumPaymentTotal function
        // Create some sample payment objects and verify the sum of a type
        let samplePayments = {
            payment1: { tipAmt: 10, billAmt: 100, tipPercent: 10 },
            payment2: { tipAmt: 15, billAmt: 150, tipPercent: 10 },
            payment3: { tipAmt: 20, billAmt: 200, tipPercent: 10 }
        };
        // Assume allPayments is set to samplePayments
        allPayments = samplePayments;

        expect(sumPaymentTotal('tipAmt')).toEqual(45); // Total tipAmt should be 45
        expect(sumPaymentTotal('billAmt')).toEqual(450); // Total billAmt should be 450
        expect(sumPaymentTotal('tipPercent')).toEqual(30); // Total tipPercent should be 30
    });

    it('should calculate tip percent correctly', function () {
        // Test calculateTipPercent function
        // Verify the calculation of tip percent based on billAmt and tipAmt
        expect(calculateTipPercent(100, 10)).toEqual(10); // tip percent for 10 tip on 100 bill is 10%
        expect(calculateTipPercent(150, 15)).toEqual(10); // tip percent for 15 tip on 150 bill is 10%
        expect(calculateTipPercent(200, 20)).toEqual(10); // tip percent for 20 tip on 200 bill is 10%
    });

    it('should append a new td element to a table row', function () {
        // Test appendTd function
        // Create a sample table row and append a new td with a value
        let tr = document.createElement('tr');
        let value = 'Test Value';

        appendTd(tr, value);

        expect(tr.childNodes.length).toEqual(1); // One td element should be appended
        expect(tr.childNodes[0].innerText).toEqual(value); // Inner text of appended td should be the provided value
    });

    afterEach(function () {
        // Teardown logic
        // Reset any changes made during the test
        // Reset any variables
        allPayments = {};
        // Clear any modified DOM elements
        // Ensure that summary table is reset
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    });

});


