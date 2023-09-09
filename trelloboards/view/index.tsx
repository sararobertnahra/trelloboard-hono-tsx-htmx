/** @jsx jsx */
/** @jsxFrag Fragment */

import { jsx, Fragment } from 'https://deno.land/x/hono/middleware.ts'
import { BoardComponent } from './board-component.tsx';
import { AppModel } from '../services/app-service.ts';

export const IndexPage = (props: {model : AppModel}) => {
    return (
      <html>
        <head>
        </head>
        <body>
        <header>
          aqui terá uma navbar
        </header>
            <BoardComponent model={props.model}/>
        </body>
        <footer>
          &copy; 2023 Caio Augusto Palma e Sara Robert Nahra.  
        </footer>
      </html>
    )
  }