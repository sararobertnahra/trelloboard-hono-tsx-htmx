/** @jsx jsx */
/** @jsxFrag Fragment */

import { jsx, Fragment } from 'https://deno.land/x/hono/middleware.ts'
import { BoardComponent } from './board-component.tsx';
import { AppModel } from '../services/app-service.ts';

export const IndexPage = (props: { model: AppModel }) => {
  return (
    <html>
      <head>
        <script src="https://unpkg.com/htmx.org@1.9.5"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous" />
      </head>
      <body class="bg-body-tertiary">
        <header class="navbar py-md-3 bg-dark fixed-top" style="color:whitesmoke">
          <div class="container-fluid d-line">
            <div class="row">
              <div class="col">
                <a class="navbar-brand" href="https://github.com/caiopalma/cloudflare-trelloboard-hono-tsx-htmx">
                  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" class="navbar-nav-svg" viewBox="0 0 512 499.36" role="img"><title>GitHub</title><path fill="#FFFFFF" fill-rule="evenodd" d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"></path></svg>
                  <strong class="p-3" style="color:whitesmoke">cloudflare-trelloboard-hono-tsx-htmx</strong>
                </a>
              </div>
            </div>
          </div>
        </header>
        <div class="container-fluid" style="padding-top:89px">
          <BoardComponent model={props.model} board={props.model.board}/>
        </div>
        <footer class="bd-footer py-md-3 bg-dark text-center fixed-bottom" style="color:whitesmoke">
          &copy; 2023 Caio Augusto Palma & Sara Robert Nahra. All rights reserved.
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
      </body>
    </html>
  )
}