/**
 * @fileoverview AUTOMATICALLY GENERATED service for API.Client.PaymentApi.
 * Do not edit this file by hand or your changes will be lost next time it is
 * generated.
 *
 * A full ecommerce backend as a service.
 * Version: 0.1
 * Generated at: 2016-07-26T21:58:06.393Z
 * Generated by: class io.swagger.codegen.languages.JavascriptClosureAngularClientCodegen
 */
goog.provide('API.Client.PaymentApi');

goog.require('API.Client.Payment');
goog.require('API.Client.PaymentTransaction');

/**
 * @constructor
 * @param {!angular.$http} $http
 * @param {!Object} $httpParamSerializer
 * @param {!angular.$injector} $injector
 * @struct
 */
API.Client.PaymentApi = function($http, $httpParamSerializer, $injector) {
  /** @private {!string} */
  this.basePath_ = $injector.has('PaymentApiBasePath') ?
                   /** @type {!string} */ ($injector.get('PaymentApiBasePath')) :
                   'https://api.ordercloud.io/v1';

  /** @private {!Object<string, string>} */
  this.defaultHeaders_ = $injector.has('PaymentApiDefaultHeaders') ?
                   /** @type {!Object<string, string>} */ (
                       $injector.get('PaymentApiDefaultHeaders')) :
                   {};

  /** @private {!angular.$http} */
  this.http_ = $http;

  /** @package {!Object} */
  this.httpParamSerializer = $injector.get('$httpParamSerializer');
}
API.Client.PaymentApi.$inject = ['$http', '$httpParamSerializer', '$injector'];

