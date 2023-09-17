import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-adicionar-editar',
  templateUrl: './adicionar-editar.component.html',
  styleUrls: ['./adicionar-editar.component.scss'],
})
export class AdicionarEditarComponent {
  public formularioCurso: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AdicionarEditarComponent>
  ) {
    this.formularioCurso = this.obterFormularioCurso(data.curso);
  }

  public obterFormularioCurso(curso: any): FormGroup {
    console.log('CURSO', curso);
    return this.formBuilder.group({
      id: [curso.id],
      iconUrl: [curso.iconUrl],
      description: [curso.description],
      lessonsCount: [curso.lessonsCount],
      longDescription: [curso.longDescription],
      seqNo: [curso.seqNo],
      url: [curso.url],
      valor: [0],
    });
  }

  public salvarCurso() {
    let curso = this.formularioCurso.value;
    this.dialogRef.close(curso);
  }

  public fechar() {
    this.dialogRef.close();
  }
}
