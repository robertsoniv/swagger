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

import java.math.BigDecimal;

import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;


@ApiModel(description = "")
public class Product  {
  
  @SerializedName("ID")
  private String ID = null;
  @SerializedName("Name")
  private String name = null;
  @SerializedName("Description")
  private String description = null;
  @SerializedName("QuantityMultiplier")
  private Integer quantityMultiplier = null;
  @SerializedName("ShipWeight")
  private BigDecimal shipWeight = null;
  @SerializedName("Active")
  private Boolean active = null;
  @SerializedName("Type")
  private String type = null;
  @SerializedName("InventoryEnabled")
  private Boolean inventoryEnabled = null;
  @SerializedName("InventoryNotificationPoint")
  private Integer inventoryNotificationPoint = null;
  @SerializedName("VariantLevelInventory")
  private Boolean variantLevelInventory = null;
  @SerializedName("xp")
  private Object xp = null;
  @SerializedName("AllowOrderExceedInventory")
  private Boolean allowOrderExceedInventory = null;
  @SerializedName("InventoryVisible")
  private Boolean inventoryVisible = null;

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
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
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
  public Integer getQuantityMultiplier() {
    return quantityMultiplier;
  }
  public void setQuantityMultiplier(Integer quantityMultiplier) {
    this.quantityMultiplier = quantityMultiplier;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public BigDecimal getShipWeight() {
    return shipWeight;
  }
  public void setShipWeight(BigDecimal shipWeight) {
    this.shipWeight = shipWeight;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public Boolean getActive() {
    return active;
  }
  public void setActive(Boolean active) {
    this.active = active;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getType() {
    return type;
  }
  public void setType(String type) {
    this.type = type;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public Boolean getInventoryEnabled() {
    return inventoryEnabled;
  }
  public void setInventoryEnabled(Boolean inventoryEnabled) {
    this.inventoryEnabled = inventoryEnabled;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public Integer getInventoryNotificationPoint() {
    return inventoryNotificationPoint;
  }
  public void setInventoryNotificationPoint(Integer inventoryNotificationPoint) {
    this.inventoryNotificationPoint = inventoryNotificationPoint;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public Boolean getVariantLevelInventory() {
    return variantLevelInventory;
  }
  public void setVariantLevelInventory(Boolean variantLevelInventory) {
    this.variantLevelInventory = variantLevelInventory;
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

  /**
   **/
  @ApiModelProperty(value = "")
  public Boolean getAllowOrderExceedInventory() {
    return allowOrderExceedInventory;
  }
  public void setAllowOrderExceedInventory(Boolean allowOrderExceedInventory) {
    this.allowOrderExceedInventory = allowOrderExceedInventory;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public Boolean getInventoryVisible() {
    return inventoryVisible;
  }
  public void setInventoryVisible(Boolean inventoryVisible) {
    this.inventoryVisible = inventoryVisible;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Product product = (Product) o;
    return (ID == null ? product.ID == null : ID.equals(product.ID)) &&
        (name == null ? product.name == null : name.equals(product.name)) &&
        (description == null ? product.description == null : description.equals(product.description)) &&
        (quantityMultiplier == null ? product.quantityMultiplier == null : quantityMultiplier.equals(product.quantityMultiplier)) &&
        (shipWeight == null ? product.shipWeight == null : shipWeight.equals(product.shipWeight)) &&
        (active == null ? product.active == null : active.equals(product.active)) &&
        (type == null ? product.type == null : type.equals(product.type)) &&
        (inventoryEnabled == null ? product.inventoryEnabled == null : inventoryEnabled.equals(product.inventoryEnabled)) &&
        (inventoryNotificationPoint == null ? product.inventoryNotificationPoint == null : inventoryNotificationPoint.equals(product.inventoryNotificationPoint)) &&
        (variantLevelInventory == null ? product.variantLevelInventory == null : variantLevelInventory.equals(product.variantLevelInventory)) &&
        (xp == null ? product.xp == null : xp.equals(product.xp)) &&
        (allowOrderExceedInventory == null ? product.allowOrderExceedInventory == null : allowOrderExceedInventory.equals(product.allowOrderExceedInventory)) &&
        (inventoryVisible == null ? product.inventoryVisible == null : inventoryVisible.equals(product.inventoryVisible));
  }

  @Override
  public int hashCode() {
    int result = 17;
    result = 31 * result + (ID == null ? 0: ID.hashCode());
    result = 31 * result + (name == null ? 0: name.hashCode());
    result = 31 * result + (description == null ? 0: description.hashCode());
    result = 31 * result + (quantityMultiplier == null ? 0: quantityMultiplier.hashCode());
    result = 31 * result + (shipWeight == null ? 0: shipWeight.hashCode());
    result = 31 * result + (active == null ? 0: active.hashCode());
    result = 31 * result + (type == null ? 0: type.hashCode());
    result = 31 * result + (inventoryEnabled == null ? 0: inventoryEnabled.hashCode());
    result = 31 * result + (inventoryNotificationPoint == null ? 0: inventoryNotificationPoint.hashCode());
    result = 31 * result + (variantLevelInventory == null ? 0: variantLevelInventory.hashCode());
    result = 31 * result + (xp == null ? 0: xp.hashCode());
    result = 31 * result + (allowOrderExceedInventory == null ? 0: allowOrderExceedInventory.hashCode());
    result = 31 * result + (inventoryVisible == null ? 0: inventoryVisible.hashCode());
    return result;
  }

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class Product {\n");
    
    sb.append("  ID: ").append(ID).append("\n");
    sb.append("  name: ").append(name).append("\n");
    sb.append("  description: ").append(description).append("\n");
    sb.append("  quantityMultiplier: ").append(quantityMultiplier).append("\n");
    sb.append("  shipWeight: ").append(shipWeight).append("\n");
    sb.append("  active: ").append(active).append("\n");
    sb.append("  type: ").append(type).append("\n");
    sb.append("  inventoryEnabled: ").append(inventoryEnabled).append("\n");
    sb.append("  inventoryNotificationPoint: ").append(inventoryNotificationPoint).append("\n");
    sb.append("  variantLevelInventory: ").append(variantLevelInventory).append("\n");
    sb.append("  xp: ").append(xp).append("\n");
    sb.append("  allowOrderExceedInventory: ").append(allowOrderExceedInventory).append("\n");
    sb.append("  inventoryVisible: ").append(inventoryVisible).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}