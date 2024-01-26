#!/usr/bin/env node
const arg = require('arg');
const chalk = require('chalk');

try {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean,
    })
    
    if(args['--start']){
        console.log(chalk.bgCyanBright('Starting the app!'));
    }
} catch (error) {
    console.log(chalk.yellow(error.message))
    console.log()
    usage();
}

function usage(){
    console.log(`${chalk.whiteBright('tool [CMD]')}
    ${chalk.greenBright('--start')}\tStart the app
    ${chalk.greenBright('--build')}\tBuild the app
    `)
}