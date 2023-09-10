/** @jsx jsx */
/** @jsxFrag Fragment */

import { jsx, Fragment } from 'https://deno.land/x/hono/middleware.ts'
import { Hono } from 'https://deno.land/x/hono/mod.ts'

import { add_item, add_list, get_app_service, get_new_app_service, remove_item, remove_list } from './services/app-service.ts';
import { IndexPage } from './view/index.tsx';
import { Item, List } from './database/database-config.ts';
import { ItemComponent } from './view/item-component.tsx';
import { NewItemComponent } from './view/new-item-component.tsx';
import { ListComponent } from './view/list-component.tsx';

const app = new Hono()

app.get('/', async (c) => {
    const model = await get_new_app_service();
    //console.log(model)
    return c.html(
        <IndexPage model={model} />
    )
})

app.delete('/hx/components/removeitem', async (c) => {
    const body = await c.req.parseBody()
    const item = new Item("", body.id, null, null)
    const res = await remove_item(item)
    const model = await get_new_app_service()
    return c.html(<html></html>)
})

app.delete('/hx/components/removelist', async (c) => {
    const body = await c.req.parseBody()
    const list = new List(null, "", body.id, null)
    const res = await remove_list(list)
    const model = await get_new_app_service()
    return c.html(<html></html>)
})

app.post('/hx/compoments/addnewlist', async (c) => {
    const body = await c.req.parseBody()
    const list = new List(body.board_id, "", 1, body.name)
    const new_list = await add_list(list)
    const model = await get_new_app_service()
    return c.html(
        <html>
            <div id="newlist"></div>
            <div class="col p-3">
                <ListComponent model={model} list={new_list}/>
            </div>
        </html>
    )
})

app.post('/hx/compoments/addnewitem', async (c) => {
    const body = await c.req.parseBody()
    const item = new Item("", 1, body.list_id, body.message)
    const new_item = await add_item(item)
    const model = await get_new_app_service()
    return c.html(
        <html>
            <ItemComponent model={model} item={new_item}/>
            <NewItemComponent model={model} list={model.lists.find(list => list.id === new_item.list_id)} />
        </html>
    )
})

Deno.serve(app.fetch)