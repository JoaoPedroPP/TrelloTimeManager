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

  setTrelloKey(form: string) {
    this.electronService.ipcRenderer.send("setNewAPIKey", form);
    this.electronService.ipcRenderer.on('key:set', (event, data) => {
      if (data === form){
        this.key = data;
        this.auth.emit(true);
      }
      else this.auth.emit(false);
    });
  }
  getTrelloKey() {
    this.electronService.ipcRenderer.send('key:get');
    this.electronService.ipcRenderer.on('key:get:response', (event, data) => {
      if (data !== ''){
        this.key = data;
        this.auth.emit(true);
      }
      else this.auth.emit(false);
    });
  }
}
