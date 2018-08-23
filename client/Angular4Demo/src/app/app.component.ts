import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  searchTerm = '';
  isCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit(){

    if(localStorage.getItem('token')){
      this.router.navigate(['']);
    }
    else{
      this.router.navigate(['/login']);
    }

  }

  get token() {
    return localStorage.getItem('token');
  }

  collapse() {
    this.isCollapsed = true;
  }

  closeDropdown(dropdown) {
    dropdown.close();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  search() {}
}
