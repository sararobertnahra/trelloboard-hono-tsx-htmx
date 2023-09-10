/** @jsx jsx */
/** @jsxFrag Fragment */

import { jsx, Fragment } from 'https://deno.land/x/hono/middleware.ts'

import { AppModel } from '../services/app-service.ts';
import { List } from '../database/database-config.ts';

export const NewItemComponent = (props: { model: AppModel, list: List}) => {
    return (
        <form class="card-body row shadow" hx-post="/hx/compoments/addnewitem" hx-swap="outerHTML">
            <input type="hidden" name="list_id" id="list_id" value={props.list.id} />
            <div class="col-10 p-2">
                <input class="form-control mb-2" type="text" name="message" id="message" placeholder="Enter a title for this post..."></input>
            </div>
            <div class="col-2 p-1">
                <button class="btn btn-primary" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
            </div>
        </form>
    )
}