import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfigsService } from 'src/app/services/configs.service';
import { Router } from '@angular/router';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  trelloForm: FormGroup;

  constructor(private fb: FormBuilder, private configService: ConfigsService, private electronService: ElectronService, private router: Router, private zone: NgZone) {
    this.trelloForm = this.fb.group({
      key: ['']
    });
  }

  ngOnInit() {
    this.configService.getTrelloKey();
    this.configService.auth.subscribe(data => {if(data === true)this.zone.run(() => this.router.navigate(['logged', 'home']));});
  }

  submitCredentials(){
    this.configService.setTrelloKey(this.trelloForm.get('key').value);
  }

}
