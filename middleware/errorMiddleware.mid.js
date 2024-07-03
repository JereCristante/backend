function errorHandler(error,req,res,next){
    return res.json({
        statusCode:500,
        message: "Error de servidor"
    })
}
export default errorHandler