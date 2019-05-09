const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const exphbs = require('express-handlebars');
const jsonXml = require('jsontoxml');
const bpars = require('body-parser');
const PORT = process.env.PORT || 80;
const prochelp = require('./manager/main_process');//MAN
prochelp.start();
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
            response.status(404);
            response.render(__dirname + '/pages/dne.handlebars', {id: ido});
        } else {
            const message = prochelp.read(request.params.id, "message");
            const title = prochelp.read(request.params.id, "title");
            response.render(__dirname + '/pages/show.handlebars', { title: "TextUrl", id: ido, usermess: message, userdeft: title });
        }
    });
    app.get('/userdef/raw/:id', (request, response) => {
        const ido = parseInt(request.params.id, 10);
        const all = prochelp.becomenum(ido);
        if (all == undefined || all == null) {
            const raw = { title: "404", message: `Can't find ${ido}` }
            const failue = raw;
            response.status(404);
            response.send(failue);
        } else {
            const message = prochelp.read(request.params.id, "message");
            const title = prochelp.read(request.params.id, "title");
            const raw = {title: title, message: message}
            response.send(raw);
        }
    });
app.get('/userdef/rawml/:id', (request, response) => {
    const ido = parseInt(request.params.id, 10);
    const all = prochelp.becomenum(ido);
    if (all == undefined || all == null) {
        const raw = { title: "404", message: `Can't find ${ido}` }
        const failue = jsonXml(raw);
        response.status(404);
        response.send(failue);
    } else {
        const message = prochelp.read(request.params.id, "message");
        const title = prochelp.read(request.params.id, "title");
        const raw = { title: title, message: message }
        response.send(jsonXml(raw));
    }
});
app.get('/apidoc/:id', (request, response) => {
    const ido = parseInt(request.params.id, 10);
     const share = request.headers.host;
        const prot = request.protocol;
        response.render(__dirname + '/pages/api.handlebars', { ids: ido, id: ido, hostn: share, prt: prot });
});
app.get('/apidoc/', (request, response) => {
    const urlenc = request.path;//                                                       |
    response.status(404);//                                                              |
    response.render(__dirname + '/pages/404.handlebars', { mode: "get", url: urlenc });//404
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
        response.status(404);
        response.render(__dirname + '/pages/dne.handlebars', { id: ido });
    } else {
        prochelp.serdelete(ido);
        response.status(307);
        response.redirect('/#deleted id ' + request.params.id);
    }
});
    app.post('/new', (request, response) => {//ADD
        const now = new Date().getTime();
        const mess = request.body.title.replace(" ", "");
        if (mess.length !== 0) {
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
app.post('/new/raw', (request, response) => {//ADD
    const now = new Date().getTime();
        const data = {
            title: request.body.title,
            message: request.body.message,
            timestamp: now
        };
        const ids = prochelp.save(data).toString();;
        response.send(ids);
    
});
const repos = prochelp.rep();
app.get('/github', (request, response) => {
    response.status(307);
    response.redirect(repos.github);
});
app.get('/bit', (request, response) => {
    response.status(307);
    response.redirect(repos.bitbucket);
});
app.get('/npm', (request, response) => {
    response.status(307);
    response.redirect(repos.npm);
});app.get('/docker', (request, response) => {
    response.status(307);
    response.redirect(repos.docker);
});app.get('/chat', (request, response) => {
    response.status(307);
    response.redirect(repos.chat);
}); app.get('/gitlab', (request, response) => {
    response.status(307);
    response.redirect(repos.gitlab);
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
    }); app.delete('/*', (request, response) => {//                                            ^
        const urlenc = request.path;//                                                       |
        response.status(404);//                                                              |
        response.render(__dirname + '/pages/404.handlebars', { mode: "delete", url: urlenc });//404
    }); app.put('/*', (request, response) => {//                                            ^
        const urlenc = request.path;//                                                       |
        response.status(404);//                                                              |
        response.render(__dirname + '/pages/404.handlebars', { mode: "put", url: urlenc });//404
    }); app.copy('/*', (request, response) => {//                                            ^
        const urlenc = request.path;//                                                       |
        response.status(404);//                                                              |
        response.render(__dirname + '/pages/404.handlebars', { mode: "copy", url: urlenc });//404
    });
app.listen(PORT, () => {
    console.log("SERVER ONLINE ON http://localhost:" + PORT + "/");
});