import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ChevronLeft, ChevronRight, LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { FilterCardService } from './filter-card.service';
import { Filter } from './@types';

@Component({
  selector: 'app-filter-card',
  imports: [ButtonComponent, LucideAngularModule, CommonModule],
  templateUrl: './filter-card.component.html',
  styleUrl: './filter-card.component.scss'
})
export class FilterCardComponent implements OnInit {
  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;

  isOpen: boolean = false;
  @Input() filters: Filter[] = [];

  constructor(private filterService: FilterCardService) {}

  ngOnInit(): void {
    this.filterService.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

  toggleCard() {
    this.filterService.toggleCard();
  }
}
