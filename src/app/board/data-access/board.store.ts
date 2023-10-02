import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface GameState {
  playerOneScore: number;
  playerTwoScore: number;
}

const initialState: GameState = {
  playerOneScore: 0,
  playerTwoScore: 0,
};

@Injectable({ providedIn: 'root' })
export class BoardStore {
  private stateSubject = new BehaviorSubject<GameState>(initialState);
  readonly state$ = this.stateSubject.asObservable();

  constructor() {}

  get state(): GameState {
    return this.stateSubject.getValue();
  }

  setState(newState: Partial<GameState>): void {
    this.stateSubject.next({
      ...this.state,
      ...newState,
    });
  }
}
