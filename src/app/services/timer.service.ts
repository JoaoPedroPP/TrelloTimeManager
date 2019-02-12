import { Injectable, EventEmitter } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  // timer: EventEmitter<


  constructor(private electronService: ElectronService) { }

  sendTime(time:string) {
    this.electronService.ipcRenderer.send('timer:counting', time);
    // console.log(this.electronService.ipcRenderer.on('timer:counting', (event, data) => console.log(data)));
  }
}
