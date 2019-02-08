import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss']
})
export class LoggedComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goRoute(event){
    this.router.navigate(event)
  }

}
