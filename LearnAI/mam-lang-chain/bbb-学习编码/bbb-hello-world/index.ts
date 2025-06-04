import Koa from 'koa';
import Router from 'koa-router';
import { myAI } from './my-ai';

const app = new Koa();
const router = new Router();

router.get('/', async (ctx: Koa.Context) => {
  ctx.body = await myAI.testLCEL();
});

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = 13000;
app.listen(PORT, () => {
  console.log(`Koa server is running at http://localhost:${PORT}`);
});
