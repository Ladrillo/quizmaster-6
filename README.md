Hey Jason,

Jeremy tells me to send you some boilerplate for a Node/Angular/Webpack app.

This is configured in the following way:
    * Webpack will spit out separate JavaScript and CSS bundles
    * separate configurations for developments and production
    * linting with JSHint (ES5 only)
    * works with ES6 and JSX syntax, but then you have to use .es6 and .jsx extensions
    * strips out console.logs when in production
    * makes jQuery available globally
    * nodemon runs webpack-dev-server, no need to run Node and Webpack separately
    * server is restarted and bundle recreated whenever you make changes
    
In order to make it run:
    * npm install
    * install webpack and nodemon globally
    * run nodemon
    * server will crash if you hit the 'Sign in with your Google Account' link
    
In order to make authentication work:
    * fill in your MongoLab URI in core/server/config/env
    * fill in your Google strategy configuration in core/server/config/env
    * uncomment in core/server/config/express.js: // require('./passport.js')(app); 
    * uncomment in server.js: // var db = mongoose();
    
Let me know if you have any questions!!

gabe