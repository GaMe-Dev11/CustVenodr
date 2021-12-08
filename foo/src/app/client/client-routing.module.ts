import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { ClientDashComponent} from './client-dash.component';
import { AccoutComponent} from './accout/accout.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch:'full'
      },
      {
        path: 'home',
        component: ClientDashComponent,
        data: {
          title: ''
        },
        children:[
          
        ]
      },
      {
        path: 'vendor',
        component: AccoutComponent,
        data: {
          title: 'Vendor'
        },
      },
    
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
