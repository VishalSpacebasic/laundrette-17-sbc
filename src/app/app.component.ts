import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';
import { AsyncPipe, JsonPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxScannerQrcodeModule,AsyncPipe,JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'laundrette-17-sbc';
}
