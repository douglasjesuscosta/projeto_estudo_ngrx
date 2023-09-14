import { Component } from '@angular/core';

@Component({
  selector: 'app-adicionar-editar',
  templateUrl: './adicionar-editar.component.html',
  styleUrls: ['./adicionar-editar.component.scss']
})
export class AdicionarEditarComponent {

  @Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog-overview-example-dialog.html',
    standalone: true,
    imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  })
  export class DialogOverviewExampleDialog {
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {}

    onNoClick(): void {
      this.dialogRef.close();
    }
  }

}
