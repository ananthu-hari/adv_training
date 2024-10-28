import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  standalone: true,
  imports: [],
  template: `
    <button (click)="updateCount(-1)">-</button>    
    <span>{{ count }}</span>    
    <button (click)="updateCount(+1)">+</button>
    @if (count > 18) {  <p>Count is greater than 18</p><br> }
    @else if (count == 18) { <p> Count is equal to 18. </p><br> } 
    @else { <p> Count is less than 18. </p><br>}
  `,
  styleUrl: './counter-component.component.css'
})
export class CounterComponentComponent {
  @Input() count: number;  
  @Output() countChange = new EventEmitter<number>();  
  updateCount(amount: number): void {    
    this.count += amount;    
    this.countChange.emit(this.count);  
  }
}
