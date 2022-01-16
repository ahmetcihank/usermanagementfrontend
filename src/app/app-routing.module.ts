import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UserlistComponent } from './userlist/userlist.component';


const routes: Routes = [
  {path:'userdetails', component:UserdetailComponent},
  {path:'', component:UserlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [UserdetailComponent, UserlistComponent];
