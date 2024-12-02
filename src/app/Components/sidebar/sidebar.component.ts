import { Component } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [TooltipModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
