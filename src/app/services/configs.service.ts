import { Injectable, EventEmitter } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root'
})
export class ConfigsService {
  trelloKey: string;
  auth = new EventEmitter<boolean>();
  key: string;
  token: string;

  constructor(private electronService: ElectronService) { }

  setTrelloKey(form) {
    this.electronService.ipcRenderer.send("setNewAPIKey", form);
    this.electronService.ipcRenderer.on('key:set', (event, data) => {
      console.log(data, typeof(data));
      if (data.key === form.key && data.token === form.token){
        this.key = data.key;
        this.token = data.token
        this.auth.emit(true);
      }
      else this.auth.emit(false);
    });
  }
  getTrelloKey() {
    this.electronService.ipcRenderer.send('key:get');
    this.electronService.ipcRenderer.on('key:get:response', (event, data) => {
      if (data.key !== '' && data.token !== ''){
        this.key = data.key;
        this.token = data.token
        this.auth.emit(true);
      }
      else this.auth.emit(false);
    });
  }
}
