import React from "react";
import {Route, IndexRoute } from "react-router";
import App from "./components/app.js";
import PostsIndex from "./components/posts_index.js";
import PostsNew from "./components/posts_new.js";
import PostsShow from "./components/posts_show.js";


const Greeting =() => {
	return <div> Hey thesadassre!!!</div>;
};

export default(
	<Route path="/" component={App} >
		<IndexRoute component={PostsIndex} />
		<Route path ="posts/new" component={PostsNew} />
		<Route path="posts/:id" component={PostsShow} />
	</Route>
);

