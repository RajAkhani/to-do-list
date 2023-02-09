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

  chk: boolean = this.check();
  check(){
    const isData = localStorage.getItem("taskData");
    if(isData != null){
      const isEdit = JSON.parse(isData);
      for (let index = 0; index<isEdit.length; index++){
        if(isEdit[index].edit == 1) {
          console.log(isEdit[index].edit);
          this.editData();
          return true;
        }
      }
    }
    else {
      return false;
    }
    return false;
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
    // this.taskObj = new TaskObj();
    location.reload();
    alert("Added")

  }

  editData(){
    const isData = localStorage.getItem("taskData");
    if(isData != null){
      const isEdit = JSON.parse(isData);
      for (let index = 0; index<isEdit.length; index++){
        if(isEdit[index].edit == 1) {
          console.log(isEdit[index]);
          this.taskObj = isEdit[index];
          console.log(this.taskObj);
          break;
        }
      }
    }
  }
  onEdit(){
    const isData = localStorage.getItem("taskData");
    if(isData != null){
      const isEdit = JSON.parse(isData);
      for (let index = 0; index<isEdit.length; index++){
        if(isEdit[index].edit == 1) {
          this.taskObj.id=isEdit[index].id;
          this.taskObj.edit=0;
          isEdit[index] = this.taskObj;
          break;
        }
      }
      localStorage.setItem("taskData", JSON.stringify(isEdit));
      location.reload();
      alert("Updated");
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
  edit: number;
  constructor() {
    this.id = 0;
    this.Name = "";
    this.Description="";
    this.Status="";
    this.Start_Date="";
    this.End_Date='';
    this.edit=0;
  }

}
