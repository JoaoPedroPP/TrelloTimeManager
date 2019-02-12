export class Card {
    id: string;
    name: string;
    listId: string;
    boardId: string;
    doingList: string
    constructor(id: string, name: string, listId: string, boardId: string, doingList: string){
        this.id = id;
        this.name = name;
        this.listId = listId;
        this.boardId = boardId;
        this.doingList = doingList;
    }
}