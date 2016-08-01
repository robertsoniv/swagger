/**
 * OrderCloud
 * A full ecommerce backend as a service.
 *
 * OpenAPI spec version: 0.1
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package io.swagger.client.model;


import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;


@ApiModel(description = "")
public class PromotionAssignment  {
  
  @SerializedName("PromotionID")
  private String promotionID = null;
  @SerializedName("BuyerID")
  private String buyerID = null;
  @SerializedName("UserID")
  private String userID = null;
  @SerializedName("UserGroupID")
  private String userGroupID = null;

  /**
   **/
  @ApiModelProperty(value = "")
  public String getPromotionID() {
    return promotionID;
  }
  public void setPromotionID(String promotionID) {
    this.promotionID = promotionID;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getBuyerID() {
    return buyerID;
  }
  public void setBuyerID(String buyerID) {
    this.buyerID = buyerID;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getUserID() {
    return userID;
  }
  public void setUserID(String userID) {
    this.userID = userID;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getUserGroupID() {
    return userGroupID;
  }
  public void setUserGroupID(String userGroupID) {
    this.userGroupID = userGroupID;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PromotionAssignment promotionAssignment = (PromotionAssignment) o;
    return (promotionID == null ? promotionAssignment.promotionID == null : promotionID.equals(promotionAssignment.promotionID)) &&
        (buyerID == null ? promotionAssignment.buyerID == null : buyerID.equals(promotionAssignment.buyerID)) &&
        (userID == null ? promotionAssignment.userID == null : userID.equals(promotionAssignment.userID)) &&
        (userGroupID == null ? promotionAssignment.userGroupID == null : userGroupID.equals(promotionAssignment.userGroupID));
  }

  @Override
  public int hashCode() {
    int result = 17;
    result = 31 * result + (promotionID == null ? 0: promotionID.hashCode());
    result = 31 * result + (buyerID == null ? 0: buyerID.hashCode());
    result = 31 * result + (userID == null ? 0: userID.hashCode());
    result = 31 * result + (userGroupID == null ? 0: userGroupID.hashCode());
    return result;
  }

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class PromotionAssignment {\n");
    
    sb.append("  promotionID: ").append(promotionID).append("\n");
    sb.append("  buyerID: ").append(buyerID).append("\n");
    sb.append("  userID: ").append(userID).append("\n");
    sb.append("  userGroupID: ").append(userGroupID).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}