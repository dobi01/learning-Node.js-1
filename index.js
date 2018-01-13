var OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');
console.log('Options:\n1 - exit\n2 - sayhello\n3 - getOSinfo');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        console.log('\n');
        var instruction = input.trim();
        switch(instruction) {
            case '1':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '2':
                process.stdout.write('Hello!\n');
                break;
            case '3':
                OSinfo.print();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});
