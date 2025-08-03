import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-private-layout',
  imports: [RouterModule],
  templateUrl: './private-layout.html',
  styleUrl: './private-layout.scss'
})
export class PrivateLayout {
logout() {
  localStorage.removeItem('token');
  window.location.href = '/login';
}

}
