import { Board, Item, List } from "./database-config.ts";

export interface DAOFacade {
    insert_board(board: Board):  Promise<any>;
    find_board_by_id(id: number):  Promise<Board | undefined>;
    find_all_boards():  Promise<Board[]>;
    delete_board(board: Board):  Promise<any>;
    find_lists_by_board(board: Board):  Promise<List[]>;
    insert_list(list: List):  Promise<any>;
    delete_list(list: List):  Promise<any>;
    find_items_by_list(list: List):  Promise<Item[]>;
    insert_item(item: Item):  Promise<Item>;
    delete_item(item: Item):  Promise<any>;
  }
