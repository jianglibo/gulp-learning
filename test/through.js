var chai = require('chai');
var through = require('through2');
var gulp = require('gulp');
var fs = require('fs');
var stream = require('stream');
chai.should();


describe('through', function() {
  describe('#Example', function() {
    it('ascii pipe', function() {
      fs.createReadStream('fixtures/ex.txt')
        .pipe(through(
          function(chunk, enc, cb) {
            cb(null, chunk);
          }, // transform is a noop
          function(cb) { // flush function
            this.push('tacking on an extra buffer to the end');
            cb();
          }
        ).on('end', function() {
          console.log('end');
          done();
        }))
        .pipe(fs.createWriteStream('out.txt'));
    });
  });

  describe('#stream()', function() {
    it('should work.', function() {
      var st = through.obj(function(file, encoding, callback) {
        console.log(file);
        callback();
        done();
      });
      gulp.src("../fixtures").pipe(st);
    });
  });

  describe('#obj()', function() {
    it('should work.', function() {
      var s = new stream.Readable();
      s._read = function noop() {}; // redundant? see update below
      s.push('your text here');
      s.push(null);
      var st = through(function(file, encoding, callback) {
        callback(null, 'abc');
      });
      s.pipe(st).pipe(fs.createWriteStream('out.txt'));
    });
  });
});
