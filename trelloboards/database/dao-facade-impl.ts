import { DAOFacade } from "./dao-facade.ts";
import { dbconnection, Board, Item, List } from "./database-config.ts";

class DAOFacadeImpl implements DAOFacade {

    async insert_board(board: Board): Promise<any> {
        const res = await dbconnection
            .from('boards')
            .insert([{ name: board.name }])
            .select()
        return res;
    }

    async find_all_boards(): Promise<Board[]> {
        const { data: boards }: { data: Board[] } = await dbconnection
            .from('boards')
            .select('*');
        return boards;
    }

    async find_board_by_id(id: number): Promise<Board | undefined> {
        const { data: boards }: { data: Board[] } = await dbconnection
            .from('boards')
            .select('*')
            .eq('id', id);
        return boards.find(board => board.id === id);
    }

    async delete_board(board: Board): Promise<any> {
        const res = await dbconnection
            .from('boards')
            .delete()
            .eq('id', board.id);
        return res;
    }

    async find_lists_by_board(board: Board): Promise<List[]> {
        const { data: lists }: { data: List[] } = await dbconnection
            .from('lists')
            .select('*')
            .eq('board_id', board.id);
        return lists;
    }

    async insert_list(list: List): Promise<any> {
        const res = await dbconnection
            .from('lists')
            .insert([{ name: list.name, board_id: list.board_id }])
            .select()
        const { data: lists }: { data: List[] } = await dbconnection
            .from('lists')
            .select('*')
        return lists.sort((a, b) => a.id - b.id).pop()!;
    }

    async delete_list(list: List): Promise<any> {
        const res = await dbconnection
            .from('lists')
            .delete()
            .eq('id', list.id)
        return res;
    }

    async find_items_by_list(list: List): Promise<Item[]> {
        const { data: items }: { data: Item[] } = await dbconnection
            .from('items')
            .select('*')
            .eq('list_id', list.id);
        return items;
    }

    async insert_item(item: Item): Promise<Item> {
        const res = await dbconnection
            .from('items')
            .insert([{ message: item.message, list_id: item.list_id }])
            .select()
        const { data: items }: { data: Item[] } = await dbconnection
            .from('items')
            .select('*')
        return items.sort((a, b) => a.id - b.id).pop()!;
    }

    async delete_item(item: Item): Promise<any> {
        const res = await dbconnection
            .from('items')
            .delete()
            .eq('id', item.id)
        return res;
    }

}

const daoFacadeImpl = new DAOFacadeImpl();

export function getFacade(): DAOFacade {
    return daoFacadeImpl;
}