import { Injectable, EventEmitter } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root'
})
export class ConfigsService {
  trelloKey: string;
  auth= new EventEmitter<boolean>();

  constructor(private electronService: ElectronService) {
    this.electronService.ipcRenderer.on('key:set', (event, key) => {
      console.log(key);
      this.trelloKey = key;
      this.auth.emit(true);
    });
    this.getTrelloKey();
    this.electronService.ipcRenderer.on('key:get:response', (event, data) => {
      if(data != ''){
        this.trelloKey = data;
        this.auth.emit(true);
      }
      else this.auth.emit(false);
    });
  }

  setTrelloKey(form: string) {
    this.electronService.ipcRenderer.send("setNewAPIKey", form);
  }
  getTrelloKey() {
    this.electronService.ipcRenderer.send('key:get');
  }
}
