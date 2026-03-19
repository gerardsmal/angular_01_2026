import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-persone',
  standalone: false,
  templateUrl: './delete-persone.html',
  styleUrl: './delete-persone.css',
})
export class DeletePersone {
  persona:any;

  constructor(@Inject(MAT_DIALOG_DATA) private data:any,
              private dialogRef:MatDialogRef<DeletePersone>){
      if (data){
        this.persona = data.persona
      }          

  }
  optionSelected(opt:string){
    this.dialogRef.close(opt);
  }
}
