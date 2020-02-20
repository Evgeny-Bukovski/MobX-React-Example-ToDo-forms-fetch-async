const Koa = require('koa');
const path = require('path');
const fs = require('fs');

const app = new Koa();
const port = 3000;


app.use(async (ctx, next) => {
    await next();

    const url = ctx.request.url === '/' ? '/index.html' : ctx.request.url;
    let file;

    try {
        file = fs.readFileSync(path.resolve(path.join('build', url)), 'utf8');
    } catch {
        file = fs.readFileSync(path.resolve(path.join('build', '/index.html')), 'utf8');
    }
    ctx.response.body = file;
});

app.listen(port);
console.log(`App started http://localhost:${port}/`);