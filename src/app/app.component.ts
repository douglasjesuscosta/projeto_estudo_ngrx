import { Observable, debounceTime } from 'rxjs';
import { Store } from '@ngrx/store';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { carregamentoSelector } from './layout/estado/selectors/carregando.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public carregamento$: Observable<boolean>;
  public title = 'ngrx-projeto-estudo';

  ngOnInit(): void {}

  constructor(private store: Store, private cdref: ChangeDetectorRef) {
    this.carregamento$ = this.store.select(carregamentoSelector).pipe(debounceTime(0));
  }
}
