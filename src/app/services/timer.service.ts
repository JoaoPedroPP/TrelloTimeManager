import { Injectable, EventEmitter } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  // timer: EventEmitter<


  constructor(private electronService: ElectronService) { }

  getTime() {
    console.log(this.electronService.ipcRenderer.on('timer:counting', (event, data) => console.log(data)));
  }
}
