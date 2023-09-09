import { getFacade } from "../database/dao-facade-impl.ts";
import { Board, Item, List } from "../database/database-config.ts";

export class AppModel {
    constructor(board: Board, lists: List[], items: Item[] ) {
        this.board = board;
        this.lists = lists;
        this.items = items;
    }
    board : Board;
    lists: List[];
    items: Item[];
}

let app_service : AppModel;

export async function get_new_app_service() {
    const boards = await getFacade().find_all_boards();
    let board = await boards.sort((a, b) => a.id - b.id).pop()!;
    if(!board){
        board = new Board("", 1, "Hello, Board!");
        getFacade().insert_board(board);
    }
    const lists = await getFacade().find_lists_by_board(board);
    const items = (await Promise.all( lists.map(async (list) => await getFacade().find_items_by_list(list)))).flatMap((item) => item);    
    app_service = new AppModel(board, lists, items);
    return app_service;
}

export const get_app_service = () => {
    return app_service;
}

export const remove_list = (list: List) => getFacade().delete_list(list);

export const remove_item = (item: Item) => getFacade().delete_item(item);

export const add_list = (list: List) => getFacade().insert_list(list);

export const add_item = (item: Item) => getFacade().insert_item(item);