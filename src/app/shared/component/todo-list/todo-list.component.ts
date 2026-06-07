
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { Itodo } from '../../models/todo';


import { SnackBarServive } from '../../service/SnackBar.service';
import { TodosService } from '../../service/todo.service';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todosArr: Array<Itodo> = []

  constructor(
    private _todosService: TodosService,
    private _snackBar: SnackBarServive,
    private _matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.fetchTodos()
  }

  fetchTodos() {
    this._todosService.fetchTodos()
      .subscribe({
        next: (data) => {
          this.todosArr = data;
        },
        error: (err) => console.log(err)
      })
  }

 onRemove(id: string) {
  let matConfig = new MatDialogConfig();
  matConfig.width = '350px';
  matConfig.disableClose = true;
  matConfig.data = `Are you sure, you want to remove todo with ID ${id}`;

  let matRef = this._matDialog.open(GetConfirmComponent, matConfig);

  matRef.afterClosed()
    .subscribe(res => {
      if (res) {
        this._todosService.removeTodo(id)
          .subscribe({
            next: res => {

              this.todosArr = this.todosArr.filter(todo => todo.todoId !== id);

              this._snackBar.openSnackBar(res.msg);
            },
            error: err => {
              this._snackBar.openSnackBar(err.msg);
            }
          });
      }
    });
}


  onTodoEdit(todo: Itodo) {
    console.log(todo)
    this._todosService.editTodoSub$.next(todo)
  }


  trackByFunc(index: number, todo: Itodo) {
    return todo.todoId;
  }
}