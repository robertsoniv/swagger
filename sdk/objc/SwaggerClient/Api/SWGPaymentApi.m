#import "SWGPaymentApi.h"
#import "SWGQueryParamCollection.h"
#import "SWGPayment.h"
#import "SWGPaymentTransaction.h"


@interface SWGPaymentApi ()

@property (nonatomic, strong) NSMutableDictionary *defaultHeaders;

@end

@implementation SWGPaymentApi

NSString* kSWGPaymentApiErrorDomain = @"SWGPaymentApiErrorDomain";
NSInteger kSWGPaymentApiMissingParamErrorCode = 234513;

@synthesize apiClient = _apiClient;

#pragma mark - Initialize methods

- (instancetype) init {
    self = [super init];
    if (self) {
        SWGConfiguration *config = [SWGConfiguration sharedConfig];
        if (config.apiClient == nil) {
            config.apiClient = [[SWGApiClient alloc] init];
        }
        _apiClient = config.apiClient;
        _defaultHeaders = [NSMutableDictionary dictionary];
    }
    return self;
}

- (id) initWithApiClient:(SWGApiClient *)apiClient {
    self = [super init];
    if (self) {
        _apiClient = apiClient;
        _defaultHeaders = [NSMutableDictionary dictionary];
    }
    return self;
}

#pragma mark -

+ (instancetype)sharedAPI {
    static SWGPaymentApi *sharedAPI;
    static dispatch_once_t once;
    dispatch_once(&once, ^{
        sharedAPI = [[self alloc] init];
    });
    return sharedAPI;
}

-(NSString*) defaultHeaderForKey:(NSString*)key {
    return self.defaultHeaders[key];
}

-(void) addHeader:(NSString*)value forKey:(NSString*)key {
    [self setDefaultHeaderValue:value forKey:key];
}

-(void) setDefaultHeaderValue:(NSString*) value forKey:(NSString*)key {
    [self.defaultHeaders setValue:value forKey:key];
}

-(NSUInteger) requestQueueSize {
    return [SWGApiClient requestQueueSize];
}

#pragma mark - Api Methods

