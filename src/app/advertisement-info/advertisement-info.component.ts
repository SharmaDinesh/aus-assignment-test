import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { SidemenuComponent } from '../sidemenu/sidemenu.component'

@Component({
  selector: 'app-advertisement-info',
  templateUrl: './advertisement-info.component.html',
  styleUrls: ['./advertisement-info.component.scss'],
})
export class AdvertisementInfoComponent implements OnInit {
  public menuState: any;
  @Output() closeEvent = new EventEmitter<string>();
  @ViewChild(SidemenuComponent, {static: false}) sidemenuComponent: SidemenuComponent;
  constructor() { }

  ngOnInit() {
    this.againReceiveObj()
  }
  againReceiveObj() {
    // console.log('$event==========>', this.sidemenuComponent.menuStates)

  }

  close() {
    this.menuState = this.menuState == 'outMobile' ? 'outMobile' : 'outMobile';
    console.log('this.menuState', this.menuState);
    this.closeEvent.emit(this.menuState)
  }
  

}
