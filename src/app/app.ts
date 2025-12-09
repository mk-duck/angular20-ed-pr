import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {fetchColors} from '../utils/utils';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular20-ed-pr');
  protected readonly fetchColors = fetchColors;
}
