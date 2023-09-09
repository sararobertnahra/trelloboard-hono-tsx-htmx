/** @jsx jsx */
/** @jsxFrag Fragment */

import { jsx, Fragment } from 'https://deno.land/x/hono/middleware.ts'
import { Hono } from 'https://deno.land/x/hono/mod.ts'

import { get_new_app_service } from './services/app-service.ts';
import { IndexPage } from './view/index.tsx';

const app = new Hono()

app.get('/', async (c) => {
        const model = await get_new_app_service();
        console.log(model)
        return c.html(
            <IndexPage model={model}/>
        )
    }
)

Deno.serve(app.fetch)