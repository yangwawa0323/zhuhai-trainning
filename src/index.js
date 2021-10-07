import chalk from 'chalk';


const cpu = { totoalPercent:20 }
const ram = { used: 1700 , total: 160000 }
const disk = { used: 5900, total: 19384 }

function add() {
    console.log(chalk.blue('Hello'));
    console.log("Hey");
	log(chalk`
	CPU: {red ${cpu.totalPercent}%}
	RAM: {green ${ram.used / ram.total * 100}%}
	DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}
	`);
}

add()
