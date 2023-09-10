/** @jsx jsx */
/** @jsxFrag Fragment */

import { jsx, Fragment } from 'https://deno.land/x/hono/middleware.ts'

import { AppModel } from '../services/app-service.ts';
import { List } from '../database/database-config.ts';

export const NewItemComponent = (props: { model: AppModel, list: List}) => {
    return (
        <form class="card-footer shadow" hx-post="/hx/compoments/addnewitem" hx-swap="outerHTML">
            <div class="mb-3">
                <input type="hidden" name="list_id" id="list_id" value={props.list.id} />
            </div>
            <div class="mb-3">
                <input class="form-control mb-3" type="text" name="message" id="message" placeholder="Enter a title for this post..."></input>
            </div>
            <div class="">
                <input class="btn btn-primary mb-3" type="submit" value="New Item"/>
            </div>
        </form>
    )
}