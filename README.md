This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Commands

In the project directory, you can run:

### `npm install`
Installs dependencies.

### `npm start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed! See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Adding posts
The Blog component contains BlogPost components. Add the html for a new post in a new file that is copied from the `blog-post-contents/post-template.js`.

Rename the intro and content constants accordingly and make sure they are exported with the correct names.

In the Blog component import both constants similarly:
`import {postIntro, postContent} from './blog-post-contents/blog-post.js';`

Add a new instance of BlogPost to the Blog component, with the titlet, date, intro and post content.