const customHeader = (req, res, next) => {  
    try {
        const apikey = req.headers.api_key; 
        if(apikey){
            next(); 

        } else{
            res.status(403);
            res.send({ error: "API KEY no es correcta" })
        
        }
    } catch (error) {
        res.status(403);
        res.send({ error: "Algo valio queso pero no se que" })
    }
  
};

module.exports = customHeader;