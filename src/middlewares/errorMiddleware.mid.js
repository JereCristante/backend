function errorHandler(error,req,res,next){
    console.log("Error: " + error)
    return res.json({
        statusCode:500,
        message: "Error de servidor"
    })
}
export default errorHandler