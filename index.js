const jsonserver = require("json-server")
const MpServer = jsonserver.create()

const middleware = jsonserver.defaults()
const PORT =3000

const route = jsonserver.router('db.json')

MpServer.use(middleware)
MpServer.use(route)
MpServer.listen(PORT,()=>{
    console.log(`MPserver started running at port :${PORT} and its waiting for client request`);
    
})