import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GetConfirmComponent } from './shared/component/get-confirm/get-confirm.component';
import { TodoFormComponent } from './shared/component/todo-form/todo-form.component';
import { TodoListComponent } from './shared/component/todo-list/todo-list.component';
import { TodoDashboardComponent } from './shared/component/todo-dashboard/todo-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroup, FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    GetConfirmComponent,
    TodoFormComponent,
  
    TodoDashboardComponent,
    TodoListComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatSnackBarModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule
  
    
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
