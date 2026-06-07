export interface Itodo {
    todoItem: string,
    todoId: string
}


export interface ItodosRes {
    msg: string;
    data: Itodo;
}