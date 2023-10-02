import { Routes } from '@angular/router';
import { GameBoardComponent } from './board/feature/game-board/game-board.component';
import { NotFoundComponent } from './common/ui/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'game-board',
    loadComponent: () => import('./board/feature/game-board/game-board.component').then((c) => c.GameBoardComponent),
  },
  {
    path: '',
    redirectTo: 'game-board',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];
