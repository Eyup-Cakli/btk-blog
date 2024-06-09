import { Component, OnInit, ElementRef } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router,) {

  }

  ngOnInit() {
  }

  applyFilter(title: any) {
  }

  goToProfile(){
    this.router.navigateByUrl('profile');
  }

  goToHome(){
    this.router.navigateByUrl('home')
  }

  goToSettings(){
    this.router.navigateByUrl('settings')
  }

  logout(){
    this.router.navigateByUrl('');
  }
}
