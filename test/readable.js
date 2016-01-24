var Readable = require('stream').Readable;
var chai = require('chai');

chai.should();

describe('Readable', function() {
  describe('#pipe()', function() {
    it('should work.', function() {
      var rs = new Readable();
      rs.push('beep ');
      rs.push('boop\n');
      rs.push(null); // tell  is done outputting data
      rs.pipe(process.stdout);
    });
  });

  describe('#_read()', function() {
    it('should work.', function() {
      var Readable = require('stream').Readable;
      var rs = Readable();

      var c = 97;
      rs._read = function() {
        rs.push(String.fromCharCode(c++));
        if (c > 'z'.charCodeAt(0)) rs.push(null);
      };
      rs.pipe(process.stdout);
    });
  });
});
