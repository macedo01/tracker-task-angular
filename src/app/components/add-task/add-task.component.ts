import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: String = "";
  day: String = "";
  reminder: Boolean = false;
  showAddTask: Boolean = false;
  subscription: Subscription = new Subscription;

  constructor(private uiService: UiService){
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
  }

  onSubmit(){
    if(!this.text || !this.day){
      alert("Please add all the inputs!");
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);
    
    this.text = "";
    this.day = "";
    this.reminder = false;

  }
}
