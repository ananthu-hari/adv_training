import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-list-employee',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent {
  employees: Employee[] = [
    {
      id: 1,
      name: 'John',
      gender: 'Male',
      email: 'john@gmail.com',
      phoneNumber: 9876543210,
      contactPreference: '-',
      dateOfBirth: new Date('01-01-2000'),
      department: 'IT',
      isActive: true,
      photoPath: './John.png',
    },
    {
      id: 2,
      name: 'Jacob',
      gender: 'Male',
      email: 'jacob@gmail.com',
      phoneNumber: 9098765432,
      contactPreference: '-',
      dateOfBirth: new Date('12-31-1990'),
      department: 'IT',
      isActive: true,
      photoPath: './Jacob.jpg',
    },
    {
      id: 3,
      name: 'Mary',
      gender: 'Female',
      email: 'mary@gmail.com',
      phoneNumber: 1234567890,
      contactPreference: '-',
      dateOfBirth: new Date('11-24-1995'),
      department: 'IT',
      isActive: true,
      photoPath: './Mary.jpg',
    }
]
}
