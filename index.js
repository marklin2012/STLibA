const Koa = require('koa')
const app = new Koa()
const { getContent } = require('./sub/liba/test')

// test v0.1.2
app.use( async (ctx) => {
    ctx.body=`test main project + ${getContent()}`
})

app.listen(3000)

console.log('[main] start-quick is starting at port 3000')