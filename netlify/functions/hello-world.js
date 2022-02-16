exports.handler = async function (){
    return {
        statusCode: 200, 
        body: JSON.stringify({
            message: 'Hey sup World?  Are you having a good day?'
        })
    }
}