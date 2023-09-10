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
        <div class="card mb-5 p-3 shadow-sm rounded" style="width: 24rem;">
            <div class="card-body">
                <h2 class="card-header shadow-sm card-title">{props.list.name}</h2>
                <form  hx-delete="/hx/components/removelist" hx-target={list_id} hx-swap="outerHTML">
                    <input type="hidden" name="id" value={props.list.id} />
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                    </button>
                </form>
                <ul class="list-group list-group-flush">
                    {props.model.items.filter(item => item.list_id === props.list.id).map(item => {
                        return <ItemComponent model={props.model} item={item} />
                    })}
                    <NewItemComponent model={props.model} list={props.list} />
                </ul>
            </div>
        </div>
    )
}