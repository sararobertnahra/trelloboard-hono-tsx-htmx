/** @jsx jsx */
/** @jsxFrag Fragment */

import { jsx, Fragment } from 'https://deno.land/x/hono/middleware.ts'

import { AppModel } from '../services/app-service.ts';

export const NewListComponent = (props: { model: AppModel, board: Board }) => {
    return (
        <div class="card p-2 shadow rounded" style="width: 27rem;">
            <div class="card-header">
                <h2>Add a new list...</h2>
            </div>
            <form class="card-body row bg-gray" hx-post="/hx/compoments/addnewlist" hx-target="#newlist" hx-swap="outerHTML">
                <div class="">
                    <input type="hidden" name="board_id" id="board_id" value={props.board.id} />
                </div>
                <div class="col-10 p-2">
                    <input class="form-control mb-3" type="text" name="name" id="name" placeholder="Enter a title for the new list..."></input>
                </div>
                <div class="col-2 p-2">
                    <button class="btn btn-primary" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-plus"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                    </button>
                </div>
            </form>
        </div>
    )
}