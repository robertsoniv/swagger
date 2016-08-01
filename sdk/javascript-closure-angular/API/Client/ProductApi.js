/**
 * @fileoverview AUTOMATICALLY GENERATED service for API.Client.ProductApi.
 * Do not edit this file by hand or your changes will be lost next time it is
 * generated.
 *
 * A full ecommerce backend as a service.
 * Version: 0.1
 * Generated at: 2016-07-26T21:58:06.393Z
 * Generated by: class io.swagger.codegen.languages.JavascriptClosureAngularClientCodegen
 */
goog.provide('API.Client.ProductApi');

goog.require('API.Client.Product');
goog.require('API.Client.ProductAssignment');
goog.require('API.Client.Variant');

/**
 * @constructor
 * @param {!angular.$http} $http
 * @param {!Object} $httpParamSerializer
 * @param {!angular.$injector} $injector
 * @struct
 */
API.Client.ProductApi = function($http, $httpParamSerializer, $injector) {
  /** @private {!string} */
  this.basePath_ = $injector.has('ProductApiBasePath') ?
                   /** @type {!string} */ ($injector.get('ProductApiBasePath')) :
                   'https://api.ordercloud.io/v1';

  /** @private {!Object<string, string>} */
  this.defaultHeaders_ = $injector.has('ProductApiDefaultHeaders') ?
                   /** @type {!Object<string, string>} */ (
                       $injector.get('ProductApiDefaultHeaders')) :
                   {};

  /** @private {!angular.$http} */
  this.http_ = $http;

  /** @package {!Object} */
  this.httpParamSerializer = $injector.get('$httpParamSerializer');
}
API.Client.ProductApi.$inject = ['$http', '$httpParamSerializer', '$injector'];

