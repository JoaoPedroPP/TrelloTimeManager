export class List {
    id: string;
    name: string;
    boardId: string;
    constructor(id: string, name: string, boardId:string){
        this.id = id;
        this.name = name;
        this.boardId = boardId;
    }
}