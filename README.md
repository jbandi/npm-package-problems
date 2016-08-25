This project was created with *create-react-app*:

    npm install -g create-react-app
    
    create-react-app npm-package-problems
    cd my-app/
    npm run eject


Then react-router and history was added:

    npm i -S react-router@1.0.0-rc1
    npm i -S history@1.17.0   

Then the router and history were used in the project in `index.js`.

Finally react-router was upgraded:

    npm i -S react-router@2
     
     
If we build the unminified bundle like this:
 
    npm run build-dev
    
Then we can inspect the included modules in `build/static/js/bundle.js`.

If we search for the string `lib/createHashHistory.js`, we see that this module was included twice in the bundle.
Once as a direct dependency from `index.js` from `history/lib/createHashHistory.js .`
And once as the transitive dependency of react router@2 from `react-router/~/history/lib/createHashHistory.js `

I recognize that the above behavior is technically correct and that it is a strengh of npm+Webpack to be able to include a module several times in different versions.

However I would argue that in most cases the programmer is not aware that a certain module is included several times in different versions and it is not the desired outcome.

I would argue that in most frontend projects a certain library should only be included in a given version.

In the above scenario, most probably the programmer would also like to update to history@2, in which case `lib/createHashHistory.js` would only be included once in the bundle.
But it is not made obvious that the upgrad to react-router@2 should also imply an upgrade to history@2.

As a result we can end up with bloated bundles ... 

How do we deal with this problem?

How do we make sure that modules are only included once in a webpack bundle?

How do we detect/warn the programmer that a module is included twice in a bundle?

I am looking for a way to make it easily visible that this is happening, so that the developer can take steps to optimize the dependencies.

