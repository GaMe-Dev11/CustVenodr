import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Container
import { ClientLayoutComponent } from './clientDashBoard';

// import { P404Component } from './views/error/404.component';
// import { P500Component } from './views/error/500.component';
// import { LoginComponent } from './views/login/login.component';
// import { RegisterComponent } from './views/register/register.component';
 

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'client',
    pathMatch: 'full',
  },
  // {
  //   path: '404',
  //   component: P404Component,
  //   data: {
  //     title: 'Page 404'
  //   }
  // },
  
  {
    path: '',
    component: ClientLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'client',
        loadChildren: () => import('./client/client.module').then(m => m.ClientModule)
      },
    ]
  },
  
  // { path: '**', component: P404Component }
]; 

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
