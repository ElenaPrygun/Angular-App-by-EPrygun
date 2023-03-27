import { Component } from '@angular/core';

import {CartComponent} from '../cart/cart.component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent extends CartComponent {
  isAvaliable: boolean = true;

  showTooltip() {
    this.ngOnInit();
    this.isAvaliable = false;
  }

  hideTooltip() {
    this.isAvaliable = true;
   
  }
}
