import {Component, OnInit} from '@angular/core';
import {CrudService} from "../services/crud.service";


@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit{

  taskObj: TaskObj;
  constructor(private crudService: CrudService) {
    this.taskObj = new TaskObj();
  }

  ngOnInit(): void {
  }

  onAdd(){
    const isData = localStorage.getItem("taskData");
    if(isData == null){
      const newArr = [];
      this.taskObj.id=1;
      newArr.push(this.taskObj);
      localStorage.setItem("taskData", JSON.stringify(newArr));
    } else {
      const oldData = JSON.parse(isData);
      this.taskObj.id = oldData.length+1;
      oldData.push(this.taskObj);
      localStorage.setItem("taskData", JSON.stringify(oldData));
    }
  }

}

export class TaskObj {
  id: number;
  Name: string;
  Description: string;
  Status: string;
  Start_Date: string;
  End_Date: string;
  constructor() {
    this.id = 0;
    this.Name = "";
    this.Description="";
    this.Status="";
    this.Start_Date="";
    this.End_Date='';
  }

}
