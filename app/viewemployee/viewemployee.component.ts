import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from 'ems1/app/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  arr : Observable<Employee[]>;

  constructor(private service : EmployeeService) {


  }

  ngOnInit(): void {
    this.getAllemployees();
  }

  getAllemployees()
  {
    this.arr = this.service.getAllEmployees();
  }

  delete(id : number)
  {
    this.service.deleteEmployeeById(id).subscribe(data=>{console.log(data); this.getAllemployees()});
  }


}
