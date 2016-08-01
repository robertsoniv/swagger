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
public class PasswordResetRequest  {
  
  @SerializedName("ClientID")
  private String clientID = null;
  @SerializedName("Email")
  private String email = null;
  @SerializedName("Username")
  private String username = null;
  @SerializedName("URL")
  private String URL = null;

  /**
   **/
  @ApiModelProperty(value = "")
  public String getClientID() {
    return clientID;
  }
  public void setClientID(String clientID) {
    this.clientID = clientID;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getEmail() {
    return email;
  }
  public void setEmail(String email) {
    this.email = email;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getUsername() {
    return username;
  }
  public void setUsername(String username) {
    this.username = username;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getURL() {
    return URL;
  }
  public void setURL(String URL) {
    this.URL = URL;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PasswordResetRequest passwordResetRequest = (PasswordResetRequest) o;
    return (clientID == null ? passwordResetRequest.clientID == null : clientID.equals(passwordResetRequest.clientID)) &&
        (email == null ? passwordResetRequest.email == null : email.equals(passwordResetRequest.email)) &&
        (username == null ? passwordResetRequest.username == null : username.equals(passwordResetRequest.username)) &&
        (URL == null ? passwordResetRequest.URL == null : URL.equals(passwordResetRequest.URL));
  }

  @Override
  public int hashCode() {
    int result = 17;
    result = 31 * result + (clientID == null ? 0: clientID.hashCode());
    result = 31 * result + (email == null ? 0: email.hashCode());
    result = 31 * result + (username == null ? 0: username.hashCode());
    result = 31 * result + (URL == null ? 0: URL.hashCode());
    return result;
  }

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class PasswordResetRequest {\n");
    
    sb.append("  clientID: ").append(clientID).append("\n");
    sb.append("  email: ").append(email).append("\n");
    sb.append("  username: ").append(username).append("\n");
    sb.append("  URL: ").append(URL).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}