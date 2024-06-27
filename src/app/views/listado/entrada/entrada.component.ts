import { Component, OnInit, Input } from '@angular/core';

import { Entrada } from 'src/app/shared/interfaces/entrada';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  // Atributos
  @Input()
  public entrada: Entrada;

  constructor() {
    this.entrada = {
      title: '',
      body: '',
      id: 1,
      userId: 1
    }
  }

  ngOnInit(): void {
  }

}
