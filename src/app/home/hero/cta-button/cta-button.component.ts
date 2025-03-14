import { Component } from '@angular/core';

@Component({
  selector: 'app-cta-button',
  imports: [],
  template: `
		<a>
      <ng-content/>
    </a>
  `,
  styles: `
    a {
      display: inline-block;
      padding: 1.25rem 2.5rem;
      background: linear-gradient(135deg, #818cf8 0%, #c4b5fd 100%);
      color: white;
      text-decoration: none;
      border-radius: 1rem;
      font-weight: 600;
      font-size: 1.125rem;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(129, 140, 248, 0.4);
      cursor: pointer;
    }

    a:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(129, 140, 248, 0.6);
    }`
})
export class CtaButtonComponent {

}
