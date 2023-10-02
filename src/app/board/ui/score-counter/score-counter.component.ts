import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { GameState } from '../../data-access/board.store';

@Component({
  selector: 'app-score-counter',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatBadgeModule],
  templateUrl: './score-counter.component.html',
  styleUrls: ['./score-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreCounterComponent {
  @Input() score: GameState | null = null;
}
