export default class Authenticaton {
    static validateKey(req, res, next){
        if(req.header('api-key') !== false && 
            req.header('api-key') === process.env.API_KEY){
            next()
        }else{
            console.log(req.headers)
            res.status(403)
        }
    }
}
