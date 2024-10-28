import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponentComponent } from "./demo-component/demo-component.component";
import { DemoComponentTwoComponent } from "./demo-component-two/demo-component-two.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DemoComponentComponent, DemoComponentTwoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-app';
  theme = 'light';
}
