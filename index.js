const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')

//引入connect
const { connect, initSchemas } = require('./database/init.js');
//立即执行函数
// (async () => {
//   await connect()
// })();
// //插入一条User数据
(async () => {
  await connect()
  initSchemas()//引入schema的js文件，即创建数据库表
  let router = new Router();
  let user = require('./appApi/user.js')
  router.use('/user', user.routes())
  let goods = require('./appApi/goods.js')
  router.use('/goods', goods.routes())
  app.use(router.routes())
  app.use(router.allowedMethods())
})();

//首先我们要接到前端发过来的请求，这时候需要安装koa-bodyparser中间件
const bodyParser = require('koa-bodyparser')
app.use(bodyParser());
//支持跨域
const cors = require('koa2-cors')
app.use(cors())

app.listen(3000, () => {
  console.log('[Server] starting at port 3000')
})