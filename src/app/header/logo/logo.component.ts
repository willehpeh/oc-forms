import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  template: `
		<h1 class="logo">WebDev Academy</h1>
  `,
  styles: `
    h1 {
      font-size: 1.75rem;
      font-weight: 800;
      background: linear-gradient(135deg, #818cf8 0%, #c4b5fd 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }`
})
export class LogoComponent {

}
