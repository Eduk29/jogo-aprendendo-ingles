import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-try-status',
  templateUrl: './try-status.component.html',
  styleUrls: ['./try-status.component.scss']
})
export class TryStatusComponent implements OnInit {

  @Input()
  public tentativas: number;

  public vidas: Array<boolean> = [true, true, true];

  constructor() { }

  ngOnInit() {
    console.log(this.tentativas);
  }

  ngOnChanges(): void {
    if (this.tentativas !== this.vidas.length){
      this.vidas[this.tentativas] = false;
    }
  }
}
