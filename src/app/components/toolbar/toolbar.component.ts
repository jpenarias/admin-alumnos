import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import usersData from "../data/users.json";
import {DialogAdminConfirmationComponent} from "../dialog-admin-confirmation/dialog-admin-confirmation.component";
import {User} from "../../core/models/user";
import {NgForm} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() admin: boolean;
  code: string;

  user: User = {name: "", password: "", type: ""};
  logged: boolean = false;

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit( ): void {
    let userLogged = localStorage.getItem("user");
    if (userLogged) {
      this.logged = true;
    }
  }

  isAdmin() {
    const dialogRef = this.dialog.open(DialogAdminConfirmationComponent, {
      data: {code: this.code},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.code = result;
      console.log('The dialog was closed', result);
    });
  }

  isUser () {
    this.admin = false;
  }

  login(f: NgForm) {
    // ...
    let filterData = usersData.filter(userdb => userdb.name === f.value.user && userdb.password === f.value.password)

    if (filterData.length > 0) {
      this.logged = true;
      this.user = filterData[0];
      localStorage.setItem("user", this.user.name);
      localStorage.setItem("type", this.user.type);
    } else {
      this.logged = false;
      this._snackBar.open( 'El usuario no existe', 'Cerrar' );
    }
    // ...
  }

}
