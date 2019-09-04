import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'code-exercise';

  total: number  = 0;
  theme: string = 'theme-1';
  activeButton: string = '';

  changeTheme(theme: string): void {
    this.theme = theme;
  }

  isButtonActive(keyId: string): boolean {
    return this.activeButton === keyId;
  }

  onButtonMousedown(keyId: string): void {
    this.activeButton = keyId;
  }

  onButtonMouseup(keyId: string): void {
    this.activeButton = '';
    if (keyId === 'equals') {
      this.showResults();
    } else {
      this.readInput(keyId);
    }
  }

  readInput(keyId: string): void {
    console.log(keyId);
  }

  showResults(): void {
    console.log('Total: ' + this.total);
  }
}
