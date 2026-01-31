const { sum, fullName, checkEmail, multiply, divide, subtract, getUser } = require('./sum');


describe('Math operations', () => {
    test('should return the sum of two numbers', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('should return the multiply of two numbers', () => {
        expect(multiply(2, 3)).toBe(6);
    });

    test('should return the divide of two numbers', () => {
        expect(divide(6, 2)).toBe(3);
    });

    test('should return the subtract of two numbers', () => {
        expect(subtract(3, 2)).toBe(1);
    });
});



test('fullName should return the full name', () => {
  expect(fullName('John', 'Doe')).toEqual({
    firstName: 'John',
    lastName: 'Doe',
    fullName: 'John Doe'
  });
});

test('checkEmail should return true if the email is valid', () => {
  expect(checkEmail('test@test.com')).toBe(true);
});

// toBeTruthy
test('checkEmail should return true if the email is valid', () => {
  expect(checkEmail('test@test.com')).toBeTruthy();
});


test('getUser should return the users', async () => {
  const users = await getUser();
  expect(users).toBe('ok');
});