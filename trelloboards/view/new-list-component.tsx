/** @jsx jsx */
/** @jsxFrag Fragment */

import { jsx, Fragment } from 'https://deno.land/x/hono/middleware.ts'

import { AppModel } from '../services/app-service.ts';

export const NewListComponent = (props: { model: AppModel, board: Board }) => {
    return (
        <div class="card mb-5 p-3 shadow-sm rounded" style="width: 24rem;">
            <form class="card-body bg-gray shadow" hx-post="/hx/compoments/addnewlist" hx-target="#newlist" hx-swap="outerHTML">
                <div class="mb-3">
                    <input type="hidden" name="board_id" id="board_id" value={props.board.id} />
                </div>
                <div class="mb-3">
                    <input class="form-control mb-3" type="text" name="name" id="name" placeholder="Enter a title for the new list..."></input>
                </div>
                <div class="">
                    <input class="btn btn-primary mb-3" type="submit" value="New List"/>
                </div>
            </form>
        </div>
    )
}