import { Component } from '@angular/core';
import { SideMenuHeaderComponent } from "./side-menu-header/side-menu-header.component";
import { SideMenuOptionsComponent } from "./side-menu-options/side-menu-options.component";

interface MenuOption{
  icon: string;
  label: string;
  router: string;
  sublabel: string;
}

@Component({
  selector: 'gifs-side-menu',
  imports: [SideMenuHeaderComponent, SideMenuOptionsComponent],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent { }
