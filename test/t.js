var through = require('through2');
var fs = require('fs');

fs.createReadStream('fixtures/ex.txt')
  .pipe(through(
    function (chunk, enc, cb) { cb(null, chunk); }, // transform is a noop
    function (cb) { // flush function
      this.push('tacking on an extra buffer to the end');
      cb();
    }
  ))
  .pipe(fs.createWriteStream('out.txt'));
