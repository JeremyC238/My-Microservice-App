import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
// import {DialogData} from '../user/user.component';
import {Component, Inject} from '@angular/core';

@Component({
  selector: 'app-dialog-verification',
  templateUrl: './dialog-verification.component.html',
  styleUrls: ['./dialog-verification.component.scss']
})
export class DialogVerificationComponent{

  /*
  constructor(public dialogRef: MatDialogRef<DialogVerificationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
   */
}
