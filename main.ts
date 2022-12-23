import { Application, Router } from './deps/deps'

let colors: string[]

const router = new Router()
router
    .get('/', (ctx) => {
      ctx.response.headers.set('Content-Type', 'text/html')
      ctx.response.body = ``
    })
    .post('/', (ctx) => {
      const { color } = ctx.request.body
      colors.push(color)
      ctx.response.body = `Color ${color} has been successfully added.`
    })

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

const PORT: number = 8080
await app.listen({ port: PORT })