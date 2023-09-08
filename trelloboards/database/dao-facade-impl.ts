import { DAOFacade } from "./dao-facade.ts";
import { dbconnection, Board, Item, List } from "./database-config.ts";

class DAOFacadeImpl implements DAOFacade {

    async insert_board(board: Board) {
        const res = await dbconnection
            .from('boards')
            .insert([{ name: board.name }])
            .select()
        return res;
    }

    async find_all_boards() {
        const { data: boards }: { data: Board[] } = await dbconnection
            .from('boards')
            .select('*');
        return boards;
    }

    async find_board_by_id(id: number) {
        const { data: boards }: { data: Board[] } = await dbconnection
            .from('boards')
            .select('*')
            .where('id', id);
        return boards.find(board => board.id === id);
    }

    async delete_board(board: Board) {
        const res = await dbconnection
            .from('boards')
            .delete()
            .where('id', board.id);
        return res;
    }

    async find_lists_by_board(board: Board) {
        const { data: lists }: { data: List[] } = await dbconnection
            .from('lists')
            .select('*')
            .where('board_id', board.id);
        return lists;
    }

    async insert_list(list: List) {
        const res = await dbconnection
            .from('lists')
            .insert([{ name: list.name, board_id: list.board_id }])
            .select()
        return res;
    }

    async delete_list(list: List) {
        const res = await dbconnection
            .from('lists')
            .where('id', list.id)
            .delete()
        return res;
    }

    async find_items_by_list(list: List) {
        const { data: items }: { data: Item[] } = await dbconnection
            .from('items')
            .select('*')
            .where('list_id', list.id);
        return items;
    }

    async insert_item(item: Item) {
        const res = await dbconnection
            .from('items')
            .insert([{ message: item.message, list_id: item.list_id }])
            .select()
        return res;
    }

    async delete_item(item: Item) {
        const res = await dbconnection
            .from('items')
            .where('id', item.id)
            .delete()
        return res;
    }

}

export const daoFacadeImpl = new DAOFacadeImpl();
