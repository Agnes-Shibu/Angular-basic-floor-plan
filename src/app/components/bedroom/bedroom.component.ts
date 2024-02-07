import { Component } from '@angular/core';
import { BathroomComponent } from '../bathroom/bathroom.component';


@Component({
  selector: 'app-bedroom',
  standalone: true,
  imports: [BathroomComponent],
  templateUrl: './bedroom.component.html',
  styleUrl: './bedroom.component.css'
})
export class BedroomComponent {

}
