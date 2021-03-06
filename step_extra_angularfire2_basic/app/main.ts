import {Component, enableProdMode, Inject, provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {FirebaseUrl, FirebaseList, FirebaseObservable} from 'angularfire2';

import Firebase from 'firebase';

enableProdMode();

const rootFirebase = 'https://multi-test.firebaseio.com/';

var ref = new Firebase(rootFirebase);
ref.child('questions').set([{
  question: 'why?'
},{
  question: 'how?'
}]);
@Component({
  template: `
    <h1>Hello</h1>
    <div *ngFor="#question of questions | async">
      {{question.val().question}}
    </div>
  `,
  selector: 'app',
  providers: [FirebaseList('/questions')]
})
class App {
  constructor(@Inject('/questions') public questions:FirebaseObservable<any>) {
  }
}

bootstrap(App, [
  provide(FirebaseUrl, {
    useValue: rootFirebase
  })]);
