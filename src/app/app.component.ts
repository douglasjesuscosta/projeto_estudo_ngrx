import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { carregamentoSelector } from './layout/estado/selectors/carregando.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public carregamento$: Observable<boolean>;
  public title = 'ngrx-projeto-estudo';

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private store: Store) {
    this.carregamento$ = this.store.select(carregamentoSelector);
  }
}
