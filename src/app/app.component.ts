import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public jogoAtivo: boolean = true;
  public tipoEncerramento: string;

  public encerraJogo(evento: string): void {
    this.jogoAtivo = false;
    this.tipoEncerramento = evento;
  }

  public reiniciarJogo(): void {
    this.jogoAtivo = true;
    this.tipoEncerramento = undefined;
  }
}
