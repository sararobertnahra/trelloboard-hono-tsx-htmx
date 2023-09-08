import { Hono } from 'https://deno.land/x/hono/mod.ts'
import { daoFacadeImpl } from './database/dao-facade-impl.ts'

console.log(await daoFacadeImpl.find_all_boards())

const app = new Hono()

app.get('/', (c) => c.text('Hello Deno!!!!'))

Deno.serve(app.fetch)