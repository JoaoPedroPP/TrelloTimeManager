export class Card {
    id: string;
    name: string;
    listId: string;
    boardId: string;
    constructor(id: string, name: string, listId: string, boardId: string){
        this.id = id;
        this.name = name;
        this.listId = listId;
        this.boardId = boardId;
    }
}