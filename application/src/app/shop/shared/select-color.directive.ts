import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appSelectColor]',
})
export class SelectColorDirective implements OnInit {
  @Input() price: number = 0;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.selectColor(this.price);
  }

  selectColor(price: number) {
    if (price > 2000) {
      this.el.nativeElement.style.color = 'yellow';
    }
    if (price > 50000) {
      this.el.nativeElement.style.color = 'red';
    }
  }
}
