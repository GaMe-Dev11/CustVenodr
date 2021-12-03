import {Component, ViewChild} from '@angular/core';
import { navItems2} from '../../_innerNav';
import { Router, NavigationEnd } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { ActivatedRoute } from '@angular/router';
 

export interface Session{
  sessionId:any;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class ClientLayoutComponent { 
  @ViewChild('data') childreffer;
  sidebar:any =true;
  sidebar1:any;
  public sidebarMinimized = false;
  public navs:any = navItems2;
  constructor(private service:AuthServiceService,private router:Router,private _Activatedroute:ActivatedRoute){
    this._Activatedroute.snapshot.paramMap.get("id");
    console.log('id.....');
  }

  ngAfterViewInit(){
      }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  ngOnInit() {
  console.log('msg from client');
  }
}
