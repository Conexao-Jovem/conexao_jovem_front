import { Component, Input, OnInit } from '@angular/core';
import { TitleComponent } from '../../../../ui/components/title/title.component';
import { ButtonComponent } from '../../../../ui/components/button/button.component';
import { Filter, LucideAngularModule } from 'lucide-angular';
import { MinisteryCardComponent } from '../../../../ui/components/ministery-card/ministery-card.component';
import { Ministery } from '../../../../data/services/ministery/@types/find.dto';
import { RouterModule } from '@angular/router';
import { MinisteryService } from '../../../../data/services/firebaseServices/ministery/ministery.service';

@Component({
  selector: 'app-ministerys',
  imports: [TitleComponent, ButtonComponent, LucideAngularModule, MinisteryCardComponent, RouterModule],
  templateUrl: './ministerys.component.html',
  styleUrl: './ministerys.component.scss'
})
export class MinisterysPage implements OnInit {
  readonly FilterIcon = Filter;
  ministerys: Ministery[] = [];

  constructor(private ministeryService: MinisteryService) {}

  async ngOnInit(): Promise<void> {
    this.ministerys = await this.ministeryService.findAll();
    console.log(this.ministerys);
  }
}
