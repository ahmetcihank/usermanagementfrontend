import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../userservice.service'
import {PeriodicElement} from '../PeriodicElement'
import { from, Observable } from 'rxjs'
import { Router } from '@angular/router';



var mdata:  Observable<PeriodicElement[]>;
var loadCompleted:boolean = false;

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private userService: UserserviceService, private router: Router) { }
  displayedColumns: string[] = ['id','username', 'name', 'lastname', 'actions'];
  dataSource = mdata;

  ngOnInit(): void {
    mdata = this.userService.getData();
  
    this.dataSource =mdata;
  }

  onSelect(element:PeriodicElement):void {
    console.log(element);
    this.router.navigate(['userdetails'], { 
      state: { element: element },
      replaceUrl: true 
    });


  }

}
