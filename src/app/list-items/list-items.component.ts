import {Component, OnInit} from '@angular/core';
import {TaskObj} from "../add-items/add-items.component";
import {CrudService} from "../services/crud.service";

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit{
  listArr: TaskObj[] = [];

  constructor(private crudService: CrudService) {

  }
  ngOnInit(): void {
    this.getAllTasks()
  }
  getAllTasks(){
    const isData = localStorage.getItem("taskData");
    if(isData != null){
      const localData = JSON.parse(isData);
      this.listArr = localData;
    }
  }
  onDelete(item: TaskObj){
    console.log(item.id);
    const isData = localStorage.getItem("taskData");
    if(isData != null){
      const localData = JSON.parse(isData);
      for (let index=0; index<localData.length;index++){
        if(localData[index].id == item.id){
          localData.splice(index,1);
        }
      }
      localStorage.setItem('taskData',JSON.stringify(localData));
      this.getAllTasks();
    }
  }
}
