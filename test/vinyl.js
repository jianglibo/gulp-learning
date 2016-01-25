var vfs = require('vinyl-fs');
var through = require('through2');
var map = require('map-stream');

var log = function(file, cb) {
  console.log(file.path);
  cb(null, file);
};

// {objectMode: true/*, allowHalfOpen : false  other options... */},
describe('Vinyl', function() {
  describe('#src()', function() {
    it('should work.', function() {
      vfs.src(["./*.js"]) //.pipe(map(log)) //相对于cwd目录，而不是此文件的目录。
        .pipe(through.obj(function(file, encode, cb) {
          console.log(file.path);
          cb(null, file);
        }))
        .pipe(through.obj(function(f, e, c) {
          console.log(f.path);
          c(null, f);
        }))
        .pipe(vfs.dest("./fixtures_out"));
    });
  });
});
