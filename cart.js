///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((arr, curr) => arr + curr.price, 0)

console.log(summedPrice)
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
// function calcFinalPrice(cartTotal, couponValue, tax) {
//     let plusTax = cartTotal * tax + cartTotal
//     let plusCoupon = plusTax * couponValue
//     let finalTotal = plusTax - plusCoupon
//     return finalTotal
// }
function calcFinalPrice(cartTotal, couponValue, tax) {
    let subTotal = cartTotal - couponValue;
    let total =  subTotal * tax + subTotal
    return total.toFixed(2)
}

console.log(calcFinalPrice(summedPrice, 2.00, .06))
//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*

    The object should have firstName, lastName, customerId, and historicalPurchaseCount
    The firstName and lastName needs to be there so we know who the customer is, this will be a string
    The customerId will uniquely identify each customer, this will be a integer
    The historicalPurchaseCount will track how many times they've purchased a meal for the purpose of a fequent visitor program, this will be an integer

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    firstName: "Jane",
    lastName: "Doe",
    historicalPurchaseCount: 5,
    customerId: 3456
}