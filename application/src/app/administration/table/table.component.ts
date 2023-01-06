import { Component, Input, OnInit } from '@angular/core';

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

  public p: number = 1;

  ngOnInit(): void {}
}
