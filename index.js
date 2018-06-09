const Koa = require('koa');
const app = new Koa();

app.use(async(ctx)=>{
    if(ctx.method === "GET"){
        //get请求
        //获取请求的上下文对象
        let url = ctx.url;  //路由
        let req_query = ctx.query;  //格式化参数
        let req_querystring = ctx.querystring;  //字符串参数
        //返回到页面
        ctx.body = `
            <h3>请填写表单</h3>
            <form action="/" method="post">
                <p>姓名：</p>
                <input type="text" />
                <p>密码：</p>
                <input type="password" />
                <p> </p>
                <button type="submit">确定</button>
            </form>
        `;
    }else if(ctx.method === "POST"){
        //post请求
        ctx.body="接收到POST参数";
    }
});

app.listen(3000,function(){
    console.log('app is started at 3000');
});
