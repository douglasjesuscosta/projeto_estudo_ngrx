import { Component } from '@angular/core';
import { listFadeAnimation } from 'src/app/shared/animations/list-fade.animation';
import { Observable } from 'rxjs';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.scss'],
  animations: [listFadeAnimation],
})
export class ListaCursosComponent {
  public $listaCursos: Observable<[]>;

  constructor(private cursosService: CursosService) {
    this.$listaCursos = this.cursosService.getCursos();
  }
}
