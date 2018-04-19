 import { Component,  OnInit} from '@angular/core';
 import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
	loadedFeature = 'recipe';

	ngOnInit(){
		firebase.initializeApp({
			apiKey: "AIzaSyAI0-H_gWaC6YZTVfGEHW9jYJ_rhlG_H6s",
    		authDomain: "ng-recipe-book-d8bb5.firebaseapp.com",
		});
	}

	onNavigate(feature: string){
		this.loadedFeature = feature;
	}
}