///
/// 
/// 
///  @param buyerID ID of the buyer. 
///
///  @param orderID ID of the order. 
///
///  @param payment  
///
///  @returns NSObject*
///
-(NSNumber*) createWithBuyerID: (NSString*) buyerID
    orderID: (NSString*) orderID
    payment: (SWGPayment*) payment
    completionHandler: (void (^)(NSObject* output, NSError* error)) handler {
    // verify the required parameter 'buyerID' is set
    if (buyerID == nil) {
        NSParameterAssert(buyerID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"buyerID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'orderID' is set
    if (orderID == nil) {
        NSParameterAssert(orderID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"orderID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'payment' is set
    if (payment == nil) {
        NSParameterAssert(payment);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"payment"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/buyers/{buyerID}/orders/{orderID}/payments"];

    // remove format in URL if needed
    [resourcePath replaceOccurrencesOfString:@".{format}" withString:@".json" options:0 range:NSMakeRange(0,resourcePath.length)];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];
    if (buyerID != nil) {
        pathParams[@"buyerID"] = buyerID;
    }
    if (orderID != nil) {
        pathParams[@"orderID"] = orderID;
    }

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary* headerParams = [NSMutableDictionary dictionaryWithDictionary:self.apiClient.configuration.defaultHeaders];
    [headerParams addEntriesFromDictionary:self.defaultHeaders];
    // HTTP header `Accept`
    NSString *acceptHeader = [self.apiClient.sanitizer selectHeaderAccept:@[]];
    if(acceptHeader.length > 0) {
        headerParams[@"Accept"] = acceptHeader;
    }

    // response content type
    NSString *responseContentType = [[acceptHeader componentsSeparatedByString:@", "] firstObject] ?: @"";

    // request content type
    NSString *requestContentType = [self.apiClient.sanitizer selectHeaderContentType:@[]];

    // Authentication setting
    NSArray *authSettings = @[@"auth"];

    id bodyParam = nil;
    NSMutableDictionary *formParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary *localVarFiles = [[NSMutableDictionary alloc] init];
    bodyParam = payment;

    return [self.apiClient requestWithPath: resourcePath
                                    method: @"POST"
                                pathParams: pathParams
                               queryParams: queryParams
                                formParams: formParams
                                     files: localVarFiles
                                      body: bodyParam
                              headerParams: headerParams
                              authSettings: authSettings
                        requestContentType: requestContentType
                       responseContentType: responseContentType
                              responseType: @"NSObject*"
                           completionBlock: ^(id data, NSError *error) {
                                if(handler) {
                                    handler((NSObject*)data, error);
                                }
                           }
          ];
}

///
/// 
/// 
///  @param buyerID ID of the buyer. 
///
///  @param orderID ID of the order. 
///
///  @param paymentID ID of the payment. 
///
///  @param transaction  
///
///  @returns NSObject*
///
-(NSNumber*) createTransactionWithBuyerID: (NSString*) buyerID
    orderID: (NSString*) orderID
    paymentID: (NSString*) paymentID
    transaction: (SWGPaymentTransaction*) transaction
    completionHandler: (void (^)(NSObject* output, NSError* error)) handler {
    // verify the required parameter 'buyerID' is set
    if (buyerID == nil) {
        NSParameterAssert(buyerID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"buyerID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'orderID' is set
    if (orderID == nil) {
        NSParameterAssert(orderID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"orderID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'paymentID' is set
    if (paymentID == nil) {
        NSParameterAssert(paymentID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"paymentID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'transaction' is set
    if (transaction == nil) {
        NSParameterAssert(transaction);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"transaction"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}/transactions"];

    // remove format in URL if needed
    [resourcePath replaceOccurrencesOfString:@".{format}" withString:@".json" options:0 range:NSMakeRange(0,resourcePath.length)];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];
    if (buyerID != nil) {
        pathParams[@"buyerID"] = buyerID;
    }
    if (orderID != nil) {
        pathParams[@"orderID"] = orderID;
    }
    if (paymentID != nil) {
        pathParams[@"paymentID"] = paymentID;
    }

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary* headerParams = [NSMutableDictionary dictionaryWithDictionary:self.apiClient.configuration.defaultHeaders];
    [headerParams addEntriesFromDictionary:self.defaultHeaders];
    // HTTP header `Accept`
    NSString *acceptHeader = [self.apiClient.sanitizer selectHeaderAccept:@[]];
    if(acceptHeader.length > 0) {
        headerParams[@"Accept"] = acceptHeader;
    }

    // response content type
    NSString *responseContentType = [[acceptHeader componentsSeparatedByString:@", "] firstObject] ?: @"";

    // request content type
    NSString *requestContentType = [self.apiClient.sanitizer selectHeaderContentType:@[]];

    // Authentication setting
    NSArray *authSettings = @[@"auth"];

    id bodyParam = nil;
    NSMutableDictionary *formParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary *localVarFiles = [[NSMutableDictionary alloc] init];
    bodyParam = transaction;

    return [self.apiClient requestWithPath: resourcePath
                                    method: @"POST"
                                pathParams: pathParams
                               queryParams: queryParams
                                formParams: formParams
                                     files: localVarFiles
                                      body: bodyParam
                              headerParams: headerParams
                              authSettings: authSettings
                        requestContentType: requestContentType
                       responseContentType: responseContentType
                              responseType: @"NSObject*"
                           completionBlock: ^(id data, NSError *error) {
                                if(handler) {
                                    handler((NSObject*)data, error);
                                }
                           }
          ];
}

///
/// 
/// 
///  @param buyerID ID of the buyer. 
///
///  @param orderID ID of the order. 
///
///  @param paymentID ID of the payment. 
///
///  @returns void
///
-(NSNumber*) deleteWithBuyerID: (NSString*) buyerID
    orderID: (NSString*) orderID
    paymentID: (NSString*) paymentID
    completionHandler: (void (^)(NSError* error)) handler {
    // verify the required parameter 'buyerID' is set
    if (buyerID == nil) {
        NSParameterAssert(buyerID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"buyerID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(error);
        }
        return nil;
    }

    // verify the required parameter 'orderID' is set
    if (orderID == nil) {
        NSParameterAssert(orderID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"orderID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(error);
        }
        return nil;
    }

    // verify the required parameter 'paymentID' is set
    if (paymentID == nil) {
        NSParameterAssert(paymentID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"paymentID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(error);
        }
        return nil;
    }

    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}"];

    // remove format in URL if needed
    [resourcePath replaceOccurrencesOfString:@".{format}" withString:@".json" options:0 range:NSMakeRange(0,resourcePath.length)];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];
    if (buyerID != nil) {
        pathParams[@"buyerID"] = buyerID;
    }
    if (orderID != nil) {
        pathParams[@"orderID"] = orderID;
    }
    if (paymentID != nil) {
        pathParams[@"paymentID"] = paymentID;
    }

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary* headerParams = [NSMutableDictionary dictionaryWithDictionary:self.apiClient.configuration.defaultHeaders];
    [headerParams addEntriesFromDictionary:self.defaultHeaders];
    // HTTP header `Accept`
    NSString *acceptHeader = [self.apiClient.sanitizer selectHeaderAccept:@[]];
    if(acceptHeader.length > 0) {
        headerParams[@"Accept"] = acceptHeader;
    }

    // response content type
    NSString *responseContentType = [[acceptHeader componentsSeparatedByString:@", "] firstObject] ?: @"";

    // request content type
    NSString *requestContentType = [self.apiClient.sanitizer selectHeaderContentType:@[]];

    // Authentication setting
    NSArray *authSettings = @[@"auth"];

    id bodyParam = nil;
    NSMutableDictionary *formParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary *localVarFiles = [[NSMutableDictionary alloc] init];

    return [self.apiClient requestWithPath: resourcePath
                                    method: @"DELETE"
                                pathParams: pathParams
                               queryParams: queryParams
                                formParams: formParams
                                     files: localVarFiles
                                      body: bodyParam
                              headerParams: headerParams
                              authSettings: authSettings
                        requestContentType: requestContentType
                       responseContentType: responseContentType
                              responseType: nil
                           completionBlock: ^(id data, NSError *error) {
                                if(handler) {
                                    handler(error);
                                }
                           }
          ];
}

///
/// 
/// 
///  @param buyerID ID of the buyer. 
///
///  @param orderID ID of the order. 
///
///  @param paymentID ID of the payment. 
///
///  @param transactionID ID of the transaction. 
///
///  @returns void
///
-(NSNumber*) deleteTransactionWithBuyerID: (NSString*) buyerID
    orderID: (NSString*) orderID
    paymentID: (NSString*) paymentID
    transactionID: (NSString*) transactionID
    completionHandler: (void (^)(NSError* error)) handler {
    // verify the required parameter 'buyerID' is set
    if (buyerID == nil) {
        NSParameterAssert(buyerID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"buyerID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(error);
        }
        return nil;
    }

    // verify the required parameter 'orderID' is set
    if (orderID == nil) {
        NSParameterAssert(orderID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"orderID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(error);
        }
        return nil;
    }

    // verify the required parameter 'paymentID' is set
    if (paymentID == nil) {
        NSParameterAssert(paymentID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"paymentID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(error);
        }
        return nil;
    }

    // verify the required parameter 'transactionID' is set
    if (transactionID == nil) {
        NSParameterAssert(transactionID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"transactionID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(error);
        }
        return nil;
    }

    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}/transactions/{transactionID}"];

    // remove format in URL if needed
    [resourcePath replaceOccurrencesOfString:@".{format}" withString:@".json" options:0 range:NSMakeRange(0,resourcePath.length)];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];
    if (buyerID != nil) {
        pathParams[@"buyerID"] = buyerID;
    }
    if (orderID != nil) {
        pathParams[@"orderID"] = orderID;
    }
    if (paymentID != nil) {
        pathParams[@"paymentID"] = paymentID;
    }
    if (transactionID != nil) {
        pathParams[@"transactionID"] = transactionID;
    }

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary* headerParams = [NSMutableDictionary dictionaryWithDictionary:self.apiClient.configuration.defaultHeaders];
    [headerParams addEntriesFromDictionary:self.defaultHeaders];
    // HTTP header `Accept`
    NSString *acceptHeader = [self.apiClient.sanitizer selectHeaderAccept:@[]];
    if(acceptHeader.length > 0) {
        headerParams[@"Accept"] = acceptHeader;
    }

    // response content type
    NSString *responseContentType = [[acceptHeader componentsSeparatedByString:@", "] firstObject] ?: @"";

    // request content type
    NSString *requestContentType = [self.apiClient.sanitizer selectHeaderContentType:@[]];

    // Authentication setting
    NSArray *authSettings = @[@"auth"];

    id bodyParam = nil;
    NSMutableDictionary *formParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary *localVarFiles = [[NSMutableDictionary alloc] init];

    return [self.apiClient requestWithPath: resourcePath
                                    method: @"DELETE"
                                pathParams: pathParams
                               queryParams: queryParams
                                formParams: formParams
                                     files: localVarFiles
                                      body: bodyParam
                              headerParams: headerParams
                              authSettings: authSettings
                        requestContentType: requestContentType
                       responseContentType: responseContentType
                              responseType: nil
                           completionBlock: ^(id data, NSError *error) {
                                if(handler) {
                                    handler(error);
                                }
                           }
          ];
}

///
/// 
/// 
///  @param buyerID ID of the buyer. 
///
///  @param orderID ID of the order. 
///
///  @param paymentID ID of the payment. 
///
///  @returns NSObject*
///
-(NSNumber*) getWithBuyerID: (NSString*) buyerID
    orderID: (NSString*) orderID
    paymentID: (NSString*) paymentID
    completionHandler: (void (^)(NSObject* output, NSError* error)) handler {
    // verify the required parameter 'buyerID' is set
    if (buyerID == nil) {
        NSParameterAssert(buyerID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"buyerID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'orderID' is set
    if (orderID == nil) {
        NSParameterAssert(orderID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"orderID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'paymentID' is set
    if (paymentID == nil) {
        NSParameterAssert(paymentID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"paymentID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}"];

    // remove format in URL if needed
    [resourcePath replaceOccurrencesOfString:@".{format}" withString:@".json" options:0 range:NSMakeRange(0,resourcePath.length)];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];
    if (buyerID != nil) {
        pathParams[@"buyerID"] = buyerID;
    }
    if (orderID != nil) {
        pathParams[@"orderID"] = orderID;
    }
    if (paymentID != nil) {
        pathParams[@"paymentID"] = paymentID;
    }

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary* headerParams = [NSMutableDictionary dictionaryWithDictionary:self.apiClient.configuration.defaultHeaders];
    [headerParams addEntriesFromDictionary:self.defaultHeaders];
    // HTTP header `Accept`
    NSString *acceptHeader = [self.apiClient.sanitizer selectHeaderAccept:@[]];
    if(acceptHeader.length > 0) {
        headerParams[@"Accept"] = acceptHeader;
    }

    // response content type
    NSString *responseContentType = [[acceptHeader componentsSeparatedByString:@", "] firstObject] ?: @"";

    // request content type
    NSString *requestContentType = [self.apiClient.sanitizer selectHeaderContentType:@[]];

    // Authentication setting
    NSArray *authSettings = @[@"auth"];

    id bodyParam = nil;
    NSMutableDictionary *formParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary *localVarFiles = [[NSMutableDictionary alloc] init];

    return [self.apiClient requestWithPath: resourcePath
                                    method: @"GET"
                                pathParams: pathParams
                               queryParams: queryParams
                                formParams: formParams
                                     files: localVarFiles
                                      body: bodyParam
                              headerParams: headerParams
                              authSettings: authSettings
                        requestContentType: requestContentType
                       responseContentType: responseContentType
                              responseType: @"NSObject*"
                           completionBlock: ^(id data, NSError *error) {
                                if(handler) {
                                    handler((NSObject*)data, error);
                                }
                           }
          ];
}

///
/// 
/// 
///  @param buyerID ID of the buyer. 
///
///  @param orderID ID of the order. 
///
///  @param search Word or phrase to search for. (optional)
///
///  @param searchOn Comma-delimited list of fields to search on. (optional)
///
///  @param sortBy Comma-delimited list of fields to sort by. (optional)
///
///  @param page Page of results to return. Default: 1 (optional)
///
///  @param pageSize Number of results to return per page. Default: 20, max: 100. (optional)
///
///  @returns NSObject*
///
-(NSNumber*) listWithBuyerID: (NSString*) buyerID
    orderID: (NSString*) orderID
    search: (NSString*) search
    searchOn: (NSString*) searchOn
    sortBy: (NSString*) sortBy
    page: (NSNumber*) page
    pageSize: (NSNumber*) pageSize
    completionHandler: (void (^)(NSObject* output, NSError* error)) handler {
    // verify the required parameter 'buyerID' is set
    if (buyerID == nil) {
        NSParameterAssert(buyerID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"buyerID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'orderID' is set
    if (orderID == nil) {
        NSParameterAssert(orderID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"orderID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/buyers/{buyerID}/orders/{orderID}/payments"];

    // remove format in URL if needed
    [resourcePath replaceOccurrencesOfString:@".{format}" withString:@".json" options:0 range:NSMakeRange(0,resourcePath.length)];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];
    if (buyerID != nil) {
        pathParams[@"buyerID"] = buyerID;
    }
    if (orderID != nil) {
        pathParams[@"orderID"] = orderID;
    }

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];
    if (search != nil) {
        queryParams[@"search"] = search;
    }
    if (searchOn != nil) {
        queryParams[@"searchOn"] = searchOn;
    }
    if (sortBy != nil) {
        queryParams[@"sortBy"] = sortBy;
    }
    if (page != nil) {
        queryParams[@"page"] = page;
    }
    if (pageSize != nil) {
        queryParams[@"pageSize"] = pageSize;
    }
    NSMutableDictionary* headerParams = [NSMutableDictionary dictionaryWithDictionary:self.apiClient.configuration.defaultHeaders];
    [headerParams addEntriesFromDictionary:self.defaultHeaders];
    // HTTP header `Accept`
    NSString *acceptHeader = [self.apiClient.sanitizer selectHeaderAccept:@[]];
    if(acceptHeader.length > 0) {
        headerParams[@"Accept"] = acceptHeader;
    }

    // response content type
    NSString *responseContentType = [[acceptHeader componentsSeparatedByString:@", "] firstObject] ?: @"";

    // request content type
    NSString *requestContentType = [self.apiClient.sanitizer selectHeaderContentType:@[]];

    // Authentication setting
    NSArray *authSettings = @[@"auth"];

    id bodyParam = nil;
    NSMutableDictionary *formParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary *localVarFiles = [[NSMutableDictionary alloc] init];

    return [self.apiClient requestWithPath: resourcePath
                                    method: @"GET"
                                pathParams: pathParams
                               queryParams: queryParams
                                formParams: formParams
                                     files: localVarFiles
                                      body: bodyParam
                              headerParams: headerParams
                              authSettings: authSettings
                        requestContentType: requestContentType
                       responseContentType: responseContentType
                              responseType: @"NSObject*"
                           completionBlock: ^(id data, NSError *error) {
                                if(handler) {
                                    handler((NSObject*)data, error);
                                }
                           }
          ];
}

///
/// 
/// 
///  @param buyerID ID of the buyer. 
///
///  @param orderID ID of the order. 
///
///  @param paymentID ID of the payment. 
///
///  @param partialPayment  
///
///  @returns NSObject*
///
-(NSNumber*) patchWithBuyerID: (NSString*) buyerID
    orderID: (NSString*) orderID
    paymentID: (NSString*) paymentID
    partialPayment: (SWGPayment*) partialPayment
    completionHandler: (void (^)(NSObject* output, NSError* error)) handler {
    // verify the required parameter 'buyerID' is set
    if (buyerID == nil) {
        NSParameterAssert(buyerID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"buyerID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'orderID' is set
    if (orderID == nil) {
        NSParameterAssert(orderID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"orderID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'paymentID' is set
    if (paymentID == nil) {
        NSParameterAssert(paymentID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"paymentID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'partialPayment' is set
    if (partialPayment == nil) {
        NSParameterAssert(partialPayment);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"partialPayment"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}"];

    // remove format in URL if needed
    [resourcePath replaceOccurrencesOfString:@".{format}" withString:@".json" options:0 range:NSMakeRange(0,resourcePath.length)];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];
    if (buyerID != nil) {
        pathParams[@"buyerID"] = buyerID;
    }
    if (orderID != nil) {
        pathParams[@"orderID"] = orderID;
    }
    if (paymentID != nil) {
        pathParams[@"paymentID"] = paymentID;
    }

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary* headerParams = [NSMutableDictionary dictionaryWithDictionary:self.apiClient.configuration.defaultHeaders];
    [headerParams addEntriesFromDictionary:self.defaultHeaders];
    // HTTP header `Accept`
    NSString *acceptHeader = [self.apiClient.sanitizer selectHeaderAccept:@[]];
    if(acceptHeader.length > 0) {
        headerParams[@"Accept"] = acceptHeader;
    }

    // response content type
    NSString *responseContentType = [[acceptHeader componentsSeparatedByString:@", "] firstObject] ?: @"";

    // request content type
    NSString *requestContentType = [self.apiClient.sanitizer selectHeaderContentType:@[]];

    // Authentication setting
    NSArray *authSettings = @[@"auth"];

    id bodyParam = nil;
    NSMutableDictionary *formParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary *localVarFiles = [[NSMutableDictionary alloc] init];
    bodyParam = partialPayment;

    return [self.apiClient requestWithPath: resourcePath
                                    method: @"PATCH"
                                pathParams: pathParams
                               queryParams: queryParams
                                formParams: formParams
                                     files: localVarFiles
                                      body: bodyParam
                              headerParams: headerParams
                              authSettings: authSettings
                        requestContentType: requestContentType
                       responseContentType: responseContentType
                              responseType: @"NSObject*"
                           completionBlock: ^(id data, NSError *error) {
                                if(handler) {
                                    handler((NSObject*)data, error);
                                }
                           }
          ];
}

///
/// 
/// 
///  @param buyerID ID of the buyer. 
///
///  @param orderID ID of the order. 
///
///  @param paymentID ID of the payment. 
///
///  @param transactionID ID of the transaction. 
///
///  @param partialTransaction  
///
///  @returns NSObject*
///
-(NSNumber*) patchTransactionWithBuyerID: (NSString*) buyerID
    orderID: (NSString*) orderID
    paymentID: (NSString*) paymentID
    transactionID: (NSString*) transactionID
    partialTransaction: (SWGPaymentTransaction*) partialTransaction
    completionHandler: (void (^)(NSObject* output, NSError* error)) handler {
    // verify the required parameter 'buyerID' is set
    if (buyerID == nil) {
        NSParameterAssert(buyerID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"buyerID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'orderID' is set
    if (orderID == nil) {
        NSParameterAssert(orderID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"orderID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'paymentID' is set
    if (paymentID == nil) {
        NSParameterAssert(paymentID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"paymentID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'transactionID' is set
    if (transactionID == nil) {
        NSParameterAssert(transactionID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"transactionID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'partialTransaction' is set
    if (partialTransaction == nil) {
        NSParameterAssert(partialTransaction);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"partialTransaction"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}/transactions/{transactionID}"];

    // remove format in URL if needed
    [resourcePath replaceOccurrencesOfString:@".{format}" withString:@".json" options:0 range:NSMakeRange(0,resourcePath.length)];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];
    if (buyerID != nil) {
        pathParams[@"buyerID"] = buyerID;
    }
    if (orderID != nil) {
        pathParams[@"orderID"] = orderID;
    }
    if (paymentID != nil) {
        pathParams[@"paymentID"] = paymentID;
    }
    if (transactionID != nil) {
        pathParams[@"transactionID"] = transactionID;
    }

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary* headerParams = [NSMutableDictionary dictionaryWithDictionary:self.apiClient.configuration.defaultHeaders];
    [headerParams addEntriesFromDictionary:self.defaultHeaders];
    // HTTP header `Accept`
    NSString *acceptHeader = [self.apiClient.sanitizer selectHeaderAccept:@[]];
    if(acceptHeader.length > 0) {
        headerParams[@"Accept"] = acceptHeader;
    }

    // response content type
    NSString *responseContentType = [[acceptHeader componentsSeparatedByString:@", "] firstObject] ?: @"";

    // request content type
    NSString *requestContentType = [self.apiClient.sanitizer selectHeaderContentType:@[]];

    // Authentication setting
    NSArray *authSettings = @[@"auth"];

    id bodyParam = nil;
    NSMutableDictionary *formParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary *localVarFiles = [[NSMutableDictionary alloc] init];
    bodyParam = partialTransaction;

    return [self.apiClient requestWithPath: resourcePath
                                    method: @"PATCH"
                                pathParams: pathParams
                               queryParams: queryParams
                                formParams: formParams
                                     files: localVarFiles
                                      body: bodyParam
                              headerParams: headerParams
                              authSettings: authSettings
                        requestContentType: requestContentType
                       responseContentType: responseContentType
                              responseType: @"NSObject*"
                           completionBlock: ^(id data, NSError *error) {
                                if(handler) {
                                    handler((NSObject*)data, error);
                                }
                           }
          ];
}

///
/// 
/// 
///  @param buyerID ID of the buyer. 
///
///  @param orderID ID of the order. 
///
///  @param paymentID ID of the payment. 
///
///  @param payment  
///
///  @returns NSObject*
///
-(NSNumber*) updateWithBuyerID: (NSString*) buyerID
    orderID: (NSString*) orderID
    paymentID: (NSString*) paymentID
    payment: (SWGPayment*) payment
    completionHandler: (void (^)(NSObject* output, NSError* error)) handler {
    // verify the required parameter 'buyerID' is set
    if (buyerID == nil) {
        NSParameterAssert(buyerID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"buyerID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'orderID' is set
    if (orderID == nil) {
        NSParameterAssert(orderID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"orderID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'paymentID' is set
    if (paymentID == nil) {
        NSParameterAssert(paymentID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"paymentID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'payment' is set
    if (payment == nil) {
        NSParameterAssert(payment);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"payment"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}"];

    // remove format in URL if needed
    [resourcePath replaceOccurrencesOfString:@".{format}" withString:@".json" options:0 range:NSMakeRange(0,resourcePath.length)];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];
    if (buyerID != nil) {
        pathParams[@"buyerID"] = buyerID;
    }
    if (orderID != nil) {
        pathParams[@"orderID"] = orderID;
    }
    if (paymentID != nil) {
        pathParams[@"paymentID"] = paymentID;
    }

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary* headerParams = [NSMutableDictionary dictionaryWithDictionary:self.apiClient.configuration.defaultHeaders];
    [headerParams addEntriesFromDictionary:self.defaultHeaders];
    // HTTP header `Accept`
    NSString *acceptHeader = [self.apiClient.sanitizer selectHeaderAccept:@[]];
    if(acceptHeader.length > 0) {
        headerParams[@"Accept"] = acceptHeader;
    }

    // response content type
    NSString *responseContentType = [[acceptHeader componentsSeparatedByString:@", "] firstObject] ?: @"";

    // request content type
    NSString *requestContentType = [self.apiClient.sanitizer selectHeaderContentType:@[]];

    // Authentication setting
    NSArray *authSettings = @[@"auth"];

    id bodyParam = nil;
    NSMutableDictionary *formParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary *localVarFiles = [[NSMutableDictionary alloc] init];
    bodyParam = payment;

    return [self.apiClient requestWithPath: resourcePath
                                    method: @"PUT"
                                pathParams: pathParams
                               queryParams: queryParams
                                formParams: formParams
                                     files: localVarFiles
                                      body: bodyParam
                              headerParams: headerParams
                              authSettings: authSettings
                        requestContentType: requestContentType
                       responseContentType: responseContentType
                              responseType: @"NSObject*"
                           completionBlock: ^(id data, NSError *error) {
                                if(handler) {
                                    handler((NSObject*)data, error);
                                }
                           }
          ];
}

///
/// 
/// 
///  @param buyerID ID of the buyer. 
///
///  @param orderID ID of the order. 
///
///  @param paymentID ID of the payment. 
///
///  @param transactionID ID of the transaction. 
///
///  @param transaction  
///
///  @returns NSObject*
///
-(NSNumber*) updateTransactionWithBuyerID: (NSString*) buyerID
    orderID: (NSString*) orderID
    paymentID: (NSString*) paymentID
    transactionID: (NSString*) transactionID
    transaction: (SWGPaymentTransaction*) transaction
    completionHandler: (void (^)(NSObject* output, NSError* error)) handler {
    // verify the required parameter 'buyerID' is set
    if (buyerID == nil) {
        NSParameterAssert(buyerID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"buyerID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'orderID' is set
    if (orderID == nil) {
        NSParameterAssert(orderID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"orderID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'paymentID' is set
    if (paymentID == nil) {
        NSParameterAssert(paymentID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"paymentID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'transactionID' is set
    if (transactionID == nil) {
        NSParameterAssert(transactionID);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"transactionID"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'transaction' is set
    if (transaction == nil) {
        NSParameterAssert(transaction);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"transaction"] };
            NSError* error = [NSError errorWithDomain:kSWGPaymentApiErrorDomain code:kSWGPaymentApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/buyers/{buyerID}/orders/{orderID}/payments/{paymentID}/transactions/{transactionID}"];

    // remove format in URL if needed
    [resourcePath replaceOccurrencesOfString:@".{format}" withString:@".json" options:0 range:NSMakeRange(0,resourcePath.length)];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];
    if (buyerID != nil) {
        pathParams[@"buyerID"] = buyerID;
    }
    if (orderID != nil) {
        pathParams[@"orderID"] = orderID;
    }
    if (paymentID != nil) {
        pathParams[@"paymentID"] = paymentID;
    }
    if (transactionID != nil) {
        pathParams[@"transactionID"] = transactionID;
    }

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary* headerParams = [NSMutableDictionary dictionaryWithDictionary:self.apiClient.configuration.defaultHeaders];
    [headerParams addEntriesFromDictionary:self.defaultHeaders];
    // HTTP header `Accept`
    NSString *acceptHeader = [self.apiClient.sanitizer selectHeaderAccept:@[]];
    if(acceptHeader.length > 0) {
        headerParams[@"Accept"] = acceptHeader;
    }

    // response content type
    NSString *responseContentType = [[acceptHeader componentsSeparatedByString:@", "] firstObject] ?: @"";

    // request content type
    NSString *requestContentType = [self.apiClient.sanitizer selectHeaderContentType:@[]];

    // Authentication setting
    NSArray *authSettings = @[@"auth"];

    id bodyParam = nil;
    NSMutableDictionary *formParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary *localVarFiles = [[NSMutableDictionary alloc] init];
    bodyParam = transaction;

    return [self.apiClient requestWithPath: resourcePath
                                    method: @"PUT"
                                pathParams: pathParams
                               queryParams: queryParams
                                formParams: formParams
                                     files: localVarFiles
                                      body: bodyParam
                              headerParams: headerParams
                              authSettings: authSettings
                        requestContentType: requestContentType
                       responseContentType: responseContentType
                              responseType: @"NSObject*"
                           completionBlock: ^(id data, NSError *error) {
                                if(handler) {
                                    handler((NSObject*)data, error);
                                }
                           }
          ];
}



@end