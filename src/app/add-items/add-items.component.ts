import {Component, OnInit} from '@angular/core';
import {CrudService} from "../crud.service";


@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit{

  taskObj: TaskObj
  constructor(private crudService: CrudService) {
    this.taskObj = new TaskObj();
  }

  ngOnInit(): void {
  }

  getAllTasks(){

  }
}

export class TaskObj {
  Name: string;
  Description: string;
  Status: string;
  Start_Date: string;
  End_Date: string;
  constructor() {
    this.Name = "";
    this.Description="";
    this.Status="";
    this.Start_Date="";
    this.End_Date='';
  }

}
