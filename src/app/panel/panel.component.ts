import { Frases } from './mockFrases';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output()
  public encerrarJogo: EventEmitter<string> = new EventEmitter();

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

      if (this.rodada === (this.frase.length - 1)) {
        this.encerrarJogo.emit('vitoria')
      } else {
        this.atualizaRodada();
      }

      this.atualizaProgresso();
    } else {
      this.tentativas--;

      if(this.tentativas < 0) {
        console.log('Fim de jogo');
        this.encerrarJogo.emit('derrota');
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
