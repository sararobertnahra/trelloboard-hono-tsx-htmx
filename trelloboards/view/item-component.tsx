/** @jsx jsx */
/** @jsxFrag Fragment */

import { jsx, Fragment } from 'https://deno.land/x/hono/middleware.ts'

import { AppModel } from '../services/app-service.ts';
import { Item } from '../database/database-config.ts';

export const ItemComponent = (props: { model: AppModel, item: Item }) => {
    const target_component_id = `#item${props.item.id}`
    const item_id = `item${props.item.id}`
    return (
        <li class="list-group-item shadow" id={item_id}>
            <div class="row">
                <div class="col-10 p-2">
                    <span>{props.item.message}</span>
                </div>
                <div class="col-2 p-1">
                    <form hx-delete="/hx/components/removeitem" hx-target={target_component_id} hx-swap="outerHTML">
                        <input type="hidden" name="id" value={props.item.id} />
                        <button class="btn btn-light">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                        </button>
                    </form>
                </div>
            </div>
        </li >
    )
}