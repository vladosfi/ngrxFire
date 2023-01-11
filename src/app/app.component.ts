import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from './models/post.model';
import * as PostActions from './actions/post.actions';

interface SimpleAppState {
  message: string;
}

interface AppState {
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fireNgrx';
  text: string = '';

  message$: Observable<string>;
  post$: Observable<Post>;

  constructor(private spimpleStore: Store<SimpleAppState>, private store: Store<AppState>) {
    this.post$ = this.store.select('post');
    this.message$ = this.spimpleStore.select('message');
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }

  reset() {
    this.store.dispatch(new PostActions.Reset());
  }


  spanishMessage() {
    this.spimpleStore.dispatch({ type: 'SPANISH' });
  }

  frenchMessage() {
    this.spimpleStore.dispatch({ type: 'FRENCH' });
  }
}
