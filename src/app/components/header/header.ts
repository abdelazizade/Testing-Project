import { Component, inject, NgZone } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private ngZone = inject(NgZone);
  hallo = 'Hello';

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        console.log('runOutsideAngular');
        this.hallo = 'Welcome';
      }, 30);
    });
  }
}
