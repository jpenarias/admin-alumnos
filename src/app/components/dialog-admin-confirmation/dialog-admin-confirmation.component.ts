import {Component, Inject, OnInit} from '@angular/core';
import {ToolbarComponent} from "../toolbar/toolbar.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialog-admin-confirmation',
  templateUrl: './dialog-admin-confirmation.component.html',
  styleUrls: ['./dialog-admin-confirmation.component.css']
})
export class DialogAdminConfirmationComponent implements OnInit {



  constructor(public dialogRef: MatDialogRef<ToolbarComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { code: string },
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  onContinue() {
    console.log(this.data.code);
    if (this.data.code !== 'code123'){
      this._snackBar.open( 'El codigo no es correcto para ingresar al rol de Admin', 'Cerrar' );
    }
  }

}
