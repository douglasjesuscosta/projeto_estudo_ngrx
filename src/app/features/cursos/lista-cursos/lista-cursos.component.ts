import { Observable, map, tap } from 'rxjs';
import { Component } from '@angular/core';

import { CursosService } from '../../services/cursos.service';
import { listFadeAnimation } from 'src/app/shared/animations/list-fade.animation';
import { MatDialog } from '@angular/material/dialog';
import { AdicionarEditarComponent } from '../adicionar-editar/adicionar-editar.component';
import { Store } from '@ngrx/store';
import { salvarListaCursos } from '../sessao/actions/curso-actions.action';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.scss'],
  animations: [listFadeAnimation],
})
export class ListaCursosComponent {
  public $listaCursos: Observable<any[]>;

  constructor(private cursosService: CursosService, public dialog: MatDialog, public store: Store) {
    this.$listaCursos = this.obterObservableListaCursos();
  }

  private obterObservableListaCursos() {
    return this.cursosService.getCursos().pipe(
      map((resultado) => resultado.payload),
      tap((resultado) => this.store.dispatch(salvarListaCursos({ listaCursos: resultado })))
    );
  }

  public adicionarEditarCurso(curso: any): void {
    const dialogRef = this.dialog.open(AdicionarEditarComponent, {
      height: '400px',
      width: '600px',

      data: { curso: curso },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
