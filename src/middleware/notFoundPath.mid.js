function notFoundPath(req,res,next){
    return res.json({
        statusCode:404,
        message: "Ruta inexistente"
    })
}
export default notFoundPath