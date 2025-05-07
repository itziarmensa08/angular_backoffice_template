import { Component, OnInit } from '@angular/core';
import { Weatherstation } from '../../../interfaces/weatherstation';
import { WeatherstationService } from '../../../services/weatherstation.service';

@Component({
  selector: 'app-weatherstation',
  standalone: false,
  templateUrl: './weatherstation.component.html',
  styleUrl: './weatherstation.component.scss'
})
export class WeatherstationComponent implements OnInit {

  searchQuery = '';
  data: Weatherstation[] = [];
  headers: string[] = [];
  display_columns: string[] = []

  constructor(
    private service: WeatherstationService
  ) {}

  ngOnInit() {
    this.service.getAll(1, 100).subscribe(response => {
      response.map(data => this.data.push(data));
    });

    this.service.getConfig().subscribe(response => {
      this.headers = response['headers'];
      this.display_columns = response['display_columns'];
    });
  }

}
