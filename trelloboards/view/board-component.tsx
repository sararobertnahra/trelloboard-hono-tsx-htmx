/** @jsx jsx */
/** @jsxFrag Fragment */

import { jsx, Fragment } from 'https://deno.land/x/hono/middleware.ts'

import { AppModel } from '../services/app-service.ts';
import { ListComponent } from './list-component.tsx';
import { NewListComponent } from './new-list-component.tsx';
import { Board } from '../database/database-config.ts';

export const BoardComponent = (props: { model: AppModel, board: Board }) => {
  return (
    <div class="container-fluid horizontal-scrollable">
      <div class="d-flex flex-row flex-nowrap">
        <div class="col p-3">
          <NewListComponent model={props.model} board={props.board} />
        </div>
        <div id="newlist"></div>
        {props.model.lists.map(list => {
          return (
            <div class="col p-3" id={`list${list.id}`}>
              <ListComponent model={props.model} list={list} />
            </div>
          )
        })}
      </div>
    </div>
  )
}