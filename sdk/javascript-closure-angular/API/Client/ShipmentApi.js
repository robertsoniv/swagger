/**
 * @fileoverview AUTOMATICALLY GENERATED service for API.Client.ShipmentApi.
 * Do not edit this file by hand or your changes will be lost next time it is
 * generated.
 *
 * A full ecommerce backend as a service.
 * Version: 0.1
 * Generated at: 2016-07-26T21:58:06.393Z
 * Generated by: class io.swagger.codegen.languages.JavascriptClosureAngularClientCodegen
 */
goog.provide('API.Client.ShipmentApi');

goog.require('API.Client.Shipment');
goog.require('API.Client.ShipmentItem');

/**
 * @constructor
 * @param {!angular.$http} $http
 * @param {!Object} $httpParamSerializer
 * @param {!angular.$injector} $injector
 * @struct
 */
API.Client.ShipmentApi = function($http, $httpParamSerializer, $injector) {
  /** @private {!string} */
  this.basePath_ = $injector.has('ShipmentApiBasePath') ?
                   /** @type {!string} */ ($injector.get('ShipmentApiBasePath')) :
                   'https://api.ordercloud.io/v1';

  /** @private {!Object<string, string>} */
  this.defaultHeaders_ = $injector.has('ShipmentApiDefaultHeaders') ?
                   /** @type {!Object<string, string>} */ (
                       $injector.get('ShipmentApiDefaultHeaders')) :
                   {};

  /** @private {!angular.$http} */
  this.http_ = $http;

  /** @package {!Object} */
  this.httpParamSerializer = $injector.get('$httpParamSerializer');
}
API.Client.ShipmentApi.$inject = ['$http', '$httpParamSerializer', '$injector'];

