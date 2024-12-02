import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  lightSvgsrc = '../../../assets/images/brightness-down.svg'
  darkSvgsrc = '../../../assets/images/moon-stars.svg'
}
