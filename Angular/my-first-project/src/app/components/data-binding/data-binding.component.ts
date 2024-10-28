import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName: string = "Angular 18";
  inputType = "checkbox"
  amount = 99999;
  city: any;
  stateName: string = "";
  currentDate: Date = new Date();
  isIndian: boolean = false;
  col = 2;
  myClassName: string = "bg-primary"; 
  firstName = signal("AK");
  constructor() {
    this.city = "Kochi";
  }
  changeName() {
    this.firstName.set("Virat Kohli");
  }  
  changeCourseName() {  
    this.courseName = "React JS";  
  }  
  showMessage(message: string) {  
    alert(message)
  }
}