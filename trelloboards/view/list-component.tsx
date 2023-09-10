/** @jsx jsx */
/** @jsxFrag Fragment */

import { jsx, Fragment } from 'https://deno.land/x/hono/middleware.ts'

import { AppModel } from '../services/app-service.ts';
import { List } from '../database/database-config.ts';
import { ItemComponent } from './item-component.tsx';
import { NewItemComponent } from './new-item-component.tsx';

export const ListComponent = (props: { model: AppModel, list: List }) => {
    const list_id = `#list${props.list.id}`
    return (
        <div class="card mb-3 p-3 shadow rounded" style="width: 24rem;">
            <div class="card-body">
                <div class="row card-header shadow-sm card-title">
                    <div class="col-10 p-2">
                        <h2 class="">{props.list.name}</h2>
                    </div>
                    <div class="col-2 p-1">
                        <form hx-delete="/hx/components/removelist" hx-target={list_id} hx-swap="outerHTML">
                            <input type="hidden" name="id" value={props.list.id} />
                            <button class="btn btn-light">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </form>
                    </div>
                </div>
                <ul class="list-group list-group-flush">
                    <NewItemComponent model={props.model} list={props.list} />
                    {props.model.items.filter(item => item.list_id === props.list.id).map(item => {
                        return <ItemComponent model={props.model} item={item} />
                    })}
                </ul>
            </div>
        </div>
    )
}