// function system

function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update -total

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

}
// phone increase decress event



document.getElementById('phone-plus').addEventListener('click', function () {

    updateProductNumber('phone', 1212, true)

});

document.getElementById('phone-minus').addEventListener('click', function () {

    updateProductNumber('phone', 1219, false);
})









// handle  increase decrease events

document.getElementById('case-plus').addEventListener('click', function () {

    updateProductNumber('case', 59, true);
});


document.getElementById('case-minus').addEventListener('click', function () {


    updateProductNumber('case', 59, false);
});



























// normal system 
/* document.getElementById('case-plus').addEventListener('click', function () {
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1;
});
document.getElementById('case-minus').addEventListener('click', function () {
    const caseminusInput = document.getElementById('case-number');
    const caseminusNumber = caseminusInput.value;
    caseminusInput.value = parseInt(caseminusNumber) - 1;
});
 */

