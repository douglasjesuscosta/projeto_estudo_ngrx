import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { delay, finalize } from 'rxjs';
import { LayoutActions } from '../layout/estado/actions/layout.actions.type';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(public store: Store) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.store.dispatch({ type: LayoutActions.carregandoLoginAction.type, value: true });
    console.log('INICIO');

    // send cloned request with header to the next handler.
    return next.handle(req).pipe(
      delay(1000),
      finalize(() => {
        this.store.dispatch({ type: LayoutActions.carregandoLoginAction.type, value: false });
        console.log('TERMINOU');
      })
    );
  }
}
