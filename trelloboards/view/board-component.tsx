/** @jsx jsx */
/** @jsxFrag Fragment */

import { jsx, Fragment } from 'https://deno.land/x/hono/middleware.ts'

import { AppModel } from '../services/app-service.ts';
import { ListComponent } from './list-component.tsx';

export const BoardComponent = (props: { model: AppModel }) => {
  return (
    <div>
      <h1>{props.model.board.name}</h1>
      <h3>{props.model.board.created_at}</h3>
      <div>
        {props.model.lists.map(list => {
          return <ListComponent model={props.model} list={list} />
        })}
      </div>
    </div>
  )
}