/**
 * 
 * 
 * @param {!string} buyerID ID of the buyer.
 * @param {!string} orderID ID of the order.
 * @param {!Payment} payment 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.PaymentApi.prototype.create = function(buyerID, orderID, payment, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/buyers/{buyerID}/orders/{orderID}/payments'
      .replace('{' + 'buyerID' + '}', String(buyerID))
      .replace('{' + 'orderID' + '}', String(orderID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'buyerID' is set
  if (!buyerID) {
    throw new Error('Missing required parameter buyerID when calling create');
  }
  // verify required parameter 'orderID' is set
  if (!orderID) {
    throw new Error('Missing required parameter orderID when calling create');
  }
  // verify required parameter 'payment' is set
  if (!payment) {
    throw new Error('Missing required parameter payment when calling create');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: payment,
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
 * @param {!string} orderID ID of the order.
 * @param {!string} paymentID ID of the payment.
 * @param {!PaymentTransaction} transaction 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.PaymentApi.prototype.createTransaction = function(buyerID, orderID, paymentID, transaction, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}/transactions'
      .replace('{' + 'buyerID' + '}', String(buyerID))
      .replace('{' + 'orderID' + '}', String(orderID))
      .replace('{' + 'paymentID' + '}', String(paymentID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'buyerID' is set
  if (!buyerID) {
    throw new Error('Missing required parameter buyerID when calling createTransaction');
  }
  // verify required parameter 'orderID' is set
  if (!orderID) {
    throw new Error('Missing required parameter orderID when calling createTransaction');
  }
  // verify required parameter 'paymentID' is set
  if (!paymentID) {
    throw new Error('Missing required parameter paymentID when calling createTransaction');
  }
  // verify required parameter 'transaction' is set
  if (!transaction) {
    throw new Error('Missing required parameter transaction when calling createTransaction');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: transaction,
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
 * @param {!string} orderID ID of the order.
 * @param {!string} paymentID ID of the payment.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.PaymentApi.prototype.delete = function(buyerID, orderID, paymentID, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}'
      .replace('{' + 'buyerID' + '}', String(buyerID))
      .replace('{' + 'orderID' + '}', String(orderID))
      .replace('{' + 'paymentID' + '}', String(paymentID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'buyerID' is set
  if (!buyerID) {
    throw new Error('Missing required parameter buyerID when calling delete');
  }
  // verify required parameter 'orderID' is set
  if (!orderID) {
    throw new Error('Missing required parameter orderID when calling delete');
  }
  // verify required parameter 'paymentID' is set
  if (!paymentID) {
    throw new Error('Missing required parameter paymentID when calling delete');
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
 * @param {!string} orderID ID of the order.
 * @param {!string} paymentID ID of the payment.
 * @param {!string} transactionID ID of the transaction.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.PaymentApi.prototype.deleteTransaction = function(buyerID, orderID, paymentID, transactionID, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}/transactions/{transactionID}'
      .replace('{' + 'buyerID' + '}', String(buyerID))
      .replace('{' + 'orderID' + '}', String(orderID))
      .replace('{' + 'paymentID' + '}', String(paymentID))
      .replace('{' + 'transactionID' + '}', String(transactionID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'buyerID' is set
  if (!buyerID) {
    throw new Error('Missing required parameter buyerID when calling deleteTransaction');
  }
  // verify required parameter 'orderID' is set
  if (!orderID) {
    throw new Error('Missing required parameter orderID when calling deleteTransaction');
  }
  // verify required parameter 'paymentID' is set
  if (!paymentID) {
    throw new Error('Missing required parameter paymentID when calling deleteTransaction');
  }
  // verify required parameter 'transactionID' is set
  if (!transactionID) {
    throw new Error('Missing required parameter transactionID when calling deleteTransaction');
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
 * @param {!string} orderID ID of the order.
 * @param {!string} paymentID ID of the payment.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.PaymentApi.prototype.get = function(buyerID, orderID, paymentID, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}'
      .replace('{' + 'buyerID' + '}', String(buyerID))
      .replace('{' + 'orderID' + '}', String(orderID))
      .replace('{' + 'paymentID' + '}', String(paymentID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'buyerID' is set
  if (!buyerID) {
    throw new Error('Missing required parameter buyerID when calling get');
  }
  // verify required parameter 'orderID' is set
  if (!orderID) {
    throw new Error('Missing required parameter orderID when calling get');
  }
  // verify required parameter 'paymentID' is set
  if (!paymentID) {
    throw new Error('Missing required parameter paymentID when calling get');
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
 * @param {!string} orderID ID of the order.
 * @param {!string=} opt_search Word or phrase to search for.
 * @param {!string=} opt_searchOn Comma-delimited list of fields to search on.
 * @param {!string=} opt_sortBy Comma-delimited list of fields to sort by.
 * @param {!number=} opt_page Page of results to return. Default: 1
 * @param {!number=} opt_pageSize Number of results to return per page. Default: 20, max: 100.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.PaymentApi.prototype.list = function(buyerID, orderID, opt_search, opt_searchOn, opt_sortBy, opt_page, opt_pageSize, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/buyers/{buyerID}/orders/{orderID}/payments'
      .replace('{' + 'buyerID' + '}', String(buyerID))
      .replace('{' + 'orderID' + '}', String(orderID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'buyerID' is set
  if (!buyerID) {
    throw new Error('Missing required parameter buyerID when calling list');
  }
  // verify required parameter 'orderID' is set
  if (!orderID) {
    throw new Error('Missing required parameter orderID when calling list');
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
 * @param {!string} orderID ID of the order.
 * @param {!string} paymentID ID of the payment.
 * @param {!Payment} partialPayment 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.PaymentApi.prototype.patch = function(buyerID, orderID, paymentID, partialPayment, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}'
      .replace('{' + 'buyerID' + '}', String(buyerID))
      .replace('{' + 'orderID' + '}', String(orderID))
      .replace('{' + 'paymentID' + '}', String(paymentID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'buyerID' is set
  if (!buyerID) {
    throw new Error('Missing required parameter buyerID when calling patch');
  }
  // verify required parameter 'orderID' is set
  if (!orderID) {
    throw new Error('Missing required parameter orderID when calling patch');
  }
  // verify required parameter 'paymentID' is set
  if (!paymentID) {
    throw new Error('Missing required parameter paymentID when calling patch');
  }
  // verify required parameter 'partialPayment' is set
  if (!partialPayment) {
    throw new Error('Missing required parameter partialPayment when calling patch');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PATCH',
    url: path,
    json: true,
    data: partialPayment,
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
 * @param {!string} orderID ID of the order.
 * @param {!string} paymentID ID of the payment.
 * @param {!string} transactionID ID of the transaction.
 * @param {!PaymentTransaction} partialTransaction 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.PaymentApi.prototype.patchTransaction = function(buyerID, orderID, paymentID, transactionID, partialTransaction, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}/transactions/{transactionID}'
      .replace('{' + 'buyerID' + '}', String(buyerID))
      .replace('{' + 'orderID' + '}', String(orderID))
      .replace('{' + 'paymentID' + '}', String(paymentID))
      .replace('{' + 'transactionID' + '}', String(transactionID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'buyerID' is set
  if (!buyerID) {
    throw new Error('Missing required parameter buyerID when calling patchTransaction');
  }
  // verify required parameter 'orderID' is set
  if (!orderID) {
    throw new Error('Missing required parameter orderID when calling patchTransaction');
  }
  // verify required parameter 'paymentID' is set
  if (!paymentID) {
    throw new Error('Missing required parameter paymentID when calling patchTransaction');
  }
  // verify required parameter 'transactionID' is set
  if (!transactionID) {
    throw new Error('Missing required parameter transactionID when calling patchTransaction');
  }
  // verify required parameter 'partialTransaction' is set
  if (!partialTransaction) {
    throw new Error('Missing required parameter partialTransaction when calling patchTransaction');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PATCH',
    url: path,
    json: true,
    data: partialTransaction,
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
 * @param {!string} orderID ID of the order.
 * @param {!string} paymentID ID of the payment.
 * @param {!Payment} payment 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.PaymentApi.prototype.update = function(buyerID, orderID, paymentID, payment, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}'
      .replace('{' + 'buyerID' + '}', String(buyerID))
      .replace('{' + 'orderID' + '}', String(orderID))
      .replace('{' + 'paymentID' + '}', String(paymentID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'buyerID' is set
  if (!buyerID) {
    throw new Error('Missing required parameter buyerID when calling update');
  }
  // verify required parameter 'orderID' is set
  if (!orderID) {
    throw new Error('Missing required parameter orderID when calling update');
  }
  // verify required parameter 'paymentID' is set
  if (!paymentID) {
    throw new Error('Missing required parameter paymentID when calling update');
  }
  // verify required parameter 'payment' is set
  if (!payment) {
    throw new Error('Missing required parameter payment when calling update');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PUT',
    url: path,
    json: true,
    data: payment,
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
 * @param {!string} orderID ID of the order.
 * @param {!string} paymentID ID of the payment.
 * @param {!string} transactionID ID of the transaction.
 * @param {!PaymentTransaction} transaction 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.PaymentApi.prototype.updateTransaction = function(buyerID, orderID, paymentID, transactionID, transaction, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}/transactions/{transactionID}'
      .replace('{' + 'buyerID' + '}', String(buyerID))
      .replace('{' + 'orderID' + '}', String(orderID))
      .replace('{' + 'paymentID' + '}', String(paymentID))
      .replace('{' + 'transactionID' + '}', String(transactionID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'buyerID' is set
  if (!buyerID) {
    throw new Error('Missing required parameter buyerID when calling updateTransaction');
  }
  // verify required parameter 'orderID' is set
  if (!orderID) {
    throw new Error('Missing required parameter orderID when calling updateTransaction');
  }
  // verify required parameter 'paymentID' is set
  if (!paymentID) {
    throw new Error('Missing required parameter paymentID when calling updateTransaction');
  }
  // verify required parameter 'transactionID' is set
  if (!transactionID) {
    throw new Error('Missing required parameter transactionID when calling updateTransaction');
  }
  // verify required parameter 'transaction' is set
  if (!transaction) {
    throw new Error('Missing required parameter transaction when calling updateTransaction');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PUT',
    url: path,
    json: true,
    data: transaction,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}