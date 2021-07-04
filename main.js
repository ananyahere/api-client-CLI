// Require npm modules
const chalk = require('chalk')
const fs = require('fs')
const axios = require('axios')
const { inverse } = require('chalk')

const postRequest = (url, data, header) => {
  axios
    .post(url, {
    ...data
  }, {
    headers: {
      ... header
    }
  })
  .then(res => showOutput(res))
  .catch(err => console.log(err))

}
const putRequest = (url, data, header) => {
  axios
    .put(url, data, {
      headers: {
        ... header
      }
    })
  .then( res => showOutput(res))
  .catch( err => console.log(err))

}
const deleteRequest = (url, header) => {
  axios
    .delete(url, {
      headers: {
        ... header
      }
    })
  .then(res => showOutput(res))
  .catch(err => console.log(err))

}
const saveRequest = (requestObj) => {
  //get request Arr
  const requestArr = loadRequests()
  //push request object
  requestArr.push(requestObj)
  //convert updated arr to JSON
  const updatedDataJSON = JSON.stringify(requestArr)
  //write updated request arr to the file
  fs.writeFileSync('request.json', updatedDataJSON)
}
const loadRequests = () => {
  //get request arr (if no request return[])
  try{
    const dataBuffer = fs.readFileSync('request.json')
    const dataJSON = dataBuffer.toString()
    const requestArr = JSON.parse(dataJSON)
    return requestArr
  } catch(e){
    return []
  }
}
const getRequest = (url, header) => {
  axios
    .get(url, {
      headers: {
        ... header
      }
    })
  .then(res => showOutput(res))
  .catch(err => console.log(err))

}
const patchRequest = (url, data, header) => {
  axios
    .patch(url, data, {
      headers: {
        ... header
      }
    })
  .then(res => showOutput(res))
  .catch(err => console.log(err))
}
const listRequest = (method) => {
  const requestArr = loadRequests()
  if(requestArr.length === 0) return console.log(chalk.red('No request have been made yet.'))
  const availableMethods = ['put', 'patch', 'delete', 'get', 'delete', 'post']
  if(!availableMethods.includes(method)) return console.log(chalk.red('Invalid filter!'))
  const desiredRequestArr = requestArr.filter( requestObj => requestObj.method === method)
  desiredRequestArr.forEach(requestObj => console.log(chalk.inverse.bold(requestObj.method.toUpperCase()), '-->', chalk.cyan(requestObj.url), '\n'))
}

const listAllRequest = () => {
  const requestArr = loadRequests()
  if(requestArr.length === 0) return console.log(chalk.red('No request have been made yet.'))
  requestArr.forEach(requestObj => console.log(chalk.inverse.bold(requestObj.method.toUpperCase()), '-->', chalk.cyan(requestObj.url), '\n'))
}

const showOutput = res => {
  console.log(chalk`{green Status}: ${res.status}\n`)
  console.log(chalk.bgGreen("HEADER: "))
  console.log(`${JSON.stringify(res.headers, null, 2)}\n`)
  console.log(chalk.bgYellow.black("DATA: "))
  console.log(`${JSON.stringify(res.data, null, 2)}\n`)
  console.log(chalk.bgCyan("CONFIG: "))
  console.log(`${JSON.stringify(res.config, null, 2)}\n`)
}

module.exports ={
  postRequest: postRequest,
  putRequest : putRequest,
  deleteRequest : deleteRequest,
  getRequest : getRequest,
  patchRequest : patchRequest,
  saveRequest: saveRequest,
  listRequest: listRequest,
  listAllRequest: listAllRequest
}