import { Component } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-models',
  standalone: false,
  templateUrl: './models.component.html',
  styleUrl: './models.component.scss'
})
export class ModelsComponent {

  models: string[] = [];

  constructor(private comService: CommunicationService) {}

  ngOnInit(): void {
    this.getModels().subscribe(models => {
      this.models = models;
    });
  }

  getModels(): Observable<string[]> {
    return this.comService.get<string[]>('/models');
  }

}
