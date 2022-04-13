/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.proto = require('./mainv3_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.RacoonGameClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.RacoonGamePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.PlayRequest,
 *   !proto.proto.MatchSetup>}
 */
const methodDescriptor_RacoonGame_SearchGame = new grpc.web.MethodDescriptor(
  '/proto.RacoonGame/SearchGame',
  grpc.web.MethodType.UNARY,
  proto.proto.PlayRequest,
  proto.proto.MatchSetup,
  /**
   * @param {!proto.proto.PlayRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.MatchSetup.deserializeBinary
);


/**
 * @param {!proto.proto.PlayRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.MatchSetup)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.MatchSetup>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.RacoonGameClient.prototype.searchGame =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.RacoonGame/SearchGame',
      request,
      metadata || {},
      methodDescriptor_RacoonGame_SearchGame,
      callback);
};


/**
 * @param {!proto.proto.PlayRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.MatchSetup>}
 *     Promise that resolves to the response
 */
proto.proto.RacoonGamePromiseClient.prototype.searchGame =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.RacoonGame/SearchGame',
      request,
      metadata || {},
      methodDescriptor_RacoonGame_SearchGame);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.StartGame,
 *   !proto.proto.RoundStart>}
 */
const methodDescriptor_RacoonGame_StartRound = new grpc.web.MethodDescriptor(
  '/proto.RacoonGame/StartRound',
  grpc.web.MethodType.UNARY,
  proto.proto.StartGame,
  proto.proto.RoundStart,
  /**
   * @param {!proto.proto.StartGame} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.RoundStart.deserializeBinary
);


/**
 * @param {!proto.proto.StartGame} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.RoundStart)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.RoundStart>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.RacoonGameClient.prototype.startRound =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.RacoonGame/StartRound',
      request,
      metadata || {},
      methodDescriptor_RacoonGame_StartRound,
      callback);
};


/**
 * @param {!proto.proto.StartGame} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.RoundStart>}
 *     Promise that resolves to the response
 */
proto.proto.RacoonGamePromiseClient.prototype.startRound =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.RacoonGame/StartRound',
      request,
      metadata || {},
      methodDescriptor_RacoonGame_StartRound);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.AbortGame,
 *   !proto.proto.RoundOver>}
 */
const methodDescriptor_RacoonGame_AbortRound = new grpc.web.MethodDescriptor(
  '/proto.RacoonGame/AbortRound',
  grpc.web.MethodType.UNARY,
  proto.proto.AbortGame,
  proto.proto.RoundOver,
  /**
   * @param {!proto.proto.AbortGame} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.RoundOver.deserializeBinary
);


/**
 * @param {!proto.proto.AbortGame} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.RoundOver)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.RoundOver>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.RacoonGameClient.prototype.abortRound =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.RacoonGame/AbortRound',
      request,
      metadata || {},
      methodDescriptor_RacoonGame_AbortRound,
      callback);
};


/**
 * @param {!proto.proto.AbortGame} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.RoundOver>}
 *     Promise that resolves to the response
 */
proto.proto.RacoonGamePromiseClient.prototype.abortRound =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.RacoonGame/AbortRound',
      request,
      metadata || {},
      methodDescriptor_RacoonGame_AbortRound);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.Move,
 *   !proto.proto.RoundUpdate>}
 */
const methodDescriptor_RacoonGame_MakeMove = new grpc.web.MethodDescriptor(
  '/proto.RacoonGame/MakeMove',
  grpc.web.MethodType.UNARY,
  proto.proto.Move,
  proto.proto.RoundUpdate,
  /**
   * @param {!proto.proto.Move} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.RoundUpdate.deserializeBinary
);


/**
 * @param {!proto.proto.Move} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.RoundUpdate)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.RoundUpdate>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.RacoonGameClient.prototype.makeMove =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.RacoonGame/MakeMove',
      request,
      metadata || {},
      methodDescriptor_RacoonGame_MakeMove,
      callback);
};


/**
 * @param {!proto.proto.Move} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.RoundUpdate>}
 *     Promise that resolves to the response
 */
proto.proto.RacoonGamePromiseClient.prototype.makeMove =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.RacoonGame/MakeMove',
      request,
      metadata || {},
      methodDescriptor_RacoonGame_MakeMove);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.WaitUpdate,
 *   !proto.proto.RoundUpdate>}
 */
const methodDescriptor_RacoonGame_WaitForUpdates = new grpc.web.MethodDescriptor(
  '/proto.RacoonGame/WaitForUpdates',
  grpc.web.MethodType.UNARY,
  proto.proto.WaitUpdate,
  proto.proto.RoundUpdate,
  /**
   * @param {!proto.proto.WaitUpdate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.RoundUpdate.deserializeBinary
);


/**
 * @param {!proto.proto.WaitUpdate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.RoundUpdate)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.RoundUpdate>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.RacoonGameClient.prototype.waitForUpdates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.RacoonGame/WaitForUpdates',
      request,
      metadata || {},
      methodDescriptor_RacoonGame_WaitForUpdates,
      callback);
};


/**
 * @param {!proto.proto.WaitUpdate} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.RoundUpdate>}
 *     Promise that resolves to the response
 */
proto.proto.RacoonGamePromiseClient.prototype.waitForUpdates =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.RacoonGame/WaitForUpdates',
      request,
      metadata || {},
      methodDescriptor_RacoonGame_WaitForUpdates);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.Recover,
 *   !proto.proto.RecoverResponse>}
 */
const methodDescriptor_RacoonGame_RecoverMatch = new grpc.web.MethodDescriptor(
  '/proto.RacoonGame/RecoverMatch',
  grpc.web.MethodType.UNARY,
  proto.proto.Recover,
  proto.proto.RecoverResponse,
  /**
   * @param {!proto.proto.Recover} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.RecoverResponse.deserializeBinary
);


/**
 * @param {!proto.proto.Recover} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.RecoverResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.RecoverResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.RacoonGameClient.prototype.recoverMatch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.RacoonGame/RecoverMatch',
      request,
      metadata || {},
      methodDescriptor_RacoonGame_RecoverMatch,
      callback);
};


/**
 * @param {!proto.proto.Recover} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.RecoverResponse>}
 *     Promise that resolves to the response
 */
proto.proto.RacoonGamePromiseClient.prototype.recoverMatch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.RacoonGame/RecoverMatch',
      request,
      metadata || {},
      methodDescriptor_RacoonGame_RecoverMatch);
};


module.exports = proto.proto;

