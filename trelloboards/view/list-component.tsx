/** @jsx jsx */
/** @jsxFrag Fragment */

import { jsx, Fragment } from 'https://deno.land/x/hono/middleware.ts'

import { AppModel } from '../services/app-service.ts';
import { List } from '../database/database-config.ts';
import { ItemComponent } from './item-component.tsx';

export const ListComponent = (props: { model: AppModel, list: List }) => {
    return (
        <div>
            <div>{props.list.name}</div>
            <ul>
                {props.model.items.filter(item => item.list_id === props.list.id).map(item => {
                    return <ItemComponent model={props.model} item={item} />
                })}
            </ul>
            <button>+novo item</button>
            <span>{props.model.board.created_at}</span>
        </div>
    )
}