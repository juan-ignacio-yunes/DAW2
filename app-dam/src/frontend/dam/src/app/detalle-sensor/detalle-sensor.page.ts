import { Component, OnInit } from '@angular/core';
import { GetMedicionService } from '../services/get-medicion.service';
import { ActivatedRoute} from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-sensor',
  templateUrl: './detalle-sensor.page.html',
  styleUrls: ['./detalle-sensor.page.scss'],
})
export class DetalleSensorPage implements OnInit {
  
  id: number = 0;
  listado: any[] = [];
  private unsubscribe$ = new Subject<void>();
  value = 0;
  elemento: any
  medicion: any;

  constructor(
    private _actRouter: ActivatedRoute,
    private router: Router,
    private medicionService: GetMedicionService) { }

  ngOnInit() {
    this.id = Number(this._actRouter.snapshot.paramMap.get('id'));
    this.medicionService.getUltimaMedicion(this.id)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((data: any[]) => {
      console.log(data)

      //genero número aleatorio entre 10 y 60
      const nuevoValor = (Math.floor(Math.random() * 51) + 10).toString();

      //reemplazo por uno nuevo aleatorio para simular una nueva medición 
      data[0].valor = nuevoValor;
      
      this.listado = data;
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  irAInicio() {
    console.log("vamos a Inicio");
    this.router.navigate(['/home']);
  }

  irAMediciones() {
    console.log("vamos a Mediciones del sensor");
    this.router.navigate(['mediciones',this.id]);
  }

  irALog() {
    console.log("vamos a Mediciones del sensor");
    this.router.navigate(['logs',this.id]);
  }

  Electrovalvula(elemento:any){
    console.log("abrir EV");
    this.router.navigate(['EV'],{
      state:{elemento}//elemento
    });
  }



}
