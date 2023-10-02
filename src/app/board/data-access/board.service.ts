import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  finalize,
  forkJoin,
  from,
  map,
  switchMap,
  take,
  tap,
} from 'rxjs';
import { BoardStore } from './board.store';
import {
  Response,
  PeopleProperties,
  PeopleResponse,
  StarshipProperties,
  StarshipResponse,
} from './board.model';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private readonly http = inject(HttpClient);
  private readonly boardStore = inject(BoardStore);
  private readonly BASE_URL = 'https://swapi.tech/api/';
  private readonly isLoading = new BehaviorSubject(false);
  readonly isLoading$ = this.isLoading.asObservable();

  getCards(source: 'people' | 'starships'): Observable<string[]> {
    this.isLoading.next(true);
    const url =
      source === 'people'
        ? `${this.BASE_URL}people?page=1&limit=100`
        : `${this.BASE_URL}starships?page=1&limit=100`;

    return this.http.get<Response>(url).pipe(
      map((response) => {
        const availableNumbers = response.results.length;
        const randomNumbers = [
          Math.floor(Math.random() * availableNumbers),
          Math.floor(Math.random() * availableNumbers),
        ];

        const players = [
          response.results[randomNumbers[0]].url,
          response.results[randomNumbers[1]].url,
        ];
        return players;
      })
    );
  }

  getPlayer(): Observable<PeopleProperties[]> {
    return this.getCards('people').pipe(
      switchMap((players) =>
        forkJoin(
          players.map((player) =>
            this.http.get<PeopleResponse>(player).pipe(
              map((response) => response.result.properties),
              finalize(() => this.isLoading.next(false))
            )
          )
        ).pipe(
          map((people) =>
            people.filter((person) => person.height !== 'unknown')
          ),
          tap(([person1, person2]) => {
            if (parseInt(person1.height) > parseInt(person2.height)) {
              this.boardStore.setState({
                playerOneScore: this.boardStore.state.playerOneScore + 1,
              });
            } else {
              this.boardStore.setState({
                playerTwoScore: this.boardStore.state.playerTwoScore + 1,
              });
            }
          })
        )
      )
    );
  }

  getStarship(): Observable<StarshipProperties[]> {
    return this.getCards('starships').pipe(
      switchMap((starships) =>
        forkJoin(
          starships.map((starship) =>
            this.http.get<StarshipResponse>(starship).pipe(
              map((response) => response.result.properties),
              finalize(() => this.isLoading.next(false))
            )
          )
        ).pipe(
          map((starships) =>
            starships.filter((starship) => starship.length !== 'unknown')
          ),
          tap(([starship1, starship2]) => {
            if (parseInt(starship1.length) > parseInt(starship2.length)) {
              this.boardStore.setState({
                playerOneScore: this.boardStore.state.playerOneScore + 1,
              });
            } else {
              this.boardStore.setState({
                playerTwoScore: this.boardStore.state.playerTwoScore + 1,
              });
            }
          })
        )
      )
    );
  }
}
export { StarshipProperties, PeopleProperties };
