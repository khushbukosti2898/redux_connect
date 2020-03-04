import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import store from "./store";
import { Provider } from "react-redux";
import Addition from './Components/addition';
import PostForm from './Components/PostForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllPost from './Components/AllPost';


const globalStore = store({});

ReactDOM.render(<Provider store={globalStore}>
<App />
<Addition/>
<PostForm/>
<AllPost/>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
