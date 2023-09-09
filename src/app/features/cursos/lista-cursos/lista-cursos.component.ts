import { Observable, map } from 'rxjs';
import { Component } from '@angular/core';

import { CursosService } from '../../services/cursos.service';
import { listFadeAnimation } from 'src/app/shared/animations/list-fade.animation';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.scss'],
  animations: [listFadeAnimation],
})
export class ListaCursosComponent {
  public $listaCursos: Observable<any[]>;

  constructor(private cursosService: CursosService) {
    this.$listaCursos = this.cursosService.getCursos().pipe(map((resultado) => resultado.payload));
  }
}
