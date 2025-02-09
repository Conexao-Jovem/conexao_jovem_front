import { Component, Input, OnInit } from '@angular/core';
import { TitleComponent } from '../../../../ui/components/title/title.component';
import { ButtonComponent } from '../../../../ui/components/button/button.component';
import { Filter, LucideAngularModule } from 'lucide-angular';
import { MinisteryCardComponent } from '../../../../ui/components/ministery-card/ministery-card.component';
import { MinisteryService } from '../../../../data/services/ministery/ministery.service';
import { Ministery } from '../../../../data/services/ministery/@types/find.dto';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ministerys',
  imports: [TitleComponent, ButtonComponent, LucideAngularModule, MinisteryCardComponent, RouterModule],
  templateUrl: './ministerys.component.html',
  styleUrl: './ministerys.component.scss'
})
export class MinisterysPage implements OnInit {
  readonly FilterIcon = Filter;
  ministerys: Ministery[] = [];

  constructor(private readonly ministeryService: MinisteryService) {}

  ngOnInit(): void {
    this.ministeryService.find().subscribe({
      next: response => {
        this.ministerys = response.data;
        console.log('Ministérios carregados:', this.ministerys);
      },
      error: error => {
        console.error('Erro ao carregar ministérios:', error);
      }
    });
  }
}
