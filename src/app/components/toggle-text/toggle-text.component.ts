import { Component } from '@angular/core';

@Component({
  selector: 'AppToggle',
  standalone: true,
  imports: [],
  templateUrl: './toggle-text.component.html',
  styleUrl: './toggle-text.component.css'
})
export class ToggleTextComponent {

  showText:boolean = false;

  toggleText() {
    this.showText = !this.showText;
  }


}
