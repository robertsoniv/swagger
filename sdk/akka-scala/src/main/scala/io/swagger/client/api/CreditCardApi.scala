/**
 * NOTE: This class is auto generated by the akka-scala (beta) swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * For any issue or feedback, please open a ticket via https://github.com/swagger-api/swagger-codegen/issues/new
 */
package io.swagger.client.api

import io.swagger.client.model.Any
import io.swagger.client.model.CreditCard
import io.swagger.client.model.CreditCardAssignment
import io.swagger.client.core._
import io.swagger.client.core.CollectionFormats._
import io.swagger.client.core.ApiKeyLocations._

object CreditCardApi {

  /**
   * 
   * 
   * Expected answers:
   *   code 201 : Any 
   * 
   * @param buyerID ID of the buyer.
   * @param card 
   */
  def create(buyerID: String, card: CreditCard): ApiRequest[Any] =
    ApiRequest[Any](ApiMethods.POST, "https://api.ordercloud.io/v1", "/buyers/{buyerID}/creditcards", "application/json")
      .withBody(card)
      .withPathParam("buyerID", buyerID)
      .withSuccessResponse[Any](201)
        /**
   * 
   * 
   * Expected answers:
   *   code 204 :  
   * 
   * @param buyerID ID of the buyer.
   * @param creditCardID ID of the credit card.
   */
  def delete(buyerID: String, creditCardID: String): ApiRequest[Unit] =
    ApiRequest[Unit](ApiMethods.DELETE, "https://api.ordercloud.io/v1", "/buyers/{buyerID}/creditcards/{creditCardID}", "application/json")
      .withPathParam("buyerID", buyerID)
      .withPathParam("creditCardID", creditCardID)
      .withSuccessResponse[Unit](204)
        /**
   * 
   * 
   * Expected answers:
   *   code 204 :  
   * 
   * @param buyerID ID of the buyer.
   * @param creditCardID ID of the credit card.
   * @param userID ID of the user.
   * @param userGroupID ID of the user group.
   */
  def deleteAssignment(buyerID: String, creditCardID: String, userID: Option[String] = None, userGroupID: Option[String] = None): ApiRequest[Unit] =
    ApiRequest[Unit](ApiMethods.DELETE, "https://api.ordercloud.io/v1", "/buyers/{buyerID}/creditcards/{creditCardID}/assignments", "application/json")
      .withQueryParam("userID", userID)
      .withQueryParam("userGroupID", userGroupID)
      .withPathParam("buyerID", buyerID)
      .withPathParam("creditCardID", creditCardID)
      .withSuccessResponse[Unit](204)
        /**
   * 
   * 
   * Expected answers:
   *   code 200 : Any 
   * 
   * @param buyerID ID of the buyer.
   * @param creditCardID ID of the credit card.
   */
  def get(buyerID: String, creditCardID: String): ApiRequest[Any] =
    ApiRequest[Any](ApiMethods.GET, "https://api.ordercloud.io/v1", "/buyers/{buyerID}/creditcards/{creditCardID}", "application/json")
      .withPathParam("buyerID", buyerID)
      .withPathParam("creditCardID", creditCardID)
      .withSuccessResponse[Any](200)
        /**
   * 
   * 
   * Expected answers:
   *   code 200 : Any 
   * 
   * @param buyerID ID of the buyer.
   * @param search Word or phrase to search for.
   * @param searchOn Comma-delimited list of fields to search on.
   * @param sortBy Comma-delimited list of fields to sort by.
   * @param page Page of results to return. Default: 1
   * @param pageSize Number of results to return per page. Default: 20, max: 100.
   */
  def list(buyerID: String, search: Option[String] = None, searchOn: Option[String] = None, sortBy: Option[String] = None, page: Option[Int] = None, pageSize: Option[Int] = None): ApiRequest[Any] =
    ApiRequest[Any](ApiMethods.GET, "https://api.ordercloud.io/v1", "/buyers/{buyerID}/creditcards", "application/json")
      .withQueryParam("search", search)
      .withQueryParam("searchOn", searchOn)
      .withQueryParam("sortBy", sortBy)
      .withQueryParam("page", page)
      .withQueryParam("pageSize", pageSize)
      .withPathParam("buyerID", buyerID)
      .withSuccessResponse[Any](200)
        /**
   * 
   * 
   * Expected answers:
   *   code 200 : Any 
   * 
   * @param buyerID ID of the buyer.
   * @param creditCardID ID of the credit card.
   * @param userID ID of the user.
   * @param userGroupID ID of the user group.
   * @param level Level of the credit card.
   * @param page Page of results to return. Default: 1
   * @param pageSize Number of results to return per page. Default: 20, max: 100.
   */
  def listAssignments(buyerID: String, creditCardID: Option[String] = None, userID: Option[String] = None, userGroupID: Option[String] = None, level: Option[String] = None, page: Option[Int] = None, pageSize: Option[Int] = None): ApiRequest[Any] =
    ApiRequest[Any](ApiMethods.GET, "https://api.ordercloud.io/v1", "/buyers/{buyerID}/creditcards/assignments", "application/json")
      .withQueryParam("creditCardID", creditCardID)
      .withQueryParam("userID", userID)
      .withQueryParam("userGroupID", userGroupID)
      .withQueryParam("level", level)
      .withQueryParam("page", page)
      .withQueryParam("pageSize", pageSize)
      .withPathParam("buyerID", buyerID)
      .withSuccessResponse[Any](200)
        /**
   * 
   * 
   * Expected answers:
   *   code 200 : Any 
   * 
   * @param buyerID ID of the buyer.
   * @param creditCardID ID of the credit card.
   * @param card 
   */
  def patch(buyerID: String, creditCardID: String, card: CreditCard): ApiRequest[Any] =
    ApiRequest[Any](ApiMethods.PATCH, "https://api.ordercloud.io/v1", "/buyers/{buyerID}/creditcards/{creditCardID}", "application/json")
      .withBody(card)
      .withPathParam("buyerID", buyerID)
      .withPathParam("creditCardID", creditCardID)
      .withSuccessResponse[Any](200)
        /**
   * 
   * 
   * Expected answers:
   *   code 204 :  
   * 
   * @param buyerID ID of the buyer.
   * @param assignment 
   */
  def saveAssignment(buyerID: String, assignment: CreditCardAssignment): ApiRequest[Unit] =
    ApiRequest[Unit](ApiMethods.POST, "https://api.ordercloud.io/v1", "/buyers/{buyerID}/creditcards/assignments", "application/json")
      .withBody(assignment)
      .withPathParam("buyerID", buyerID)
      .withSuccessResponse[Unit](204)
        /**
   * 
   * 
   * Expected answers:
   *   code 200 : Any 
   * 
   * @param buyerID ID of the buyer.
   * @param creditCardID ID of the credit card.
   * @param card 
   */
  def update(buyerID: String, creditCardID: String, card: CreditCard): ApiRequest[Any] =
    ApiRequest[Any](ApiMethods.PUT, "https://api.ordercloud.io/v1", "/buyers/{buyerID}/creditcards/{creditCardID}", "application/json")
      .withBody(card)
      .withPathParam("buyerID", buyerID)
      .withPathParam("creditCardID", creditCardID)
      .withSuccessResponse[Any](200)
      

}
