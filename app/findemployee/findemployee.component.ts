import { Component, OnInit } from '@angular/core';
import { Employee } from 'ems1/app/employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-findemployee',
  templateUrl: './findemployee.component.html',
  styleUrls: ['./findemployee.component.css']
})
export class FindemployeeComponent implements OnInit {

  empid : number ;
  employee : Employee = new Employee();
  constructor(private service : EmployeeService) { }

  ngOnInit(): void {
  }

  searchEmployee()
  {
   this.service.findEmployeeById(this.empid).subscribe(data=>this.employee=data,error => this.employee.employeeName=error.error.errorMessage);
  }
}
