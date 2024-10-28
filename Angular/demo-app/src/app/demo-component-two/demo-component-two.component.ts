import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterComponentComponent } from '../counter-component/counter-component.component';

@Component({
  selector: 'app-demo-component-two',
  standalone: true,
  imports: [FormsModule, CounterComponentComponent],
  templateUrl: './demo-component-two.component.html',
  styleUrl: './demo-component-two.component.css'
})
export class DemoComponentTwoComponent {
  firstName = 'AK';
  initialCount = 18;
}
