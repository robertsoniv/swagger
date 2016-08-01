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


package io.swagger.client.api;

import io.swagger.client.ApiException;
import io.swagger.client.model.LineItem;
import io.swagger.client.model.Address;
import org.junit.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for LineItemApi
 */
public class LineItemApiTest {

    private final LineItemApi api = new LineItemApi();

    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createTest() throws ApiException {
        String buyerID = null;
        String orderID = null;
        LineItem lineItem = null;
        // Object response = api.create(buyerID, orderID, lineItem);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteTest() throws ApiException {
        String buyerID = null;
        String orderID = null;
        String lineItemID = null;
        // api.delete(buyerID, orderID, lineItemID);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getTest() throws ApiException {
        String buyerID = null;
        String orderID = null;
        String lineItemID = null;
        // Object response = api.get(buyerID, orderID, lineItemID);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listTest() throws ApiException {
        String buyerID = null;
        String orderID = null;
        String search = null;
        String searchOn = null;
        String sortBy = null;
        Integer page = null;
        Integer pageSize = null;
        // Object response = api.list(buyerID, orderID, search, searchOn, sortBy, page, pageSize);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void patchTest() throws ApiException {
        String buyerID = null;
        String orderID = null;
        String lineItemID = null;
        LineItem partialLineItem = null;
        // Object response = api.patch(buyerID, orderID, lineItemID, partialLineItem);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void patchShippingAddressTest() throws ApiException {
        String buyerID = null;
        String orderID = null;
        String lineItemID = null;
        Address address = null;
        // Object response = api.patchShippingAddress(buyerID, orderID, lineItemID, address);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void setShippingAddressTest() throws ApiException {
        String buyerID = null;
        String orderID = null;
        String lineItemID = null;
        Address address = null;
        // Object response = api.setShippingAddress(buyerID, orderID, lineItemID, address);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateTest() throws ApiException {
        String buyerID = null;
        String orderID = null;
        String lineItemID = null;
        LineItem lineItem = null;
        // Object response = api.update(buyerID, orderID, lineItemID, lineItem);

        // TODO: test validations
    }
    
}