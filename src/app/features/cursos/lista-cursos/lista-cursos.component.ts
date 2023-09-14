import { Observable, map } from 'rxjs';
import { Component } from '@angular/core';

import { CursosService } from '../../services/cursos.service';
import { listFadeAnimation } from 'src/app/shared/animations/list-fade.animation';
import { MatDialog } from '@angular/material/dialog';

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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
