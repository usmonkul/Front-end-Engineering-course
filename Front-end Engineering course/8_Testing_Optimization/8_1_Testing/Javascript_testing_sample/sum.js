function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function subtract(a, b) {
    return a - b;
}

function fullName(firstName, lastName) {
    return {
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`
    };
}

function checkEmail(email) {
    return email.includes('@') && email.includes('.');
}


async function getUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    if (data.length > 0) {
        return 'ok';
    }
    throw new Error('No users found');
}


module.exports = {
    sum,
    fullName,
    checkEmail,
    multiply,
    divide,
    subtract,
    getUser
};