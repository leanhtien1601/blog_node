const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//Router init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
