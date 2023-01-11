import * as PostActions from '../actions/post.actions';
import { Post } from '../models/post.model';

export type Action = PostActions.All;

const defaultState: Post = {
  text: 'Hello. I am the default post',
  likes: 0
}

// Hellper function to create new state
const newState = (state: any, newData: any) => {
  return Object.assign({}, state, newData)
}

//Reducer function
export function postReducer(state: Post = defaultState, action: Action): any {
  console.log(action.type, state);

  switch (action.type) {
    case PostActions.EDIT_TEXT:
      return newState(state, { text: action.payload });
    case PostActions.UPVOTE:
      return newState(state, { likes: state.likes + 1 });
    case PostActions.DOWNVOTE:
      return newState(state, { likes: state.likes - 1 });
    case PostActions.RESET:
      return defaultState;
    default:
      return state;
  }
}


// /// Reducer function
// export function postReducer(state: Post = defaultState, action: Action) {
//   console.log(action.type, state)

//   switch (action.type) {
//     case PostActions.EDIT_TEXT:
//       return newState(state, { text: action.payload });

//     case PostActions.UPVOTE:
//       return newState(state, { likes: state.likes + 1 });

//     case PostActions.DOWNVOTE:
//       return newState(state, { likes: state.likes - 1 });

//     case PostActions.RESET:
//       return defaultState;

//     default:
//       return state;

//   }
//}
