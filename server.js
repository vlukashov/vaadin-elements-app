const express = require('express');
const app = express();
const port = 8090;

['es5-bundled', 'es6-bundled', 'es6-unbundled'].forEach(build => {
  app.get(`/${build}/((employee-list)|(employee-sales)|(employee-new)|(employee/deep))`,
    (req, res) => res.sendFile('index.html', {root: `./build/${build}`}));
  app.use(`/${build}`, express.static(__dirname + `/build/${build}`));
});

app.listen(port, () => console.log(`The app is listening on port ${port}!`));