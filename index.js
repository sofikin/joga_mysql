// application packages
const express = require('express')
const app = express()
const path = require('path')

// add template engine
const hbs = require('express-handlebars');
// setup template engine directory and files extensions
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
}))
// setup static public directory
app.use(express.static('public'));

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

const articleRoutes = require('./routes/article'); // import article route

// to use article routes
app.use('/', articleRoutes);
app.use('/article', articleRoutes)

// show a specific author's articles
app.get('/author/:id', (req, res) => {
    let query = `SELECT *, article.name as article_name FROM article inner join author on article.author_id=author.id WHERE author.id="${req.params.id}"`;
    let articles = []
    let author = `select name from author where author.id="${req.params.id}"`;
    con.query(query, (err, result) => {
        if (err) throw err;
        articles = result
        con.query(author, (err, result) => {
            if (err) throw err;
            let authorData = result
            console.log(authorData)
            res.render('author', {
                articles: articles,
                author: authorData
            })
        })
    })
});

// app start point
app.listen(3000, () => {
    console.log('App is started at http://localhost:3000');
});