import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ToastType } from './ToastType.enum';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private _snackbar:MatSnackBar) { }


  showToast(type,message:string){
    this._snackbar.open(message,type,{
      duration:1000,
      panelClass:String(type)
    })
  }

  successHandler(message:string){
    this.showToast(ToastType.SUCCESS,message)
    
  }
  errorHandler(message:string){
    this.showToast(ToastType.ERROR,message)

  }
}
