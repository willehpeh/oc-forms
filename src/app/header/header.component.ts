import { Component } from '@angular/core';
import { HeaderLogoComponent } from './logo/header-logo.component';
import { HeaderLinksComponent } from './links/header-links.component';

@Component({
  selector: 'app-header',
  imports: [
    HeaderLogoComponent,
    HeaderLinksComponent
  ],
  template: `
		<header>
			<nav>
				<app-header-logo/>
				<app-header-links/>
			</nav>
		</header>
  `,
  styles: `
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem 7%;
      background-color: rgba(15, 23, 42, 0.8);
      backdrop-filter: blur(10px);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      border-bottom: 1px solid rgba(148, 163, 184, 0.1);
    }
  `
})
export class HeaderComponent {

}
