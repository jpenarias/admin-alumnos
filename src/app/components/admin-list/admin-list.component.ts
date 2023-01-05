import {Component, Input, OnInit, Output} from '@angular/core';


const ELEMENT_DATA = [
  { id: '1151', name: 'Jiseth Peña Arias', lessons: 'Matematicas', action: '' }
];

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})

export class AdminListComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'name', 'lessons', 'action'];
  dataSource = ELEMENT_DATA;
  @Input() admin: boolean;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.dataSource;
  }


}
