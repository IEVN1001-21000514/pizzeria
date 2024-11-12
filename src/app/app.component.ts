import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrarComponent } from "./registrar/registrar.component";
import { TablaVistaComponent } from "./tabla-vista/tabla-vista.component";
import { VentasComponent } from "./ventas/ventas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegistrarComponent, TablaVistaComponent, VentasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pizzeria';
}
