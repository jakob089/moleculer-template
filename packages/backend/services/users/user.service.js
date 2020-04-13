const { SERVICE_USER, sum } = require('./../../constant')

module.exports = {
    name: SERVICE_USER,
    actions: {
        sum: {
            params: {
                num1: 'string',
                num2: 'string',
            },
            handler(ctx) {
                const { num1, num2 } = ctx.params
                return parseInt(num1) + parseInt(num2)
            }
        }
    }
}