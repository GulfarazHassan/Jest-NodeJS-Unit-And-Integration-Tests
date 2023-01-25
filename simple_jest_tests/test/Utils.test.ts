import { Utils } from '../app/Utils'

describe('Utils test suit', () => {
    beforeEach(() => {
        console.log('Before Each')
    })

    beforeAll(() => {
        console.log('Before All')
    })

    test('first test', () => {
        const result = Utils.toUpperCase('abc')
        expect(result).toBe('ABC')
    })

    test('parse simple url', () => {
        const parsedUrl = Utils.parseUrl('http://localhost:8080/login');
        expect(parsedUrl.href).toBe('http://localhost:8080/login')
        expect(parsedUrl.port).toBe('8080')
        expect(parsedUrl.protocol).toBe("http:")
        expect(parsedUrl.query).toEqual({})
    })

    test('parse simple url with query', () => {
        const parsedUrl = Utils.parseUrl('http://localhost:8080/login?user=user&password=pass');
        const expectedQuery = {
            user: 'user',
            password: 'pass'
        }
        expect(parsedUrl.query).toEqual(expectedQuery)
    })

    test('Test for invalid url.', () => {
        function expectError() {
            Utils.parseUrl('');
        }
        expect(expectError).toThrowError()
    })

    test('Test for invalid url with arrow function.', () => {
        expect(() => {
            Utils.parseUrl('');
        }).toThrowError()
    })

    test('Test for invalid url with try catch.', () => {
        try {
            Utils.parseUrl('');
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message', 'Invalid url')
        }
    })
})