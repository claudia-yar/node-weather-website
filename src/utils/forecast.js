const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=938c60939c4fb5c4da13ae4593623882&query=' + latitude + ',' + longitude + '&units=f'
    
    request({ url, json: true }, (error, { body }) => { 
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The sky is covered with clouds in ' + body.current.cloudcover + '%.')
            }
        }
    )
}

module.exports = forecast