import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  @Input() headers: string[] = [];
  @Input() fields: string[] = [];
  @Input() data: any[] = [];

}
