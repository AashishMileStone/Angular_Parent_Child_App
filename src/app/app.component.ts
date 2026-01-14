import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { CheckBioComponent } from './check-bio/check-bio.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent, CheckBioComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularApp';

  
  user = {"name": "Admin", "isAdmin": false}
  isValid = false;
  admin(){
    this.user.isAdmin = true;
    this.isValid = true;
  }
  userLog(){
    this.user.isAdmin = false;
    this.isValid = true;
  }
}
