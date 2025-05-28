import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ToggleTextComponent } from './components/toggle-text/toggle-text.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, CommonModule, RouterOutlet, ToggleTextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title: string = 'Hola mundo';
  mensaje: string = 'mensaje desde el ts';
  subTitle = 'Contador con estado de session';
  users: string[] = ['Pepe', 'Maria', 'Juan', 'Andres'];
  visible: boolean = false;
  counter: number = 0;

  ngOnInit(): void {
    this.counter = parseInt(sessionStorage.getItem('counter')!) || 0;
  }

  setVisible(): void {
    this.visible = this.visible ? false : true;
    console.log('hemos hecho clic en setVisible');
  }

  setCounter(counter: number): void{
    this.counter = counter
    
  }
}
