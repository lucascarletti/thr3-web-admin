const statusCheck = require('../statusCheck')

test('test statusCheck returning ok', () => {
    expect(statusCheck()).toBe("ok")
})