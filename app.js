// Require npm modules and file
const chalk = require('chalk')
const yargs = require('yargs')
const main = require('./main.js')

// Cusomize yargs version.
yargs.version('1.1.0')

// Create post command.
yargs.command({
  command: 'post',
  describe: 'Send post request',
  builder: {
    method: {
      describe: 'method',
      demandOption: true,
      type: 'string'
    },
    url: {
      describe: 'http url',
      demandOption: true,
      type: 'string'
    },
    data: {
      describe: 'data Object',
      demandOption: true,
      type: 'object'
    },
    header: {
      demandOption: true,
      describe: 'Define header of request body',
      default: {}
    }
  },
  // Below function runs on tiggering the command.
  handler: (argv) => {
    console.log(chalk.green('Post request is sent.\n'))
    main.postRequest(argv.url, argv.data, argv.header)
    main.saveRequest({
      method: argv.method,
      url: argv.url
    })
  }
})

// Create put command.
yargs.command({
  command: 'put',
  describe: 'Send put request',
  builder: {
    method: {
      describe: 'method',
      demandOption: true,
      type: 'string'
    },
    url: {
      describe: 'http url',
      demandOption: true,
      type: 'string'
    },
    data: {
      describe: 'data Object',
      demandOption: true,
      type: 'object'
    },
    header: {
      demandOption: true,
      describe: 'Define header of request body',
      default: {}
    }
  },
   // Below function runs on tiggering the command.
  handler: (argv) => {
    console.log(chalk.green('Put request is sent.\n'))
    main.putRequest(argv.url, argv.data, argv.header)
    main.saveRequest({
      method: argv.method,
      url: argv.url
    })
  }
})

// Create get command.
yargs.command({
  command: 'get',
  describe: 'Send get request',
   // Below function runs on tiggering the command.
  builder: {
    method: {
      describe: 'method',
      demandOption: true,
      type: 'string'
    },
    url: {
      describe: 'http url',
      demandOption: true,
      type: 'string'
    },
    header: {
      demandOption: true,
      describe: 'Define header of request body',
      default: {}
    }
  },
  
  handler: (argv) => {
    console.log(chalk.green('Get request is sent.\n'))
    main.getRequest(argv.url, argv.header)
    main.saveRequest({
      method: argv.method,
      url: argv.url
    })
  }
})

// Create patch command.
yargs.command({
  command: 'patch',
  describe: 'Send patch request',
   // Below function runs on tiggering the command.
  builder: {
    method: {
      describe: 'method',
      demandOption: true,
      type: 'string'
    },
    url: {
      describe: 'http url',
      demandOption: true,
      type: 'string'
    },
    data: {
      describe: 'data Object',
      demandOption: true,
      type: 'object'
    },
    header: {
      demandOption: true,
      describe: 'Define header of request body',
      default: {}
    }
  },
  handler: (argv) => {
    console.log(chalk.green('Patch request is sent.\n'))
    main.patchRequest(argv.url, argv.data, argv.header)
    main.saveRequest({
      method: argv.method,
      url: argv.url
    })
  }
})

// Create delete command.
yargs.command({
  command: 'delete',
  describe: 'Send delete request',
  builder: {
    method: {
      describe: 'method',
      demandOption: true,
      type: 'string'
    },
    url: {
      describe: 'http url',
      demandOption: true,
      type: 'string'
    },
    header: {
      demandOption: true,
      describe: 'Define header of request body',
      default: {}
    }
  },
  handler: (argv) => {
    console.log(chalk.green('Delete request is sent.\n'))
    main.deleteRequest(argv.url, argv.header)
    main.saveRequest({
      method: argv.method,
      url: argv.url
    })
  }
})

// Create list-all command.
yargs.command({
  command: 'list-all',
  describe: 'list all requests',
   // Below function runs on tiggering the command.
  handler: () => {
    console.log(chalk.green('All requests are as followed.\n'))
    main.listAllRequest()
  }
})

// Create list command.
yargs.command({
  command: 'list',
  describe: 'list desired request',
   // Below function runs on tiggering the command.
  builder: {
    filter: {
      describe: 'filter out request by method',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    console.log(chalk.green('List desired requests are as followed.\n'))
    main.listRequest(argv.filter.toLowerCase())
  }
})

yargs.parse()

