import {
  PeopleProperties,
  StarshipProperties,
} from './../../data-access/board.service';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerCardComponent implements OnChanges {
  @Input() peopleCard: PeopleProperties | null = null;
  @Input() starshipCard: StarshipProperties | null = null;

  ngOnChanges() {}
}
