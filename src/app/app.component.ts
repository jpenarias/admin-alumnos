import {Component, Input, OnInit} from '@angular/core';
import {User} from "./core/models/user";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {
  DialogAdminConfirmationComponent
} from "./components/dialog-admin-confirmation/dialog-admin-confirmation.component";
import {NgForm} from "@angular/forms";
import usersData from "./components/data/users.json";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'admin-alumnos';


  @Input() admin: boolean;
  code: string;

  user: User = {name: "", password: "", type: ""};
  logged: boolean = false;

  constructor(public dialog: MatDialog,
              private _snackBar: MatSnackBar,
              public router: Router
  ) { }

  ngOnInit( ): void {
    let userLogged = localStorage.getItem("user");
    if (userLogged) {
      this.logged = true;
      this.user.name = userLogged;
      this.user.type = localStorage.getItem("type") === "ADMIN" ? "ADMIN" : "USER";
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

  redirect(route: string) {
    this.router.navigate([route])
  }
}
