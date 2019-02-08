import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfigsService } from 'src/app/services/configs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  trelloForm: FormGroup;

  constructor(private fb: FormBuilder, private configService: ConfigsService, private router: Router) {
    this.trelloForm = this.fb.group({
      key: ['']
    });
  }

  ngOnInit() {
    this.configService.auth.subscribe(data => this.router.navigate(['logged', 'home']));
  }

  submitCredentials(){
    this.configService.setTrelloKey(this.trelloForm.get('key').value);
  }

}
