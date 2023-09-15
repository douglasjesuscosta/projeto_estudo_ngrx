import { Observable, map } from 'rxjs';
import { Component } from '@angular/core';

import { CursosService } from '../../services/cursos.service';
import { listFadeAnimation } from 'src/app/shared/animations/list-fade.animation';
import { MatDialog } from '@angular/material/dialog';
import { AdicionarEditarComponent } from '../adicionar-editar/adicionar-editar.component';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.scss'],
  animations: [listFadeAnimation],
})
export class ListaCursosComponent {
  public $listaCursos: Observable<any[]>;

  constructor(private cursosService: CursosService, public dialog: MatDialog) {
    this.$listaCursos = this.cursosService.getCursos().pipe(map((resultado) => resultado.payload));
  }

  public adicionarEditarCurso(curso: any): void {
    const dialogRef = this.dialog.open(AdicionarEditarComponent, {
      height: '400px',
      width: '600px',

      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
