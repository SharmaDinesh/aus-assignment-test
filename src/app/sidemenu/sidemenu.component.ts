import { Component, OnInit, ViewChild, Renderer, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  public currentUser: any
  public currentUrl: any;
  public menuValue: any
  public groups: any;
  public shownGroup: any;
  public shownGroup1: any;
  accordionExapanded = false;
  public products: any;

  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };



  constructor(private router: Router, public renderer: Renderer) { }

  ngOnInit() {
    this.products =  [
      { id: 0, name: 'Dinesh', price: '8' },
      { id: 1, name: 'Manoj', price: '5' },
      { id: 2, name: 'Arun', price: '9' },
      { id: 3, name: 'Anand', price: '7' }
    ]
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
    console.log('currentUser', this.currentUser.role);
    console.log('currentUrl', this.router.url);
    this.stateUrlAccess();
    if(this.currentUser.role === 'Admin') {
      this.router.navigate(['role/admin']);
      this.currentUrl = this.router.url 
      this.groups = [{
          "name": "top-menu-1",
          "item": [
            {
              "name": "item-1-1",
              "item": [
                {
      
                  "name": "item-1-1-1",
      
                  "item": [
      
                    {
      
                      "name": "item-1-1-1-1",
      
                      "url": "/item1111"
      
                    },
      
                    {
      
                      "name": "item-1-1-1-2",
      
                      "url": "/item1112"
      
                    }
      
                  ]
      
                },
      
                {
      
                  "name": "item-1-1-2",
      
                  "item": [
      
                    {
      
                      "name": "item-1-1-2-1",
      
                      "url": "/item1121"
      
                    },
      
                    {
      
                      "name": "item-1-1-2-2",
      
                      "url": "/item1122"
      
                    }
      
                  ]
      
                }
      
              ]
      
            },
      
            {
      
              "name": "item-1-2",
      
              "item": [
      
                {
      
                  "name": "item-1-2-1",
      
                  "item": [
      
                    {
      
                      "name": "item-1-2-1-1",
      
                      "url": "/item1211"
      
                    },
      
                    {
      
                      "name": "item-1-2-1-2",
      
                      "url": "/item1212"
      
                    }
      
                  ]
      
                },
      
                {
      
                  "name": "item-1-2-2",
      
                  "item": [
      
                    {
      
                      "name": "item-1-2-2-1",
      
                      "url": "/item1221"
      
                    },
      
                    {
      
                      "name": "item-1-2-2-2",
      
                      "url": "/item1222"
      
                    }
      
                  ]
      
                }
      
              ]
      
            }
      
          ]
      
        },
      
        {
      
          "name": "top-menu-2",
      
          "item": [
      
            {
      
              "name": "item-2-1",
      
              "item": [
      
                {
      
                  "name": "item-2-1-1",
      
                  "item": [
      
                    {
      
                      "name": "item-2-1-1-1",
      
                      "url": "/item2111"
      
                    },
      
                    {
      
                      "name": "item-2-1-1-2",
      
                      "url": "/item2112"
      
                    }
      
                  ]
      
                },
      
                {
      
                  "name": "item-2-1-2",
      
                  "item": [
      
                    {
      
                      "name": "item-2-1-2-1",
      
                      "url": "/item2121"
      
                    },
      
                    {
      
                      "name": "item-2-1-2-2",
      
                      "url": "/item2122"
      
                    }
      
                  ]
      
                }
      
              ]
      
            },
      
            {
      
              "name": "item-2-2",
      
              "item": [
      
                {
      
                  "name": "item-2-2-1",
      
                  "item": [
      
                    {
      
                      "name": "item-2-2-1-1",
      
                      "url": "/item2211"
      
                    },
      
                    {
      
                      "name": "item-2-2-1-2",
      
                      "url": "/item2212"
      
                    }
      
                  ]
      
                },
      
                {
      
                  "name": "item-2-2-2",
      
                  "item": [
      
                    {
      
                      "name": "item-2-2-2-1",
      
                      "url": "/item2221"
      
                    },
      
                    {
      
                      "name": "item-2-2-2-2",
      
                      "url": "/item2222"
      
                    }
      
                  ]
      
                }
      
              ]
      
            }
      
          ]
      
        }
      
      ];
      console.log('this.groups', this.groups)
      // for (var i=0; i<10; i++) {
      //   this.groups[i] = {
      //     name: i,
      //     items: []
      //   };
      //   for (var j=0; j<3; j++) {
      //     this.groups[i].items.push(i + '-' + j);
      //   }
      // }
      this.menuValue = [{
        menu1: 'Profile',
        menu2: 'Dashboard'
      }]
      console.log('this.menuValue', this.menuValue);
    }else {
      this.router.navigate(['role/user']);
      this.currentUrl = this.router.url
      // this.stateUrlAccess();
      this.menuValue = [{
        menu1: 'Availability',
        menu2: 'Job History'
      }]
    } 
  }

  stateUrlAccess() {
    this.router.events.subscribe((url:any) => {
      if(url.url === undefined) {
        this.currentUrl = this.router.url;
        console
      }else {
        this.currentUrl = url.url;
      }
    }); 
  }

  toggleGroup(group) {
    console.log('group', group);
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
  };

  isGroupShown(group) {    
    return this.shownGroup === group;
  };
  xyz(value) {
    console.log('value', value);
    if (this.abc(value)) {
      this.shownGroup1 = null;
  } else {
      this.shownGroup1 = value;
  }
  };

  abc(value) {
    return this.shownGroup1 === value;
  }


}