/**
 * 
 * 
 * @param {!Product} product 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.ProductApi.prototype.create = function(product, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/products';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'product' is set
  if (!product) {
    throw new Error('Missing required parameter product when calling create');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: product,
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
 * @param {!string} productID ID of the product.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.ProductApi.prototype.delete = function(productID, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/products/{productID}'
      .replace('{' + 'productID' + '}', String(productID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'productID' is set
  if (!productID) {
    throw new Error('Missing required parameter productID when calling delete');
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
 * @param {!string} productID ID of the product.
 * @param {!string=} opt_userID ID of the user.
 * @param {!string=} opt_userGroupID ID of the user group.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.ProductApi.prototype.deleteAssignment = function(buyerID, productID, opt_userID, opt_userGroupID, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/products/{productID}/assignments/{buyerID}'
      .replace('{' + 'buyerID' + '}', String(buyerID))
      .replace('{' + 'productID' + '}', String(productID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'buyerID' is set
  if (!buyerID) {
    throw new Error('Missing required parameter buyerID when calling deleteAssignment');
  }
  // verify required parameter 'productID' is set
  if (!productID) {
    throw new Error('Missing required parameter productID when calling deleteAssignment');
  }
  if (opt_userID !== undefined) {
    queryParameters['userID'] = opt_userID;
  }

  if (opt_userGroupID !== undefined) {
    queryParameters['userGroupID'] = opt_userGroupID;
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
 * @param {!string} productID ID of the product.
 * @param {!boolean=} opt_overwriteExisting Overwrite existing of the product.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.ProductApi.prototype.generateVariants = function(productID, opt_overwriteExisting, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/products/{productID}/variants/generate'
      .replace('{' + 'productID' + '}', String(productID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'productID' is set
  if (!productID) {
    throw new Error('Missing required parameter productID when calling generateVariants');
  }
  if (opt_overwriteExisting !== undefined) {
    queryParameters['overwriteExisting'] = opt_overwriteExisting;
  }

  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
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
 * @param {!string} productID ID of the product.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.ProductApi.prototype.get = function(productID, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/products/{productID}'
      .replace('{' + 'productID' + '}', String(productID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'productID' is set
  if (!productID) {
    throw new Error('Missing required parameter productID when calling get');
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
 * @param {!string} productID ID of the product.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.ProductApi.prototype.getInventory = function(productID, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/products/{productID}/inventory'
      .replace('{' + 'productID' + '}', String(productID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'productID' is set
  if (!productID) {
    throw new Error('Missing required parameter productID when calling getInventory');
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
 * @param {!string} productID ID of the product.
 * @param {!string} variantID ID of the variant.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.ProductApi.prototype.getVariant = function(productID, variantID, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/products/{productID}/variants/{variantID}'
      .replace('{' + 'productID' + '}', String(productID))
      .replace('{' + 'variantID' + '}', String(variantID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'productID' is set
  if (!productID) {
    throw new Error('Missing required parameter productID when calling getVariant');
  }
  // verify required parameter 'variantID' is set
  if (!variantID) {
    throw new Error('Missing required parameter variantID when calling getVariant');
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
 * @param {!string} productID ID of the product.
 * @param {!string} variantID ID of the variant.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.ProductApi.prototype.getVariantInventory = function(productID, variantID, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/products/{productID}/variants/inventory/{variantID}'
      .replace('{' + 'productID' + '}', String(productID))
      .replace('{' + 'variantID' + '}', String(variantID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'productID' is set
  if (!productID) {
    throw new Error('Missing required parameter productID when calling getVariantInventory');
  }
  // verify required parameter 'variantID' is set
  if (!variantID) {
    throw new Error('Missing required parameter variantID when calling getVariantInventory');
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
 * @param {!string=} opt_search Word or phrase to search for.
 * @param {!string=} opt_searchOn Comma-delimited list of fields to search on.
 * @param {!string=} opt_sortBy Comma-delimited list of fields to sort by.
 * @param {!number=} opt_page Page of results to return. Default: 1
 * @param {!number=} opt_pageSize Number of results to return per page. Default: 20, max: 100.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.ProductApi.prototype.list = function(opt_search, opt_searchOn, opt_sortBy, opt_page, opt_pageSize, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/products';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
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
 * @param {!string=} opt_productID ID of the product.
 * @param {!string=} opt_buyerID ID of the buyer.
 * @param {!string=} opt_userID ID of the user.
 * @param {!string=} opt_userGroupID ID of the user group.
 * @param {!string=} opt_level Level of the product.
 * @param {!string=} opt_priceScheduleID ID of the price schedule.
 * @param {!number=} opt_page Page of results to return. Default: 1
 * @param {!number=} opt_pageSize Number of results to return per page. Default: 20, max: 100.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.ProductApi.prototype.listAssignments = function(opt_productID, opt_buyerID, opt_userID, opt_userGroupID, opt_level, opt_priceScheduleID, opt_page, opt_pageSize, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/products/assignments';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  if (opt_productID !== undefined) {
    queryParameters['productID'] = opt_productID;
  }

  if (opt_buyerID !== undefined) {
    queryParameters['buyerID'] = opt_buyerID;
  }

  if (opt_userID !== undefined) {
    queryParameters['userID'] = opt_userID;
  }

  if (opt_userGroupID !== undefined) {
    queryParameters['userGroupID'] = opt_userGroupID;
  }

  if (opt_level !== undefined) {
    queryParameters['level'] = opt_level;
  }

  if (opt_priceScheduleID !== undefined) {
    queryParameters['priceScheduleID'] = opt_priceScheduleID;
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
 * @param {!string=} opt_search Word or phrase to search for.
 * @param {!string=} opt_searchOn Comma-delimited list of fields to search on.
 * @param {!string=} opt_sortBy Comma-delimited list of fields to sort by.
 * @param {!number=} opt_page Page of results to return. Default: 1
 * @param {!number=} opt_pageSize Number of results to return per page. Default: 20, max: 100.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.ProductApi.prototype.listInventory = function(opt_search, opt_searchOn, opt_sortBy, opt_page, opt_pageSize, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/products/inventory';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
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
 * @param {!string} productID ID of the product.
 * @param {!string=} opt_search Word or phrase to search for.
 * @param {!string=} opt_searchOn Comma-delimited list of fields to search on.
 * @param {!string=} opt_sortBy Comma-delimited list of fields to sort by.
 * @param {!number=} opt_page Page of results to return. Default: 1
 * @param {!number=} opt_pageSize Number of results to return per page. Default: 20, max: 100.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.ProductApi.prototype.listVariantInventory = function(productID, opt_search, opt_searchOn, opt_sortBy, opt_page, opt_pageSize, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/products/{productID}/variants/inventory'
      .replace('{' + 'productID' + '}', String(productID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'productID' is set
  if (!productID) {
    throw new Error('Missing required parameter productID when calling listVariantInventory');
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
 * @param {!string} productID ID of the product.
 * @param {!string=} opt_search Word or phrase to search for.
 * @param {!string=} opt_searchOn Comma-delimited list of fields to search on.
 * @param {!string=} opt_sortBy Comma-delimited list of fields to sort by.
 * @param {!number=} opt_page Page of results to return. Default: 1
 * @param {!number=} opt_pageSize Number of results to return per page. Default: 20, max: 100.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.ProductApi.prototype.listVariants = function(productID, opt_search, opt_searchOn, opt_sortBy, opt_page, opt_pageSize, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/products/{productID}/variants'
      .replace('{' + 'productID' + '}', String(productID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'productID' is set
  if (!productID) {
    throw new Error('Missing required parameter productID when calling listVariants');
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
 * @param {!string} productID ID of the product.
 * @param {!Product} product 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.ProductApi.prototype.patch = function(productID, product, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/products/{productID}'
      .replace('{' + 'productID' + '}', String(productID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'productID' is set
  if (!productID) {
    throw new Error('Missing required parameter productID when calling patch');
  }
  // verify required parameter 'product' is set
  if (!product) {
    throw new Error('Missing required parameter product when calling patch');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PATCH',
    url: path,
    json: true,
    data: product,
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
 * @param {!string} productID ID of the product.
 * @param {!string} variantID ID of the variant.
 * @param {!Variant} variant 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.ProductApi.prototype.patchVariant = function(productID, variantID, variant, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/products/{productID}/variants/{variantID}'
      .replace('{' + 'productID' + '}', String(productID))
      .replace('{' + 'variantID' + '}', String(variantID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'productID' is set
  if (!productID) {
    throw new Error('Missing required parameter productID when calling patchVariant');
  }
  // verify required parameter 'variantID' is set
  if (!variantID) {
    throw new Error('Missing required parameter variantID when calling patchVariant');
  }
  // verify required parameter 'variant' is set
  if (!variant) {
    throw new Error('Missing required parameter variant when calling patchVariant');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PATCH',
    url: path,
    json: true,
    data: variant,
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
 * @param {!ProductAssignment} productAssignment 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.ProductApi.prototype.saveAssignment = function(productAssignment, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/products/assignments';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'productAssignment' is set
  if (!productAssignment) {
    throw new Error('Missing required parameter productAssignment when calling saveAssignment');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: productAssignment,
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
 * @param {!string} productID ID of the product.
 * @param {!Product} product 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.ProductApi.prototype.update = function(productID, product, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/products/{productID}'
      .replace('{' + 'productID' + '}', String(productID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'productID' is set
  if (!productID) {
    throw new Error('Missing required parameter productID when calling update');
  }
  // verify required parameter 'product' is set
  if (!product) {
    throw new Error('Missing required parameter product when calling update');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PUT',
    url: path,
    json: true,
    data: product,
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
 * @param {!string} productID ID of the product.
 * @param {!number} inventory Inventory of the product.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.ProductApi.prototype.updateInventory = function(productID, inventory, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/products/{productID}/inventory/{inventory}'
      .replace('{' + 'productID' + '}', String(productID))
      .replace('{' + 'inventory' + '}', String(inventory));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'productID' is set
  if (!productID) {
    throw new Error('Missing required parameter productID when calling updateInventory');
  }
  // verify required parameter 'inventory' is set
  if (!inventory) {
    throw new Error('Missing required parameter inventory when calling updateInventory');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PUT',
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
 * @param {!string} productID ID of the product.
 * @param {!string} variantID ID of the variant.
 * @param {!Variant} variant 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.ProductApi.prototype.updateVariant = function(productID, variantID, variant, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/products/{productID}/variants/{variantID}'
      .replace('{' + 'productID' + '}', String(productID))
      .replace('{' + 'variantID' + '}', String(variantID));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'productID' is set
  if (!productID) {
    throw new Error('Missing required parameter productID when calling updateVariant');
  }
  // verify required parameter 'variantID' is set
  if (!variantID) {
    throw new Error('Missing required parameter variantID when calling updateVariant');
  }
  // verify required parameter 'variant' is set
  if (!variant) {
    throw new Error('Missing required parameter variant when calling updateVariant');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PUT',
    url: path,
    json: true,
    data: variant,
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
 * @param {!string} productID ID of the product.
 * @param {!string} variantID ID of the variant.
 * @param {!number} inventory Inventory of the product.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.ProductApi.prototype.updateVariantInventory = function(productID, variantID, inventory, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/products/{productID}/variants/inventory/{variantID}/{inventory}'
      .replace('{' + 'productID' + '}', String(productID))
      .replace('{' + 'variantID' + '}', String(variantID))
      .replace('{' + 'inventory' + '}', String(inventory));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'productID' is set
  if (!productID) {
    throw new Error('Missing required parameter productID when calling updateVariantInventory');
  }
  // verify required parameter 'variantID' is set
  if (!variantID) {
    throw new Error('Missing required parameter variantID when calling updateVariantInventory');
  }
  // verify required parameter 'inventory' is set
  if (!inventory) {
    throw new Error('Missing required parameter inventory when calling updateVariantInventory');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PUT',
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