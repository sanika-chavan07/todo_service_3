import { Injectable } from "@angular/core";
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';


@Injectable({
    providedIn:"root"
})


export class SnackBarServive{
    constructor(
          private snackBar: MatSnackBar

    ){

    }

     openSnackBar(msg:string){
        this.snackBar.open(msg, `Close`,{
            horizontalPosition: 'left',
            verticalPosition:'top',
            duration: 3000
        })
    }
    }
