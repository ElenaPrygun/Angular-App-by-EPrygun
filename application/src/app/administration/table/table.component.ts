import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input()
  public items: any;
  @Input()
  public titles: any;

  @Output()
  public onSort: EventEmitter<string> = new EventEmitter<string>();

  @Output() add = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  public p: number = 1;
  public sortProperty!: string;
  public sortDirection: 'asc' | 'desc' = 'asc';

  constructor() {
    this.sortProperty = '';
    this.sortDirection = 'asc';
  }

  ngOnInit(): void {}

  sortData(property: string) {
    this.sortProperty = property;
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.items = [...this.items].sort((a: any, b: any) => {
      const propA = Reflect.get(a, property);
      const propB = Reflect.get(b, property);
      if (this.sortDirection === 'asc') {
        return propA > propB ? 1 : -1;
      } else {
        return propA < propB ? 1 : -1;
      }
    });
  }
}
