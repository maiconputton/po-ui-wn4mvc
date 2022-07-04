import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tamanho = 200;

  public itensTabelaSimular = Array();
  public simulador: any = {};
  colunasTabelaSimular: Array<any> = [
    {
      label: 'Data Dep.',
      property: 'dt_deposito',
      width: '25%',
      format: 'dd/MM/yy',
      type: 'date',
    },
    {
      label: 'Valor',
      property: 'valor',
      width: '25%',
      type: 'currency',
      format: 'BRL',
    },
    {
      property: 'acoes',
      label: 'Ações',
      width: '15%',
      type: 'icon',
      icons: [
        {
          icon: 'po-icon-delete',
          tooltip: 'Excluir',
          value: 'excluir',
          action: this.excluirSimular.bind(this),
        },
      ],
    },
  ];

  excluirSimular(row): void {
    this.itensTabelaSimular.splice(this.itensTabelaSimular.indexOf(row), 1);
    console.log(this.itensTabelaSimular);
  }

  adicionarSimulador($event): void {
    this.itensTabelaSimular.push(this.simulador);
    console.log(this.itensTabelaSimular);
  }
}
