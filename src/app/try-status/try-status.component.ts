import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-try-status',
  templateUrl: './try-status.component.html',
  styleUrls: ['./try-status.component.scss']
})
export class TryStatusComponent implements OnInit {

  @Input()
  public tentativas: Array<boolean>;

  constructor() { }

  ngOnInit() {
    console.log(this.tentativas);
  }

}
