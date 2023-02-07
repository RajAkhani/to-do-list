import { Component } from '@angular/core';
import {CrudService} from "../crud.service";
import {Task} from "../model/task";

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent {
  taskObj : Task = new Task();
  taskArr : Task[] = [];

  addTaskVal : object = {name:'', description:'',status:'',start_date:'',end_date:'' };
  constructor(private crudService : CrudService) {}
  ngOnInit(): void {
    this.addTaskVal = {name: '', description: '', status: '', start_date: '', end_date: ''};
    this.taskObj = new Task();
    this.taskArr = [];
    // this.getAllTask();
  }
}
//   getAllTask(){
//     this.crudService.getAllTask().subscribe(res => {
//       this.taskArr = res;
//     }, err => {
//       alert("Unable to get list of tasks");
//     });
//   }
//   addTask() {
//     this.taskObj.task_name = this.addTaskVal;
//     this.crudService.addTask(this.taskObj).subscribe(res => {
//       this.ngOnInit();
//       this.addTaskVal = {name:'', description:'',status:'',start_date:'',end_date:''};
//     }, err => {
//       alert(err);
//     })
//   }
// }
