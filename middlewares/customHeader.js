const customHeader = (req, res, next) => {  
    try {
        const apikey = req.headers.api_key; 
        if(apikey === 'leifer-01'){
            next(); 

        } else{
            res.status(403);
            res.send({ error: "API KEY no es correcta" })
        
        }
    } catch (error) {
        res.status(403);
        res.send({ error: "Algo valio verga" })
    }
  
};

module.exports = customHeader;