const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const exphbs = require('express-handlebars');
const bpars = require('body-parser');
const prochelp = require('./manager/main_process');//MAN
const app = express();
    app.use(helmet());
    app.use(bpars.urlencoded({ extended: false }));
    app.engine('handlebars', exphbs());
    app.use(morgan('common', { immediate: true }));
    app.set('view engine', 'handlebars');
    // **********************************
    app.get('/', (request, response) => {
        //MAIN
        response.render(__dirname + '/pages/form.handlebars', { title: "TextUrl" });
    });
    app.get('/userdef/:id', (request, response) => {
        const ido = parseInt(request.params.id, 10);
        const all = prochelp.becomenum(ido);
        if (all == undefined || all == null) {
            response.redirect('/404/' + request.params.id);
        } else {
            const message = prochelp.read(request.params.id, "message");
            const title = prochelp.read(request.params.id, "title");
            response.render(__dirname + '/pages/show.handlebars', { title: "TextUrl", id: ido, usermess: message, userdeft: title });
        }
    });
    app.get('/404/:id', (request, response) => {
        const ido = parseInt(request.params.id, 10);
        response.status(404);
        response.render(__dirname + '/pages/dne.handlebars', {id: ido});
});
app.post('/get', (request, response) => {
    const mess = request.body.id;
    if (mess.length != 0) {
    response.status(307);
        response.redirect('/userdef/' + request.body.id);
    } else {
        response.status(403);
        response.redirect('/');
    }
});
app.get('/get/:id', (request, response) => {
    response.status(307);
    response.redirect('/userdef/' + request.params.id);
});
app.get('/delete/:id', (request, response) => {
    const ido = parseInt(request.params.id, 10);
    const all = prochelp.becomenum(ido);
    if (all == undefined || all == null) {
        response.redirect('/404/' + request.params.id);
    } else {
        prochelp.serdelete(ido);
        response.status(307);
        response.redirect('/#deleted id' + request.params.id);
    }
});
    app.post('/new', (request, response) => {//ADD
        const now = new Date().getTime();
        const mess = request.body.title.replace(" ", "");
        if (mess.length != 0) {
            const data = {
                title: request.body.title,
                message: request.body.message,
                timestamp: now
            };
            const ids = prochelp.save(data);
            const share = request.headers.host;
            const prot = request.protocol;
            response.render(__dirname + '/pages/data.handlebars', { title: "TextUrl", id: ids, hostn: share, prt: prot});
        } else {
            response.status(403);
            response.redirect('/');
        }
  });
    app.use(express.static(__dirname + '/content')); //STATIC
    app.get('/*', (request, response) => {//                                                 ^
        const urlenc = request.path;//                                                       |
        response.status(404);//                                                              |
        response.render(__dirname + '/pages/404.handlebars', { mode: "get", url: urlenc });//404
    }); app.post('/*', (request, response) => {//                                            ^
        const urlenc = request.path;//                                                       |
        response.status(404);//                                                              |
        response.render(__dirname + '/pages/404.handlebars', { mode: "post", url: urlenc });//404
    });
    app.listen(3000, () => {
        console.log("SERVER ONLINE ON http://localhost:3000/");
    });