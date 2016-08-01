/*
 * OrderCloud
 *
 * A full ecommerce backend as a service.
 *
 * OpenAPI spec version: 0.1
 * Contact: ordercloud@four51.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Swashbuckle.SwaggerGen.Annotations;
using OrderCloud.Models;

namespace OrderCloud.Controllers
{ 
    /// <summary>
    /// 
    /// </summary>
    public class SpecApiController : Controller
    { 

        /// <summary>
        /// 
        /// </summary>
        
        /// <param name="spec"></param>
        /// <response code="201"></response>
        [HttpPost]
        [Route("/specs")]
        [SwaggerOperation("Create")]
        [SwaggerResponse(200, type: typeof(Object))]
        public virtual IActionResult Create([FromBody]Spec spec)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<Object>(exampleJson)
            : default(Object);
            return new ObjectResult(example);
        }


        /// <summary>
        /// 
        /// </summary>
        
        /// <param name="specID">ID of the spec.</param>
        /// <param name="option"></param>
        /// <response code="201">A Spec can have multiple Options- - for example, if the spec is called &#39;Color&#39;, the options might be &#39;Blue&#39;, &#39;Red&#39;, and &#39;Green&#39;. </response>
        [HttpPost]
        [Route("/specs/{specID}/options")]
        [SwaggerOperation("CreateOption")]
        [SwaggerResponse(200, type: typeof(Object))]
        public virtual IActionResult CreateOption([FromRoute]string specID, [FromBody]SpecOption option)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<Object>(exampleJson)
            : default(Object);
            return new ObjectResult(example);
        }


        /// <summary>
        /// 
        /// </summary>
        
        /// <param name="specID">ID of the spec.</param>
        /// <response code="204"></response>
        [HttpDelete]
        [Route("/specs/{specID}")]
        [SwaggerOperation("Delete")]
        public virtual void Delete([FromRoute]string specID)
        { 
            throw new NotImplementedException();
        }


        /// <summary>
        /// 
        /// </summary>
        
        /// <param name="specID">ID of the spec.</param>
        /// <param name="optionID">ID of the option.</param>
        /// <response code="204"></response>
        [HttpDelete]
        [Route("/specs/{specID}/options/{optionID}")]
        [SwaggerOperation("DeleteOption")]
        public virtual void DeleteOption([FromRoute]string specID, [FromRoute]string optionID)
        { 
            throw new NotImplementedException();
        }


        /// <summary>
        /// 
        /// </summary>
        
        /// <param name="specID">ID of the spec.</param>
        /// <param name="productID">ID of the product.</param>
        /// <response code="204"></response>
        [HttpDelete]
        [Route("/specs/{specID}/productassignments/{productID}")]
        [SwaggerOperation("DeleteProductAssignment")]
        public virtual void DeleteProductAssignment([FromRoute]string specID, [FromRoute]string productID)
        { 
            throw new NotImplementedException();
        }


        /// <summary>
        /// 
        /// </summary>
        
        /// <param name="specID">ID of the spec.</param>
        /// <response code="200"></response>
        [HttpGet]
        [Route("/specs/{specID}")]
        [SwaggerOperation("Get")]
        [SwaggerResponse(200, type: typeof(Object))]
        public virtual IActionResult Get([FromRoute]string specID)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<Object>(exampleJson)
            : default(Object);
            return new ObjectResult(example);
        }


        /// <summary>
        /// 
        /// </summary>
        
        /// <param name="specID">ID of the spec.</param>
        /// <param name="optionID">ID of the option.</param>
        /// <response code="200"></response>
        [HttpGet]
        [Route("/specs/{specID}/options/{optionID}")]
        [SwaggerOperation("GetOption")]
        [SwaggerResponse(200, type: typeof(Object))]
        public virtual IActionResult GetOption([FromRoute]string specID, [FromRoute]string optionID)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<Object>(exampleJson)
            : default(Object);
            return new ObjectResult(example);
        }


        /// <summary>
        /// 
        /// </summary>
        
        /// <param name="search">Word or phrase to search for.</param>
        /// <param name="searchOn">Comma-delimited list of fields to search on.</param>
        /// <param name="sortBy">Comma-delimited list of fields to sort by.</param>
        /// <param name="page">Page of results to return. Default: 1</param>
        /// <param name="pageSize">Number of results to return per page. Default: 20, max: 100.</param>
        /// <response code="200"></response>
        [HttpGet]
        [Route("/specs")]
        [SwaggerOperation("List")]
        [SwaggerResponse(200, type: typeof(Object))]
        public virtual IActionResult List([FromQuery]string search, [FromQuery]string searchOn, [FromQuery]string sortBy, [FromQuery]int? page, [FromQuery]int? pageSize)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<Object>(exampleJson)
            : default(Object);
            return new ObjectResult(example);
        }


        /// <summary>
        /// 
        /// </summary>
        
        /// <param name="specID">ID of the spec.</param>
        /// <param name="search">Word or phrase to search for.</param>
        /// <param name="searchOn">Comma-delimited list of fields to search on.</param>
        /// <param name="sortBy">Comma-delimited list of fields to sort by.</param>
        /// <param name="page">Page of results to return. Default: 1</param>
        /// <param name="pageSize">Number of results to return per page. Default: 20, max: 100.</param>
        /// <response code="200"></response>
        [HttpGet]
        [Route("/specs/{specID}/options")]
        [SwaggerOperation("ListOptions")]
        [SwaggerResponse(200, type: typeof(Object))]
        public virtual IActionResult ListOptions([FromRoute]string specID, [FromQuery]string search, [FromQuery]string searchOn, [FromQuery]string sortBy, [FromQuery]int? page, [FromQuery]int? pageSize)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<Object>(exampleJson)
            : default(Object);
            return new ObjectResult(example);
        }


        /// <summary>
        /// 
        /// </summary>
        
        /// <param name="specID">ID of the spec.</param>
        /// <param name="productID">ID of the product.</param>
        /// <param name="page">Page of results to return. Default: 1</param>
        /// <param name="pageSize">Number of results to return per page. Default: 20, max: 100.</param>
        /// <response code="200"></response>
        [HttpGet]
        [Route("/specs/productassignments")]
        [SwaggerOperation("ListProductAssignments")]
        [SwaggerResponse(200, type: typeof(Object))]
        public virtual IActionResult ListProductAssignments([FromQuery]string specID, [FromQuery]string productID, [FromQuery]int? page, [FromQuery]int? pageSize)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<Object>(exampleJson)
            : default(Object);
            return new ObjectResult(example);
        }


        /// <summary>
        /// 
        /// </summary>
        
        /// <param name="specID">ID of the spec.</param>
        /// <param name="spec"></param>
        /// <response code="200"></response>
        [HttpPatch]
        [Route("/specs/{specID}")]
        [SwaggerOperation("Patch")]
        [SwaggerResponse(200, type: typeof(Object))]
        public virtual IActionResult Patch([FromRoute]string specID, [FromBody]Spec spec)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<Object>(exampleJson)
            : default(Object);
            return new ObjectResult(example);
        }


        /// <summary>
        /// 
        /// </summary>
        
        /// <param name="specID">ID of the spec.</param>
        /// <param name="optionID">ID of the option.</param>
        /// <param name="option"></param>
        /// <response code="200"></response>
        [HttpPatch]
        [Route("/specs/{specID}/options/{optionID}")]
        [SwaggerOperation("PatchOption")]
        [SwaggerResponse(200, type: typeof(Object))]
        public virtual IActionResult PatchOption([FromRoute]string specID, [FromRoute]string optionID, [FromBody]SpecOption option)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<Object>(exampleJson)
            : default(Object);
            return new ObjectResult(example);
        }


        /// <summary>
        /// 
        /// </summary>
        
        /// <param name="productAssignment"></param>
        /// <response code="204">While DefinesVariant is an optional parameter, if it is set to &#39;False&#39;, generating product variants will not generate variants with that spec. This is useful for things like custom logos, where you don&#39;t want a defined variant product for each logo, but you do want to capture a product customization.</response>
        [HttpPost]
        [Route("/specs/productassignments")]
        [SwaggerOperation("SaveProductAssignment")]
        public virtual void SaveProductAssignment([FromBody]SpecProductAssignment productAssignment)
        { 
            throw new NotImplementedException();
        }


        /// <summary>
        /// 
        /// </summary>
        
        /// <param name="specID">ID of the spec.</param>
        /// <param name="spec"></param>
        /// <response code="200"></response>
        [HttpPut]
        [Route("/specs/{specID}")]
        [SwaggerOperation("Update")]
        [SwaggerResponse(200, type: typeof(Object))]
        public virtual IActionResult Update([FromRoute]string specID, [FromBody]Spec spec)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<Object>(exampleJson)
            : default(Object);
            return new ObjectResult(example);
        }


        /// <summary>
        /// 
        /// </summary>
        
        /// <param name="specID">ID of the spec.</param>
        /// <param name="optionID">ID of the option.</param>
        /// <param name="option"></param>
        /// <response code="200"></response>
        [HttpPut]
        [Route("/specs/{specID}/options/{optionID}")]
        [SwaggerOperation("UpdateOption")]
        [SwaggerResponse(200, type: typeof(Object))]
        public virtual IActionResult UpdateOption([FromRoute]string specID, [FromRoute]string optionID, [FromBody]SpecOption option)
        { 
            string exampleJson = null;
            
            var example = exampleJson != null
            ? JsonConvert.DeserializeObject<Object>(exampleJson)
            : default(Object);
            return new ObjectResult(example);
        }
    }
}