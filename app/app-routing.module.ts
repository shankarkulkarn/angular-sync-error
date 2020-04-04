import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { FindemployeeComponent } from './findemployee/findemployee.component';


const routes: Routes = [

  {path : 'view',
   component : ViewemployeeComponent
   },
  {path : 'search',
   component : FindemployeeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
