import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/core/enums/theme';
import { LocalStorageService } from 'src/app/core/services/localStorage.service';

const darkMode = "dark_mode";
const lightMode = "light_mode";

@Component({
  selector: 'app-theme-settings',
  templateUrl: './theme-settings.component.html',
  styleUrls: ['./theme-settings.component.scss']
})
export class ThemeSettingsComponent implements OnInit {

  mode !: string; 

  constructor(private localStorageService: LocalStorageService) {
  }

  ngOnInit() {
    let theme: string = <string> this.localStorageService.getTheme();
    this.mode = theme == Theme.LIGHT ? lightMode : darkMode;
  }

  switchTheme(): void {
    let isDark: boolean = document.body.classList.toggle("dark-theme");
    if (isDark) {
      this.mode = darkMode;
      this.localStorageService.setTheme(Theme.DARK);
    }
    else {
      this.mode = lightMode;
      this.localStorageService.setTheme(Theme.LIGHT);
    }
  }
}