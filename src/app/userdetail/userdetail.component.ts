import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  public user : any;
 

  constructor(private _router: Router , private _ar:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("denemememe")
    this.user =window.history.state;
  
    console.log(this.user.element)
  }

}
