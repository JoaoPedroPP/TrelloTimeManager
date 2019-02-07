import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfigsService } from 'src/app/services/configs.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  trelloForm: FormGroup;

  constructor(private fb: FormBuilder, private configService: ConfigsService) {
    this.trelloForm = this.fb.group({
      key: ['']
    });
  }

  ngOnInit() {
  }

  submitCredentials(){
    this.configService.setTrelloKey(this.trelloForm.get('key').value);
    // console.log(this.trelloForm.get('key'));
  }

}
