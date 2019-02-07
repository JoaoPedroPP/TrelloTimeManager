import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root'
})
export class ConfigsService {

  constructor(private electronService: ElectronService) { }

  setTrelloKey(form: string) {
    this.electronService.ipcRenderer.send("setNewAPIKey", form);
  }
}
