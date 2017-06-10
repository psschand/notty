import { Component, OnInit } from '@angular/core';
import { ElementRef, AfterViewInit, VERSION} from '@angular/core';
declare const gapi: any;
@Component({
  selector: 'app-glog',
  templateUrl: './glog.component.html',
  styleUrls: ['./glog.component.css']
})

export class GlogComponent implements AfterViewInit {

  private clientId:string = '482803721906-av9hu20o9ihtpao9pgk8it3o10ggj6uv.apps.googleusercontent.com';


  private scope = [
    'profile',
    'email',
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/contacts.readonly',
    'https://www.googleapis.com/auth/admin.directory.user.readonly'
  ].join(' ');

  public auth2: any;
  public googleInit() {

    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: this.clientId,
        cookiepolicy: 'single_host_origin',
        scope: this.scope
      });
      this.attachSignin(this.element.nativeElement.firstChild);
    });
  }

  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
      }, function (error) {
        console.log(JSON.stringify(error, undefined, 2));
      });
  }

  constructor(private element: ElementRef) {
    console.log('ElementRef: ', this.element);
  }

  ngAfterViewInit() {
    this.googleInit();
  }

}


