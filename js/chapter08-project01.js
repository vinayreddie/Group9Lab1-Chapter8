var taxrate = 0.10;
var shippingmax = 1000;

var subtotal = 0;

for (var i = 0; i < titles.length; i++) {

    let total = calculateTotal(quantities[i], prices[i]);
    subtotal += total;
    outputCartRow(filenames[i], titles[i], quantities[i], prices[i], total);
}

var tax = calculateTax(subtotal, taxrate);
var shipping = calculateShipping(subtotal, shippingmax);
var grand = calculateGrandTotal(subtotal, tax, shipping);

