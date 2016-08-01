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

import java.util.Date;

import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;


@ApiModel(description = "")
public class Promotion  {
  
  @SerializedName("ID")
  private String ID = null;
  @SerializedName("Code")
  private String code = null;
  @SerializedName("Name")
  private String name = null;
  @SerializedName("UsagesRemaining")
  private Integer usagesRemaining = null;
  @SerializedName("Description")
  private String description = null;
  @SerializedName("FinePrint")
  private String finePrint = null;
  @SerializedName("StartDate")
  private Date startDate = null;
  @SerializedName("ExpirationDate")
  private Date expirationDate = null;
  @SerializedName("EligibleExpression")
  private String eligibleExpression = null;
  @SerializedName("ValueExpression")
  private String valueExpression = null;
  @SerializedName("CanCombine")
  private Boolean canCombine = null;
  @SerializedName("xp")
  private Object xp = null;

  /**
   **/
  @ApiModelProperty(value = "")
  public String getID() {
    return ID;
  }
  public void setID(String ID) {
    this.ID = ID;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getCode() {
    return code;
  }
  public void setCode(String code) {
    this.code = code;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public Integer getUsagesRemaining() {
    return usagesRemaining;
  }
  public void setUsagesRemaining(Integer usagesRemaining) {
    this.usagesRemaining = usagesRemaining;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getDescription() {
    return description;
  }
  public void setDescription(String description) {
    this.description = description;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getFinePrint() {
    return finePrint;
  }
  public void setFinePrint(String finePrint) {
    this.finePrint = finePrint;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public Date getStartDate() {
    return startDate;
  }
  public void setStartDate(Date startDate) {
    this.startDate = startDate;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public Date getExpirationDate() {
    return expirationDate;
  }
  public void setExpirationDate(Date expirationDate) {
    this.expirationDate = expirationDate;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getEligibleExpression() {
    return eligibleExpression;
  }
  public void setEligibleExpression(String eligibleExpression) {
    this.eligibleExpression = eligibleExpression;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getValueExpression() {
    return valueExpression;
  }
  public void setValueExpression(String valueExpression) {
    this.valueExpression = valueExpression;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public Boolean getCanCombine() {
    return canCombine;
  }
  public void setCanCombine(Boolean canCombine) {
    this.canCombine = canCombine;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public Object getXp() {
    return xp;
  }
  public void setXp(Object xp) {
    this.xp = xp;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Promotion promotion = (Promotion) o;
    return (ID == null ? promotion.ID == null : ID.equals(promotion.ID)) &&
        (code == null ? promotion.code == null : code.equals(promotion.code)) &&
        (name == null ? promotion.name == null : name.equals(promotion.name)) &&
        (usagesRemaining == null ? promotion.usagesRemaining == null : usagesRemaining.equals(promotion.usagesRemaining)) &&
        (description == null ? promotion.description == null : description.equals(promotion.description)) &&
        (finePrint == null ? promotion.finePrint == null : finePrint.equals(promotion.finePrint)) &&
        (startDate == null ? promotion.startDate == null : startDate.equals(promotion.startDate)) &&
        (expirationDate == null ? promotion.expirationDate == null : expirationDate.equals(promotion.expirationDate)) &&
        (eligibleExpression == null ? promotion.eligibleExpression == null : eligibleExpression.equals(promotion.eligibleExpression)) &&
        (valueExpression == null ? promotion.valueExpression == null : valueExpression.equals(promotion.valueExpression)) &&
        (canCombine == null ? promotion.canCombine == null : canCombine.equals(promotion.canCombine)) &&
        (xp == null ? promotion.xp == null : xp.equals(promotion.xp));
  }

  @Override
  public int hashCode() {
    int result = 17;
    result = 31 * result + (ID == null ? 0: ID.hashCode());
    result = 31 * result + (code == null ? 0: code.hashCode());
    result = 31 * result + (name == null ? 0: name.hashCode());
    result = 31 * result + (usagesRemaining == null ? 0: usagesRemaining.hashCode());
    result = 31 * result + (description == null ? 0: description.hashCode());
    result = 31 * result + (finePrint == null ? 0: finePrint.hashCode());
    result = 31 * result + (startDate == null ? 0: startDate.hashCode());
    result = 31 * result + (expirationDate == null ? 0: expirationDate.hashCode());
    result = 31 * result + (eligibleExpression == null ? 0: eligibleExpression.hashCode());
    result = 31 * result + (valueExpression == null ? 0: valueExpression.hashCode());
    result = 31 * result + (canCombine == null ? 0: canCombine.hashCode());
    result = 31 * result + (xp == null ? 0: xp.hashCode());
    return result;
  }

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class Promotion {\n");
    
    sb.append("  ID: ").append(ID).append("\n");
    sb.append("  code: ").append(code).append("\n");
    sb.append("  name: ").append(name).append("\n");
    sb.append("  usagesRemaining: ").append(usagesRemaining).append("\n");
    sb.append("  description: ").append(description).append("\n");
    sb.append("  finePrint: ").append(finePrint).append("\n");
    sb.append("  startDate: ").append(startDate).append("\n");
    sb.append("  expirationDate: ").append(expirationDate).append("\n");
    sb.append("  eligibleExpression: ").append(eligibleExpression).append("\n");
    sb.append("  valueExpression: ").append(valueExpression).append("\n");
    sb.append("  canCombine: ").append(canCombine).append("\n");
    sb.append("  xp: ").append(xp).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}