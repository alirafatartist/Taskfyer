import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { HeaderComponent } from './Components/header/header.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from "./Components/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule, SidebarComponent, HeaderComponent, RegisterComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Taskfyer';
  repeatArray = new Array(100);
}
