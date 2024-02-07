import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BathroomComponent } from './components/bathroom/bathroom.component';
import { BedroomComponent } from './components/bedroom/bedroom.component';
import { DiningroomComponent } from './components/diningroom/diningroom.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { HallComponent } from './components/hall/hall.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BathroomComponent, BedroomComponent, DiningroomComponent, KitchenComponent,HallComponent ,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fisat';
  name : string = 'joyal';
  email : string = "";
  test(){
    alert("my name is joyal");
  }

}
