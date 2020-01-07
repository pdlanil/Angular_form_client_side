import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';
import { error } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngAll';
  topics = [
    'Angular', 'React', 'View'
  ];
  topicHasError = true;
  userModel = new User('Rob' , 'Rob@gmail.com', 2735232735, 'default' , 'Morning', true);

  constructor (private _enrollmentService: EnrollmentService) {}

  validateTopic(value) {
    if  (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false ;
    }
  }
  onSubmit() {
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('Success!', data) ,
      error => console.error('Error', error)
    )
  }


}
