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

/*
 * CategoryApi.h
 * 
 * 
 */
 
#ifndef CategoryApi_H_
#define CategoryApi_H_


#include "ApiClient.h"

#include <cpprest/details/basic_types.h>
#include "Category.h"
#include "Object.h"
#include "CategoryAssignment.h"
#include "CategoryProductAssignment.h"

namespace io {
namespace swagger {
namespace client {
namespace api {

using namespace io::swagger::client::model;

class  CategoryApi
{
public:
    CategoryApi( std::shared_ptr<ApiClient> apiClient );
    virtual ~CategoryApi();
    /// <summary>
    /// 
    /// </summary>
    /// <remarks>
    /// 
    /// </remarks>
    /// <param name="buyerID">ID of the buyer.</param>/// <param name="category"></param>
    pplx::task<std::shared_ptr<Object>> create(utility::string_t buyerID, std::shared_ptr<Category> category);
    /// <summary>
    /// 
    /// </summary>
    /// <remarks>
    /// 
    /// </remarks>
    /// <param name="buyerID">ID of the buyer.</param>/// <param name="categoryID">ID of the category.</param>
    pplx::task<void> delete(utility::string_t buyerID, utility::string_t categoryID);
    /// <summary>
    /// 
    /// </summary>
    /// <remarks>
    /// 
    /// </remarks>
    /// <param name="buyerID">ID of the buyer.</param>/// <param name="categoryID">ID of the category.</param>/// <param name="userID">ID of the user. (optional)</param>/// <param name="userGroupID">ID of the user group. (optional)</param>
    pplx::task<void> deleteAssignment(utility::string_t buyerID, utility::string_t categoryID, utility::string_t userID, utility::string_t userGroupID);
    /// <summary>
    /// 
    /// </summary>
    /// <remarks>
    /// 
    /// </remarks>
    /// <param name="buyerID">ID of the buyer.</param>/// <param name="categoryID">ID of the category.</param>/// <param name="productID">ID of the product.</param>
    pplx::task<void> deleteProductAssignment(utility::string_t buyerID, utility::string_t categoryID, utility::string_t productID);
    /// <summary>
    /// 
    /// </summary>
    /// <remarks>
    /// 
    /// </remarks>
    /// <param name="buyerID">ID of the buyer.</param>/// <param name="categoryID">ID of the category.</param>
    pplx::task<std::shared_ptr<Object>> get(utility::string_t buyerID, utility::string_t categoryID);
    /// <summary>
    /// 
    /// </summary>
    /// <remarks>
    /// 
    /// </remarks>
    /// <param name="buyerID">ID of the buyer.</param>/// <param name="parentID">ID of the parent. (optional)</param>/// <param name="depth">Depth of the category. (optional)</param>/// <param name="search">Word or phrase to search for. (optional)</param>/// <param name="searchOn">Comma-delimited list of fields to search on. (optional)</param>/// <param name="sortBy">Comma-delimited list of fields to sort by. (optional)</param>/// <param name="page">Page of results to return. Default: 1 (optional)</param>/// <param name="pageSize">Number of results to return per page. Default: 20, max: 100. (optional)</param>
    pplx::task<std::shared_ptr<Object>> list(utility::string_t buyerID, utility::string_t parentID, utility::string_t depth, utility::string_t search, utility::string_t searchOn, utility::string_t sortBy, int32_t page, int32_t pageSize);
    /// <summary>
    /// 
    /// </summary>
    /// <remarks>
    /// 
    /// </remarks>
    /// <param name="buyerID">ID of the buyer.</param>/// <param name="categoryID">ID of the category. (optional)</param>/// <param name="userID">ID of the user. (optional)</param>/// <param name="userGroupID">ID of the user group. (optional)</param>/// <param name="level">Level of the category. (optional)</param>/// <param name="page">Page of results to return. Default: 1 (optional)</param>/// <param name="pageSize">Number of results to return per page. Default: 20, max: 100. (optional)</param>
    pplx::task<std::shared_ptr<Object>> listAssignments(utility::string_t buyerID, utility::string_t categoryID, utility::string_t userID, utility::string_t userGroupID, utility::string_t level, int32_t page, int32_t pageSize);
    /// <summary>
    /// 
    /// </summary>
    /// <remarks>
    /// 
    /// </remarks>
    /// <param name="buyerID">ID of the buyer.</param>/// <param name="parentID">ID of the parent.</param>/// <param name="search">Word or phrase to search for. (optional)</param>/// <param name="depth">Depth of the category. (optional)</param>/// <param name="page">Page of results to return. Default: 1 (optional)</param>/// <param name="pageSize">Number of results to return per page. Default: 20, max: 100. (optional)</param>
    pplx::task<std::shared_ptr<Object>> listChildren(utility::string_t buyerID, utility::string_t parentID, utility::string_t search, utility::string_t depth, int32_t page, int32_t pageSize);
    /// <summary>
    /// 
    /// </summary>
    /// <remarks>
    /// 
    /// </remarks>
    /// <param name="buyerID">ID of the buyer.</param>/// <param name="categoryID">ID of the category. (optional)</param>/// <param name="productID">ID of the product. (optional)</param>/// <param name="page">Page of results to return. Default: 1 (optional)</param>/// <param name="pageSize">Number of results to return per page. Default: 20, max: 100. (optional)</param>
    pplx::task<std::shared_ptr<Object>> listProductAssignments(utility::string_t buyerID, utility::string_t categoryID, utility::string_t productID, int32_t page, int32_t pageSize);
    /// <summary>
    /// 
    /// </summary>
    /// <remarks>
    /// 
    /// </remarks>
    /// <param name="buyerID">ID of the buyer.</param>/// <param name="categoryID">ID of the category.</param>/// <param name="category"></param>
    pplx::task<void> patch(utility::string_t buyerID, utility::string_t categoryID, std::shared_ptr<Category> category);
    /// <summary>
    /// 
    /// </summary>
    /// <remarks>
    /// 
    /// </remarks>
    /// <param name="buyerID">ID of the buyer.</param>/// <param name="categoryAssignment"></param>
    pplx::task<void> saveAssignment(utility::string_t buyerID, std::shared_ptr<CategoryAssignment> categoryAssignment);
    /// <summary>
    /// 
    /// </summary>
    /// <remarks>
    /// 
    /// </remarks>
    /// <param name="buyerID">ID of the buyer.</param>/// <param name="productAssignment"></param>
    pplx::task<void> saveProductAssignment(utility::string_t buyerID, std::shared_ptr<CategoryProductAssignment> productAssignment);
    /// <summary>
    /// 
    /// </summary>
    /// <remarks>
    /// 
    /// </remarks>
    /// <param name="buyerID">ID of the buyer.</param>/// <param name="categoryID">ID of the category.</param>/// <param name="category"></param>
    pplx::task<std::shared_ptr<Object>> update(utility::string_t buyerID, utility::string_t categoryID, std::shared_ptr<Category> category);
    
protected:
    std::shared_ptr<ApiClient> m_ApiClient;    
};
    
}
}
}
}

#endif /* CategoryApi_H_ */
