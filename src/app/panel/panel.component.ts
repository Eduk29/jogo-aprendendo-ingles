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

  public progresso: number = 0;

  public tentativas: number = 3;

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
   * @return void
   */
  public verificaResposta(): void {
    if (this.respostaRodada === this.fraseRodada.traducaoPortugues) {
      alert('Resposta Correta!');

      if (this.rodada === (this.frase.length - 1)) {
        alert('Fim de Jogo!!');
      } else {
        this.atualizaRodada();
      }

      this.atualizaProgresso();
    } else {
      alert('Resposta Incorreta, tente novamente!');
      // TODO: Reduzir corações!
      this.tentativas--;

      if(this.tentativas < 0) {
        console.log('Fim de jogo');
      }
    }
  }

  /**
   * Atualiza a barra de progresso
   * @return void
   */
  private atualizaProgresso(): void {
    this.progresso = this.progresso + 25;
  }

}
