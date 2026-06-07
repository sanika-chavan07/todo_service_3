import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../models/todo';
import { TodosService } from '../../service/todo.service';
import { SnackBarServive } from '../../service/SnackBar.service';




@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  isInEditMode: boolean = false
  editTodo !: Itodo
  @ViewChild('todoForm') todoForm !: NgForm
  constructor(
    private _todosService: TodosService,
    private _snackBar: SnackBarServive
  ) { }

  ngOnInit(): void {
    this.onTodoPatch()
  }

  onTodoSubmit() {
    if (this.todoForm.valid) {
      let NEW_TODO: Itodo = {
        ...this.todoForm.value,
        todoId: Date.now().toString()
      }
      this.todoForm.reset()
      this._todosService.addTodo(NEW_TODO)
        .subscribe({
          next: data => {
            console.log(data);
            this._snackBar.openSnackBar(data.msg)
          },
          error: err => {
            console.log(err);
          }
        })
    }
  }



  onTodoPatch() {
    this._todosService.editTodoSub$.subscribe({
      next: data => {
        this.editTodo = data
        this.isInEditMode = true
        this.todoForm.form.patchValue(data)
      }
    })
  }


  onUpdate() {
    if (this.todoForm.valid) {

      let UPDATED_OBJ: Itodo = {
        ...this.todoForm.value,
        todoId: this.editTodo.todoId


      }
      console.log(UPDATED_OBJ);
      this._todosService.updateTodo(UPDATED_OBJ)
        .subscribe({
          next: res => {
            this._snackBar.openSnackBar(res.msg)
            this.todoForm.reset()
            this.isInEditMode = false;
          },
          error: err => {
            this._snackBar.openSnackBar(err)
          }
        })
    }
  }
}