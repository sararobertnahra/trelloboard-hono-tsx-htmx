/** @jsx jsx */
/** @jsxFrag Fragment */

import { jsx, Fragment } from 'https://deno.land/x/hono/middleware.ts'

import { AppModel } from '../services/app-service.ts';
import { Item } from '../database/database-config.ts';

export const ItemComponent = (props: { model: AppModel, item: Item }) => {
    return (
        <li>
            <div>
                <h2>{props.item.message}</h2>
                <button>-remover</button>
            </div>
        </li>
    )
}