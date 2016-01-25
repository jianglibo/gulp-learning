var chai = require('chai');
var gutil = require('gulp-util');
var path = require('path');
var util = require('util');

chai.should();

describe('gulp-util', function() {
  describe('#replaceExtension()', function() {
    it('should work.', function() {
      gutil.replaceExtension('file.coffee', '.js').should.equal("file.js");
    });
  });

  describe('#File()', function() {
    it('should work.', function() {
      var file = new gutil.File({
        base: path.join(__dirname, '../fixtures/'),
        cwd: __dirname,
        path: path.join(__dirname, '../fixtures/test.coffee')
      });
      file.basename.should.equal("test.coffee");
    });
  });
});
