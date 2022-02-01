import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  // Crear plantilla en una linea
  //   <p>Plantilla en una linea</p>
  // `,
  styleUrls: ['./app.component.css'],
  styles: [
    'h1 { color: green;}',
    'h1 { font-size: 42px; }',
    '.underline { text-decoration: underline }'
  ]
})
export class AppComponent {
  title = 'componentes';
}
