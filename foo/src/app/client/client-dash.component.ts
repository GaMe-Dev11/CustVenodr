import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import {ModalDirective} from 'ngx-bootstrap/modal';
// import { InfiniteScroll } from 'ngx-infinite-scroll';

export interface session{
  "sessionId":any;
}
@Component({
  selector: 'app-client-dash',
  templateUrl: './client-dash.component.html',
  styleUrls: ['./client-dash.component.css'],

})
export class ClientDashComponent implements OnInit {
  myInterval = 1500;
  infinateScrol= 22;
  throttle = 300;
  tot_id = 1;
  scrollDistance = 1;
  scrollUpDistance = 2;
  dashboard_data = [];
  modelData ={};
  parmas = <session>{sessionId:localStorage.getItem('session')};
  @ViewChild('myModal') public myModal: ModalDirective;
  
  constructor(public authServic:AuthServiceService) { }

  ngOnInit(): void {
   this.getJson();
  }

  onScroll(ev) {
    console.log('scrolled!!',ev);
  }
  onScrollDown(ev) {
    console.log('scrolled down!!',ev);
    this.tot_id+=10;
    this.getJson(this.tot_id);
  }

  onScrollUp(ev) {
    console.log('scrolled up!!',ev);
  }

  getJson(id?:any){
    this.authServic.getJSON().subscribe(data=>{
      console.log(data);
      for(let i=0;i<data.length;i++){
        if(id){
          this.dashboard_data.push({
            cust_Id:i+id,
            name:data[i].name,
            email:data[i].email,
            addres:data[i].addres,
            mbl:data[i].phoneno
            })
        }else{
          this.dashboard_data.push({
            cust_Id:data[i].cust_Id,
            name:data[i].name,
            email:data[i].email,
            addres:data[i].addres,
            mbl:data[i].phoneno
        })
        
      } 
    }
    },(err)=>{
      console.log(err);
    })
  }

  getModl(data){
   this.modelData= Object.assign(data)
    
    console.log(this.modelData);
   this.myModal.show()
  }
}
