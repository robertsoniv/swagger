/**
 * @fileoverview AUTOMATICALLY GENERATED service for API.Client.UserApi.
 * Do not edit this file by hand or your changes will be lost next time it is
 * generated.
 *
 * A full ecommerce backend as a service.
 * Version: 0.1
 * Generated at: 2016-07-26T21:58:06.393Z
 * Generated by: class io.swagger.codegen.languages.JavascriptClosureAngularClientCodegen
 */
goog.provide('API.Client.UserApi');

goog.require('API.Client.ImpersonateTokenRequest');
goog.require('API.Client.User');

/**
 * @constructor
 * @param {!angular.$http} $http
 * @param {!Object} $httpParamSerializer
 * @param {!angular.$injector} $injector
 * @struct
 */
API.Client.UserApi = function($http, $httpParamSerializer, $injector) {
  /** @private {!string} */
  this.basePath_ = $injector.has('UserApiBasePath') ?
                   /** @type {!string} */ ($injector.get('UserApiBasePath')) :
                   'https://api.ordercloud.io/v1';

  /** @private {!Object<string, string>} */
  this.defaultHeaders_ = $injector.has('UserApiDefaultHeaders') ?
                   /** @type {!Object<string, string>} */ (
                       $injector.get('UserApiDefaultHeaders')) :
                   {};

  /** @private {!angular.$http} */
  this.http_ = $http;

  /** @package {!Object} */
  this.httpParamSerializer = $injector.get('$httpParamSerializer');
}
API.Client.UserApi.$inject = ['$http', '$httpParamSerializer', '$injector'];

/**
 * 
 * 
 * @param {!string} buyerID ID of the buyer.
 * @param {!User} user 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.UserApi.prototype.create = function(buyerID, user, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/buyers/{buyerID}/users'
      .replace('{' + 'buyerID' + '}', String(buyerID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'buyerID' is set
  if (!buyerID) {
    throw new Error('Missing required parameter buyerID when calling create');
  }
  // verify required parameter 'user' is set
  if (!user) {
    throw new Error('Missing required parameter user when calling create');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: user,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!string} buyerID ID of the buyer.
 * @param {!string} userID ID of the user.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.UserApi.prototype.delete = function(buyerID, userID, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/buyers/{buyerID}/users/{userID}'
      .replace('{' + 'buyerID' + '}', String(buyerID))
      .replace('{' + 'userID' + '}', String(userID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'buyerID' is set
  if (!buyerID) {
    throw new Error('Missing required parameter buyerID when calling delete');
  }
  // verify required parameter 'userID' is set
  if (!userID) {
    throw new Error('Missing required parameter userID when calling delete');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'DELETE',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!string} buyerID ID of the buyer.
 * @param {!string} userID ID of the user.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.UserApi.prototype.get = function(buyerID, userID, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/buyers/{buyerID}/users/{userID}'
      .replace('{' + 'buyerID' + '}', String(buyerID))
      .replace('{' + 'userID' + '}', String(userID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'buyerID' is set
  if (!buyerID) {
    throw new Error('Missing required parameter buyerID when calling get');
  }
  // verify required parameter 'userID' is set
  if (!userID) {
    throw new Error('Missing required parameter userID when calling get');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!string} buyerID ID of the buyer.
 * @param {!string} userID ID of the user.
 * @param {!ImpersonateTokenRequest} tokenRequest 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.UserApi.prototype.getAccessToken = function(buyerID, userID, tokenRequest, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/buyers/{buyerID}/users/{userID}/accesstoken'
      .replace('{' + 'buyerID' + '}', String(buyerID))
      .replace('{' + 'userID' + '}', String(userID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'buyerID' is set
  if (!buyerID) {
    throw new Error('Missing required parameter buyerID when calling getAccessToken');
  }
  // verify required parameter 'userID' is set
  if (!userID) {
    throw new Error('Missing required parameter userID when calling getAccessToken');
  }
  // verify required parameter 'tokenRequest' is set
  if (!tokenRequest) {
    throw new Error('Missing required parameter tokenRequest when calling getAccessToken');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: tokenRequest,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!string} buyerID ID of the buyer.
 * @param {!string=} opt_userGroupID ID of the user group.
 * @param {!string=} opt_search Word or phrase to search for.
 * @param {!string=} opt_searchOn Comma-delimited list of fields to search on.
 * @param {!string=} opt_sortBy Comma-delimited list of fields to sort by.
 * @param {!number=} opt_page Page of results to return. Default: 1
 * @param {!number=} opt_pageSize Number of results to return per page. Default: 20, max: 100.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.UserApi.prototype.list = function(buyerID, opt_userGroupID, opt_search, opt_searchOn, opt_sortBy, opt_page, opt_pageSize, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/buyers/{buyerID}/users'
      .replace('{' + 'buyerID' + '}', String(buyerID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'buyerID' is set
  if (!buyerID) {
    throw new Error('Missing required parameter buyerID when calling list');
  }
  if (opt_userGroupID !== undefined) {
    queryParameters['userGroupID'] = opt_userGroupID;
  }

  if (opt_search !== undefined) {
    queryParameters['search'] = opt_search;
  }

  if (opt_searchOn !== undefined) {
    queryParameters['searchOn'] = opt_searchOn;
  }

  if (opt_sortBy !== undefined) {
    queryParameters['sortBy'] = opt_sortBy;
  }

  if (opt_page !== undefined) {
    queryParameters['page'] = opt_page;
  }

  if (opt_pageSize !== undefined) {
    queryParameters['pageSize'] = opt_pageSize;
  }

  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!string} buyerID ID of the buyer.
 * @param {!string} userID ID of the user.
 * @param {!User} user 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.UserApi.prototype.patch = function(buyerID, userID, user, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/buyers/{buyerID}/users/{userID}'
      .replace('{' + 'buyerID' + '}', String(buyerID))
      .replace('{' + 'userID' + '}', String(userID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'buyerID' is set
  if (!buyerID) {
    throw new Error('Missing required parameter buyerID when calling patch');
  }
  // verify required parameter 'userID' is set
  if (!userID) {
    throw new Error('Missing required parameter userID when calling patch');
  }
  // verify required parameter 'user' is set
  if (!user) {
    throw new Error('Missing required parameter user when calling patch');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PATCH',
    url: path,
    json: true,
    data: user,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!string} buyerID ID of the buyer.
 * @param {!string} userID ID of the user.
 * @param {!User} user 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.UserApi.prototype.update = function(buyerID, userID, user, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/buyers/{buyerID}/users/{userID}'
      .replace('{' + 'buyerID' + '}', String(buyerID))
      .replace('{' + 'userID' + '}', String(userID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'buyerID' is set
  if (!buyerID) {
    throw new Error('Missing required parameter buyerID when calling update');
  }
  // verify required parameter 'userID' is set
  if (!userID) {
    throw new Error('Missing required parameter userID when calling update');
  }
  // verify required parameter 'user' is set
  if (!user) {
    throw new Error('Missing required parameter user when calling update');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PUT',
    url: path,
    json: true,
    data: user,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}