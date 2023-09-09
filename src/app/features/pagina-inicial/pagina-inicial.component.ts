import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss'],
})
export class PaginaInicialComponent {
  constructor(public router: Router) {}

  public listaFeatures = [
    {
      nome: 'Cursos',
      descricao: 'Gerenciamento de cursos.',
    },
  ];

  public redirecionarModuloCursos() {
    this.router.navigateByUrl('/paginas/cursos');
  }
}
