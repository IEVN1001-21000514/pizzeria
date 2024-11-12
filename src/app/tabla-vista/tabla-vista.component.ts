import { Component, EventEmitter, Output } from '@angular/core';
import { PizzeriaService } from '../servicios/registrar.service';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tabla-vista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-vista.component.html',
  styleUrl: './tabla-vista.component.css'
})
export class TablaVistaComponent {
  pedidos: any[] = [];

  constructor(private pizzeriaService: PizzeriaService) {}

  ngOnInit() {
    // Se suscribe al servicio para recibir los pedidos cuando se actualicen
    this.pizzeriaService.pedios$.subscribe((pedidos) => {
      this.pedidos = pedidos.filter(
        (pedidos) => pedidos && Object.keys(pedidos).length > 0
      );
    });
  }

  // Método para eliminar un pedido
  eliminarPedido(pedido: any) {
    this.pizzeriaService.eliminarPedido(pedido); // Llama al servicio para eliminar el pedido
  }

  // Método para completar la orden
  terminarPedido() {
    this.pizzeriaService.terminarPedido();
  }

  // Método para calcular el total de los subtotales
  calcularTotal(): number {
    return this.pedidos.reduce((total, pedido) => total + pedido.precio, 0);
  }
}
