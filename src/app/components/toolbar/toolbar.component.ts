import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import {DialogAdminConfirmationComponent} from "../dialog-admin-confirmation/dialog-admin-confirmation.component";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() admin: boolean;
  code: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit( ): void {
  }

  isAdmin() {
    const dialogRef = this.dialog.open(DialogAdminConfirmationComponent, {
      data: {code: this.code},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.code = result;
      console.log('The dialog was closed', result);
      if (this.code === 'code123'){
        this.admin = true;
      }
    });
  }

  isUser () {
    this.admin = false;
  }

}
