const handleHttpError = (res, message='Algo exploto', code=403) => {
    res.status(code);
    res.send({ error: message });
};

module.exports = {handleHttpError};