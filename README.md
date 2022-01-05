# BUILD-TOOLS-BUCHELI-COURSE-DEFINING-ENTRY-AND-EXIT-POINTS

So far, we have used Webpack’s default entry point of ./src/index.js. However, it is common for projects to have the main file stored under a different folder or a different name.

Let’s say that we wanted to write our main application code in application/home.js. We can tell Webpack that this is the main file and that it should start bundling here by 
defining an entry point in the config file’s JSON object at the same level as mode or module:

```
entry: './application/home.js'
```

The entry point allows us to define a path relative to where our webpack.config.js is located.

We may also want to set the name of the output file or its directory. Let’s say we want our processed JavaScript file to be in the built directory, and to be called fast.js. We can
accomplish this by defining an exit point.

Unlike the entry point, the exit point requires an absolute path, which is best specified with the path Node module. We set the exit point under the output configuration option
like so:

```
const path = require('path');
 
module.exports = {
  entry: './application/home.js',
  output: {
    filename: 'fast.js',
    path: path.resolve(__dirname, 'built'),
  },
  // ...
}
```

The name of the bundled JavaScript file is specified with filename, and its directory with path. The path.resolve() method combines the path to the current directory with the 
folder name we want to place the bundled code in.

Given the configuration above, running Webpack would produce a built/fast.js.

* npm install --save-dev webpack webpack-cli
* npm run build
