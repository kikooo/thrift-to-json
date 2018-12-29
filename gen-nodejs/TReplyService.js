//
// Autogenerated by Thrift Compiler (0.11.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = require('./reply_types');
//HELPER FUNCTIONS AND STRUCTURES

var TReplyService_replyHello_args = function(args) {
  this.arg0 = null;
  if (args) {
    if (args.arg0 !== undefined && args.arg0 !== null) {
      this.arg0 = new ttypes.TSayHelloRequest(args.arg0);
    }
  }
};
TReplyService_replyHello_args.prototype = {};
TReplyService_replyHello_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.arg0 = new ttypes.TSayHelloRequest();
        this.arg0.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TReplyService_replyHello_args.prototype.write = function(output) {
  output.writeStructBegin('TReplyService_replyHello_args');
  if (this.arg0 !== null && this.arg0 !== undefined) {
    output.writeFieldBegin('arg0', Thrift.Type.STRUCT, 1);
    this.arg0.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var TReplyService_replyHello_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.TSayHelloResponse(args.success);
    }
  }
};
TReplyService_replyHello_result.prototype = {};
TReplyService_replyHello_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.TSayHelloResponse();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TReplyService_replyHello_result.prototype.write = function(output) {
  output.writeStructBegin('TReplyService_replyHello_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var TReplyServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
TReplyServiceClient.prototype = {};
TReplyServiceClient.prototype.seqid = function() { return this._seqid; };
TReplyServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };
TReplyServiceClient.prototype.replyHello = function(arg0, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_replyHello(arg0);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_replyHello(arg0);
  }
};

TReplyServiceClient.prototype.send_replyHello = function(arg0) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('replyHello', Thrift.MessageType.CALL, this.seqid());
  var params = {
    arg0: arg0
  };
  var args = new TReplyService_replyHello_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

TReplyServiceClient.prototype.recv_replyHello = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new TReplyService_replyHello_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('replyHello failed: unknown result');
};
var TReplyServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
TReplyServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}
;
TReplyServiceProcessor.prototype.process_replyHello = function(seqid, input, output) {
  var args = new TReplyService_replyHello_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.replyHello.length === 1) {
    Q.fcall(this._handler.replyHello.bind(this._handler), args.arg0)
      .then(function(result) {
        var result_obj = new TReplyService_replyHello_result({success: result});
        output.writeMessageBegin("replyHello", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("replyHello", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.replyHello(args.arg0, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new TReplyService_replyHello_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("replyHello", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("replyHello", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