/**
 * 
 * 
 * @param {!string} buyerID ID of the buyer.
 * @param {!Shipment} shipment 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.ShipmentApi.prototype.create = function(buyerID, shipment, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/buyers/{buyerID}/shipments'
      .replace('{' + 'buyerID' + '}', String(buyerID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'buyerID' is set
  if (!buyerID) {
    throw new Error('Missing required parameter buyerID when calling create');
  }
  // verify required parameter 'shipment' is set
  if (!shipment) {
    throw new Error('Missing required parameter shipment when calling create');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: shipment,
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
 * @param {!string} shipmentID ID of the shipment.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.ShipmentApi.prototype.delete = function(buyerID, shipmentID, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/buyers/{buyerID}/shipments/{shipmentID}'
      .replace('{' + 'buyerID' + '}', String(buyerID))
      .replace('{' + 'shipmentID' + '}', String(shipmentID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'buyerID' is set
  if (!buyerID) {
    throw new Error('Missing required parameter buyerID when calling delete');
  }
  // verify required parameter 'shipmentID' is set
  if (!shipmentID) {
    throw new Error('Missing required parameter shipmentID when calling delete');
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
 * @param {!string} shipmentID ID of the shipment.
 * @param {!string} orderID ID of the order.
 * @param {!string} lineItemID ID of the line item.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.ShipmentApi.prototype.deleteItem = function(buyerID, shipmentID, orderID, lineItemID, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/buyers/{buyerID}/shipments/{shipmentID}/items/{orderID}/{lineItemID}'
      .replace('{' + 'buyerID' + '}', String(buyerID))
      .replace('{' + 'shipmentID' + '}', String(shipmentID))
      .replace('{' + 'orderID' + '}', String(orderID))
      .replace('{' + 'lineItemID' + '}', String(lineItemID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'buyerID' is set
  if (!buyerID) {
    throw new Error('Missing required parameter buyerID when calling deleteItem');
  }
  // verify required parameter 'shipmentID' is set
  if (!shipmentID) {
    throw new Error('Missing required parameter shipmentID when calling deleteItem');
  }
  // verify required parameter 'orderID' is set
  if (!orderID) {
    throw new Error('Missing required parameter orderID when calling deleteItem');
  }
  // verify required parameter 'lineItemID' is set
  if (!lineItemID) {
    throw new Error('Missing required parameter lineItemID when calling deleteItem');
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
 * @param {!string} shipmentID ID of the shipment.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.ShipmentApi.prototype.get = function(buyerID, shipmentID, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/buyers/{buyerID}/shipments/{shipmentID}'
      .replace('{' + 'buyerID' + '}', String(buyerID))
      .replace('{' + 'shipmentID' + '}', String(shipmentID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'buyerID' is set
  if (!buyerID) {
    throw new Error('Missing required parameter buyerID when calling get');
  }
  // verify required parameter 'shipmentID' is set
  if (!shipmentID) {
    throw new Error('Missing required parameter shipmentID when calling get');
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
 * @param {!string=} opt_orderID ID of the order.
 * @param {!string=} opt_search Word or phrase to search for.
 * @param {!string=} opt_searchOn Comma-delimited list of fields to search on.
 * @param {!string=} opt_sortBy Comma-delimited list of fields to sort by.
 * @param {!number=} opt_page Page of results to return. Default: 1
 * @param {!number=} opt_pageSize Number of results to return per page. Default: 20, max: 100.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.ShipmentApi.prototype.list = function(buyerID, opt_orderID, opt_search, opt_searchOn, opt_sortBy, opt_page, opt_pageSize, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/buyers/{buyerID}/shipments'
      .replace('{' + 'buyerID' + '}', String(buyerID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'buyerID' is set
  if (!buyerID) {
    throw new Error('Missing required parameter buyerID when calling list');
  }
  if (opt_orderID !== undefined) {
    queryParameters['orderID'] = opt_orderID;
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
 * @param {!string} shipmentID ID of the shipment.
 * @param {!Shipment} shipment 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.ShipmentApi.prototype.patch = function(buyerID, shipmentID, shipment, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/buyers/{buyerID}/shipments/{shipmentID}'
      .replace('{' + 'buyerID' + '}', String(buyerID))
      .replace('{' + 'shipmentID' + '}', String(shipmentID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'buyerID' is set
  if (!buyerID) {
    throw new Error('Missing required parameter buyerID when calling patch');
  }
  // verify required parameter 'shipmentID' is set
  if (!shipmentID) {
    throw new Error('Missing required parameter shipmentID when calling patch');
  }
  // verify required parameter 'shipment' is set
  if (!shipment) {
    throw new Error('Missing required parameter shipment when calling patch');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PATCH',
    url: path,
    json: true,
    data: shipment,
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
 * @param {!string} shipmentID ID of the shipment.
 * @param {!ShipmentItem} item 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.ShipmentApi.prototype.saveItem = function(buyerID, shipmentID, item, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/buyers/{buyerID}/shipments/{shipmentID}/items'
      .replace('{' + 'buyerID' + '}', String(buyerID))
      .replace('{' + 'shipmentID' + '}', String(shipmentID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'buyerID' is set
  if (!buyerID) {
    throw new Error('Missing required parameter buyerID when calling saveItem');
  }
  // verify required parameter 'shipmentID' is set
  if (!shipmentID) {
    throw new Error('Missing required parameter shipmentID when calling saveItem');
  }
  // verify required parameter 'item' is set
  if (!item) {
    throw new Error('Missing required parameter item when calling saveItem');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: item,
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
 * @param {!string} shipmentID ID of the shipment.
 * @param {!Shipment} shipment 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.ShipmentApi.prototype.update = function(buyerID, shipmentID, shipment, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/buyers/{buyerID}/shipments/{shipmentID}'
      .replace('{' + 'buyerID' + '}', String(buyerID))
      .replace('{' + 'shipmentID' + '}', String(shipmentID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'buyerID' is set
  if (!buyerID) {
    throw new Error('Missing required parameter buyerID when calling update');
  }
  // verify required parameter 'shipmentID' is set
  if (!shipmentID) {
    throw new Error('Missing required parameter shipmentID when calling update');
  }
  // verify required parameter 'shipment' is set
  if (!shipment) {
    throw new Error('Missing required parameter shipment when calling update');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PUT',
    url: path,
    json: true,
    data: shipment,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}