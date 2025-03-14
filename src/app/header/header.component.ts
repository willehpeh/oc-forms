import { Component } from '@angular/core';
import { LogoComponent } from './logo/logo.component';

@Component({
  selector: 'app-header',
  imports: [
    LogoComponent
  ],
  template: `
		<header>
			<nav>
				<app-logo/>
				<ul>
					<li><a>Home</a></li>
					<li><a>Courses</a></li>
					<li><a>Contact</a></li>
				</ul>
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

    ul {
      display: flex;
      list-style: none;
      gap: 3rem;
    }

    a {
      text-decoration: none;
      color: #e2e8f0;
      font-weight: 600;
      font-size: 1.1rem;
      transition: all 0.3s ease;
      position: relative;
      cursor: pointer;
    }

    a::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 0;
      background: linear-gradient(135deg, #818cf8 0%, #c4b5fd 100%);
      transition: width 0.3s ease;
    }

    a:hover {
      color: #818cf8;
    }

    a:hover::after {
      width: 100%;
    }
  `
})
export class HeaderComponent {

}
