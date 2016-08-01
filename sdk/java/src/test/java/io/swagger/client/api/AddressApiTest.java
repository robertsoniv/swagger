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
import io.swagger.client.model.Address;
import io.swagger.client.model.AddressAssignment;
import org.junit.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for AddressApi
 */
public class AddressApiTest {

    private final AddressApi api = new AddressApi();

    
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
        Address address = null;
        // Object response = api.create(buyerID, address);

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
        String addressID = null;
        // api.delete(buyerID, addressID);

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
    public void deleteAssignmentTest() throws ApiException {
        String buyerID = null;
        String addressID = null;
        String userID = null;
        String userGroupID = null;
        // api.deleteAssignment(buyerID, addressID, userID, userGroupID);

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
        String addressID = null;
        // Object response = api.get(buyerID, addressID);

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
        String search = null;
        String searchOn = null;
        String sortBy = null;
        Integer page = null;
        Integer pageSize = null;
        // Object response = api.list(buyerID, search, searchOn, sortBy, page, pageSize);

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
    public void listAssignmentsTest() throws ApiException {
        String buyerID = null;
        String addressID = null;
        String userID = null;
        String userGroupID = null;
        String level = null;
        Boolean isShipping = null;
        Boolean isBilling = null;
        Integer page = null;
        Integer pageSize = null;
        // Object response = api.listAssignments(buyerID, addressID, userID, userGroupID, level, isShipping, isBilling, page, pageSize);

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
        String addressID = null;
        Address address = null;
        // Object response = api.patch(buyerID, addressID, address);

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
    public void saveAssignmentTest() throws ApiException {
        String buyerID = null;
        AddressAssignment assignment = null;
        // api.saveAssignment(buyerID, assignment);

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
        String addressID = null;
        Address address = null;
        // Object response = api.update(buyerID, addressID, address);

        // TODO: test validations
    }
    
}