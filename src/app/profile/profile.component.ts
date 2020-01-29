import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public menuState: any;
  @Output() closeEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {}

  close() {
    this.menuState = this.menuState == 'outMobile' ? 'outMobile' : 'outMobile';
    console.log('this.menuState', this.menuState);
    this.closeEvent.emit(this.menuState)
  }

}
