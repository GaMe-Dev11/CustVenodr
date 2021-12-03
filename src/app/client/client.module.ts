import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import  { ClientDashComponent} from './client-dash.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AccoutComponent} from './accout/accout.component';


@NgModule({
  declarations: [
    ClientDashComponent,
    AccoutComponent,
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    ClientRoutingModule
  ]
})
export class ClientModule { }
