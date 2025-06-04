import Koa from 'koa';
import Router from 'koa-router';
import { myAI } from './my-ai';
import bodyParser from 'koa-bodyparser';

const app = new Koa();
const router = new Router();

app.use(
  bodyParser({
    enableTypes: ['json'],
  })
);

router.post('/test/testTrimMessages', async (ctx) => {
  ctx.body = await myAI.testTrimMessages();
});

router.post('/test/testFilterMessages', async (ctx) => {
  ctx.body = await myAI.testFilterMessages();
});

router.post('/test/testMergeMessages', async (ctx) => {
  ctx.body = await myAI.testMergeMessages();
});

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = 13000;
app.listen(PORT, () => {
  console.log(`Koa server is running at http://localhost:${PORT}`);
});
