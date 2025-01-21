import { Component, Input, OnInit } from '@angular/core';
import { DateUtilsService } from '../../../data/utils/date-utils.service';

@Component({
  selector: 'app-event-card',
  imports: [],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent implements OnInit {
  @Input() date: Date = new Date();
  @Input() maxMembers?: number;
  @Input() currentMembers?: number;
  @Input() title: string = '';
  @Input() description?: string;
  @Input() imgUrl: string = '';
  protected month: string = '';
  protected day: number = 0;

  constructor(private dateUtils: DateUtilsService) {}

  ngOnInit(): void {
    this.month = this.dateUtils.getMonthName(this.date.getMonth(), { format: 'short', capitalization: 'default' });
    this.day = this.date.getDate();
  }
}
