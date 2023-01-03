import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MaterialModule} from "../shared/material/material.module";
import { AdminListComponent } from './admin-list/admin-list.component';
import { DialogAdminConfirmationComponent } from './dialog-admin-confirmation/dialog-admin-confirmation.component';
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    ToolbarComponent,
    AdminListComponent,
    DialogAdminConfirmationComponent
  ],
  exports: [
    ToolbarComponent,
    AdminListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    MatDialogModule
  ]
})
export class ComponentsModule { }
