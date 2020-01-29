import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
//   animations: [
//     trigger('myanimation',[
//        state('inMobile',style({
//           transform : 'translate3d(0,0,0)'
//        })),
//        state('outMobile',style({
//           transform : 'translate3d(0, 100%, 0)'
//        })),
//        transition('inMobile <=> outMobile',animate('400ms ease-in-out')),
//        transition('outMobile <=> inMobile',animate('400ms ease-in-out'))
//     ]),
//  ],
})
export class AdminComponent implements OnInit {

  public currentUser: any;
  public menuState = 'outMobile';
  // @Input() menuState: any;
  @Output() messageEvent = new EventEmitter<string>();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.menuState = 'outMobile';
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
    console.log('=========>', this.currentUser.role)
  }

  animate() {
    this.menuState = this.menuState == 'inMobile' ? 'inMobile' : 'inMobile';
    console.log('this.menuState', this.menuState);
    this.messageEvent.emit(this.menuState)
  }



}
