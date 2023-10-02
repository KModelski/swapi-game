import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PlayerCardComponent } from '../../ui/player-card/player-card.component';
import { ScoreCounterComponent } from '../../ui/score-counter/score-counter.component';
import { ResourceSwitchComponent } from '../../ui/resource-switch/resource-switch.component';
import {
  BoardService,
  PeopleProperties,
  StarshipProperties,
} from '../../data-access/board.service';
import { Observable, of } from 'rxjs';
import { LoaderComponent } from 'src/app/common/ui/loader/loader.component';
import { BoardStore } from '../../data-access/board.store';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    PlayerCardComponent,
    ScoreCounterComponent,
    LoaderComponent,
    ResourceSwitchComponent,
    MatToolbarModule,
  ],
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent {
  private readonly boardService = inject(BoardService);
  private readonly boardStore = inject(BoardStore);
  peopleCards$: Observable<PeopleProperties[]> | null = new Observable<
    PeopleProperties[]
  >();
  starshipCards$: Observable<StarshipProperties[]> | null = new Observable<
    StarshipProperties[]
  >();
  score$ = this.boardStore.state$;
  isLoading$ = this.boardService.isLoading$;

  onResourceSelected(resource: 'people' | 'starships'): void {
    if (resource === 'people') {
      this.peopleCards$ = this.boardService.getPlayer();
      this.starshipCards$ = null;
    } else {
      this.starshipCards$ = this.boardService.getStarship();
      this.peopleCards$ = null;
    }
  }
}
