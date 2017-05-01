import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
  	firebase.initializeApp({
  		apiKey: "AIzaSyBpThE9plwt0FYapND65_SELrR9Suqj9bo",
  		authDomain: "ng-recipe-book-ec880.firebaseapp.com",
  	});
  }

  onNavigate(feature: string) {
  	this.loadedFeature = feature;
  }
}
