import { Frases } from './mockFrases';
import { Component, OnInit } from '@angular/core';
import { Frase } from '../commons/frase.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  public fraseInstrucao: string = 'Traduza a seguinte frase';
  public frase: Array<Frase> = Frases;

  public rodada: number = 0;
  public respostaRodada: string;
  public fraseRodada: Frase;

  constructor() { }

  ngOnInit() {
    this.fraseRodada = this.frase[this.rodada];
  }

  /**
   * Atualiza a rodada, a frase da rodada e apaga a resposta anterior
   * @return void
   */
  private atualizaRodada(): void {
    this.rodada++;
    this.fraseRodada = this.frase[this.rodada];
    this.respostaRodada = '';
  }

  /**
   * Verifica se a resposta fornecida pelo usuário. Se a resposta estiver correta, atualiza o progresso do
   * jogador e atualiza a rodada. Porém se a resposta estiver errada, deduz um da vida do jogador.
   * @returns void
   */
  public verificaResposta(): void{
    if(this.respostaRodada === this.fraseRodada.traducaoPortugues){
      alert('Resposta Correta!');
      this.atualizaRodada();
      // TODO: Atualizar progresso do jogador!
    } else {
      alert('Resposta Incorreta, tente novamente!');
      // TODO: Reduzir corações!
    }
  }

}
