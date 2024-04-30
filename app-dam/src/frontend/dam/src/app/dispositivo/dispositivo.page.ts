import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})
export class DispositivoPage implements OnInit {

  constructor() { }

  @Input()
  dispositivo: any;

  ngOnInit() {
  }

  handleItemClick() {
    console.log('Item clicked');
    // Aquí puedes agregar la lógica que quieras ejecutar cuando se haga clic en el elemento
  }
}
