
function Fibonacci(num) {
    if (num <= 1)
        return 1;
    else
        return Fibonacci(num - 1) + Fibonacci(num - 2);
}

function Strongnumber(num) {
    
    sum = 0;
    r = 0;
    temp = num;
    while (num) {
        i = 1;
        fact = 1;
        r = num % 10;
        while (i <= r) {
            fact = fact * i;
            i++;
        }
        sum = sum + fact;
        num = Math.floor(num / 10);
    }
    if (temp == sum) {
        return " Strong Number";
    } else {
        return "Not a Strong Number";
    }
}

function Palindrome(num) {
    let a, b, temp = 0;
    b = num;
    while (num > 0) {
        a = num % 10;
        num = parseInt(num / 10);
        temp = temp * 10 + a;
    }
    if (temp == b) {
        window.confirm("The given number " + b + " is a Palindrome number");
        return "The given number " + b + " is a Palindrome number"
    }
    else {
        window.confirm("The given number " + b + " is Not a Palindrome number");
    }
}


function calculator() {
    var Select
    if (document.getElementById("Strongnumber").selected) {
        Select = "Strongnumber";
    }
    else if (document.getElementById("Fibonacci").selected) {
        Select = "Fibonacci";
    }
    else if (document.getElementById("Palindrome").selected) {
        Select = "Palindrome";
    }
    const n = document.getElementById("number").value;
    switch (Select) {

        case "Fibonacci":
            document.getElementById("result").innerHTML = Fibonacci(n);
            break;
        case "Strongnumber":
            document.getElementById("result").innerHTML = Strongnumber(n);
            break;
        case "Palindrome": document.getElementById("result").innerHTML = Palindrome(n);
            break;
    }
}
$('.menu').click(function () {
    $('.navMobileList').slideToggle();
})
