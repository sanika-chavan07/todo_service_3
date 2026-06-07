

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, Subject } from "rxjs";
import { Itodo, ItodosRes } from "../models/todo";



@Injectable({
    providedIn: "root"
})
export class TodosService {
    todosArr: Array<Itodo> = [
        {
            todoItem: 'JS',
            todoId: '123'
        },
        {
            todoItem: 'Angular',
            todoId: '124'
        },
        {
            todoItem: 'TypeScript',
            todoId: '125'
        }
    ]

    editTodoSub$: Subject<Itodo> = new Subject<Itodo>()
    constructor(
        private _http: HttpClient
    ) { }

    fetchTodos(): Observable<Itodo[]> {
        return of(this.todosArr)
    }

    addTodo(todo: Itodo): Observable<ItodosRes> {
        this.todosArr.push(todo)
        let res = {
            msg: `New Todo item with id ${todo.todoId} created successfully.`,
            data: todo
        }
        return of(res);
    }

    removeTodo(id: string): Observable<ItodosRes> {
        let GET_INDEX = this.todosArr.findIndex(t => t.todoId === id)
        let REMOVED_TODO = this.todosArr.splice(GET_INDEX, 1)
        return of({
            msg: `The todo item with id ${REMOVED_TODO[0].todoId} is removed successfully !!!`,
            data: REMOVED_TODO[0]
        })

    }


    updateTodo(updatedTodo: Itodo): Observable<ItodosRes> {
        let GET_INDEX = this.todosArr.findIndex(t => t.todoId === updatedTodo.todoId)
        this.todosArr[GET_INDEX] = updatedTodo

        return of({
            msg: `The todo item with id ${updatedTodo.todoId} is updated successfully !!!`,
            data: updatedTodo
        })
    }
}