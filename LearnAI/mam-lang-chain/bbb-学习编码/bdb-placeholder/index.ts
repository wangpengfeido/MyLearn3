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

router.post('/test/conversation', async (ctx) => {
  ctx.body = await myAI.conversation(
    ctx.request.body as { conversationId: string; message: string }
  );
});

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = 13000;
app.listen(PORT, () => {
  console.log(`Koa server is running at http://localhost:${PORT}`);
});
