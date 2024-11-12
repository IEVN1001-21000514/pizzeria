import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PizzeriaService } from '../servicios/registrar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './registrar.component.html',
  styles: ``
})
export class RegistrarComponent implements OnInit {

  ventasForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private pizzeriaService: PizzeriaService
  ) {
    this.ventasForm = this.fb.group({
      name: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      pizzaSize: ['', Validators.required],
      ingredientes: this.fb.group({
        jamon: [false],
        pina: [false],
        champinones: [false],
      }),
      cantidad: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      fecha: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  agregarPedido(): void {
    if (this.ventasForm.valid) {
      const formData = this.ventasForm.value;

      const nuevoPedido = {
        name: formData.name,
        direccion: formData.direccion,
        pizzaSize: formData.pizzaSize,
        cantidad: Number(formData.cantidad),
        ingredientes: this.obtenerIngredientesSeleccionados(formData.ingredientes),
        fecha: formData.fecha,  // Usar la fecha seleccionada del formulario
        precio: this.pizzeriaService.calcularPrecio(
          formData.pizzaSize,
          Number(formData.cantidad),
          this.obtenerIngredientesSeleccionados(formData.ingredientes)
        ),
      };

      // Pasa el pedido al servicio
      this.pizzeriaService.agregarPedido(nuevoPedido);
    } else {
      console.error('El formulario es inválido');
    }
  }

  obtenerIngredientesSeleccionados(ingredientes: any): string[] {
    const ingredientesSeleccionados = [];
    if (ingredientes.jamon) ingredientesSeleccionados.push('Jamon');
    if (ingredientes.pina) ingredientesSeleccionados.push('Pina');
    if (ingredientes.champinones) ingredientesSeleccionados.push('Champiñones');
    return ingredientesSeleccionados;
  }
  
}