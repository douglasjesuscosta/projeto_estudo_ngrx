import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-adicionar-editar',
  templateUrl: './adicionar-editar.component.html',
  styleUrls: ['./adicionar-editar.component.scss'],
})
export class AdicionarEditarComponent {
  public formularioCurso: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formularioCurso = this.obterFormularioCurso();
  }

  public obterFormularioCurso(): FormGroup {
    return this.formBuilder.group({
      nome: [''],
      valor: [0],
    });
  }
}
