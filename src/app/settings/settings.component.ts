import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavbarComponent } from "../components/navbar/navbar.component";

@Component({
    selector: 'app-settings',
    standalone: true,
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.scss',
    imports: [MatFormFieldModule, MatSlideToggleModule, NavbarComponent]
})
export class SettingsComponent {

}
