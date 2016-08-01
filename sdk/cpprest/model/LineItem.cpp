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



#include "LineItem.h"

namespace io {
namespace swagger {
namespace client {
namespace model {

LineItem::LineItem()
{
    m_ID = U("");
    m_IDIsSet = false;
    m_ProductID = U("");
    m_ProductIDIsSet = false;
    m_Quantity = nullptr;
    m_QuantityIsSet = false;
    m_UnitPriceIsSet = false;
    m_CostCenter = U("");
    m_CostCenterIsSet = false;
    m_DateNeededIsSet = false;
    m_ShippingAccount = U("");
    m_ShippingAccountIsSet = false;
    m_ShippingAddressID = U("");
    m_ShippingAddressIDIsSet = false;
    m_ShipfromAddressID = U("");
    m_ShipfromAddressIDIsSet = false;
    m_ShipperID = U("");
    m_ShipperIDIsSet = false;
    m_SpecsIsSet = false;
    m_XpIsSet = false;
    
}

LineItem::~LineItem()
{
}

void LineItem::validate() 
{
    // TODO: implement validation
}

web::json::value LineItem::toJson() const
{
    web::json::value val = web::json::value::object();
     
	if(m_IDIsSet)
    {
        val[U("ID")] = ModelBase::toJson(m_ID);
    }
    if(m_ProductIDIsSet)
    {
        val[U("ProductID")] = ModelBase::toJson(m_ProductID);
    }
    if(m_QuantityIsSet)
    {
        val[U("Quantity")] = ModelBase::toJson(m_Quantity);
    }
    if(m_UnitPriceIsSet)
    {
        val[U("UnitPrice")] = ModelBase::toJson(m_UnitPrice);
    }
    if(m_CostCenterIsSet)
    {
        val[U("CostCenter")] = ModelBase::toJson(m_CostCenter);
    }
    if(m_DateNeededIsSet)
    {
        val[U("DateNeeded")] = ModelBase::toJson(m_DateNeeded);
    }
    if(m_ShippingAccountIsSet)
    {
        val[U("ShippingAccount")] = ModelBase::toJson(m_ShippingAccount);
    }
    if(m_ShippingAddressIDIsSet)
    {
        val[U("ShippingAddressID")] = ModelBase::toJson(m_ShippingAddressID);
    }
    if(m_ShipfromAddressIDIsSet)
    {
        val[U("ShipfromAddressID")] = ModelBase::toJson(m_ShipfromAddressID);
    }
    if(m_ShipperIDIsSet)
    {
        val[U("ShipperID")] = ModelBase::toJson(m_ShipperID);
    }
    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m_Specs )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        
        if(jsonArray.size() > 0) 
        {
            val[U("Specs")] = web::json::value::array(jsonArray);
        }
    }
    if(m_XpIsSet)
    {
        val[U("xp")] = ModelBase::toJson(m_Xp);
    }
    

    return val;
}

void LineItem::fromJson(web::json::value& val)
{
    if(val.has_field(U("ID")))
    {
        setID(ModelBase::stringFromJson(val[U("ID")]));
                
    }
    if(val.has_field(U("ProductID")))
    {
        setProductID(ModelBase::stringFromJson(val[U("ProductID")]));
                
    }
    if(val.has_field(U("Quantity")))
    {
        setQuantity(ModelBase::int32_tFromJson(val[U("Quantity")]));
    }
    if(val.has_field(U("UnitPrice")))
    {
        if(!val[U("UnitPrice")].is_null()) 
        {
            std::shared_ptr<Number> newItem(0.0);
            newItem->fromJson(val[U("UnitPrice")]);
            setUnitPrice( newItem );
        }
                
    }
    if(val.has_field(U("CostCenter")))
    {
        setCostCenter(ModelBase::stringFromJson(val[U("CostCenter")]));
                
    }
    if(val.has_field(U("DateNeeded")))
    {
        if(!val[U("DateNeeded")].is_null()) 
        {
            utility::datetime newItem(utility::datetime());
            newItem->fromJson(val[U("DateNeeded")]);
            setDateNeeded( newItem );
        }
                
    }
    if(val.has_field(U("ShippingAccount")))
    {
        setShippingAccount(ModelBase::stringFromJson(val[U("ShippingAccount")]));
                
    }
    if(val.has_field(U("ShippingAddressID")))
    {
        setShippingAddressID(ModelBase::stringFromJson(val[U("ShippingAddressID")]));
                
    }
    if(val.has_field(U("ShipfromAddressID")))
    {
        setShipfromAddressID(ModelBase::stringFromJson(val[U("ShipfromAddressID")]));
                
    }
    if(val.has_field(U("ShipperID")))
    {
        setShipperID(ModelBase::stringFromJson(val[U("ShipperID")]));
                
    }
    {
        m_Specs.clear();
        std::vector<web::json::value> jsonArray;
        if(val.has_field(U("Specs")))
        {
        for( auto& item : val[U("Specs")].as_array() )
        {
            
            if(item.is_null()) 
            {
                m_Specs.push_back( std::shared_ptr<ShipmentItem>(nullptr) );
            }
            else
            {
                std::shared_ptr<ShipmentItem> newItem(new ShipmentItem());
                newItem->fromJson(item);
                m_Specs.push_back( newItem );
            }
            
        }
        }
    }
    if(val.has_field(U("xp")))
    {
        if(!val[U("xp")].is_null()) 
        {
            std::shared_ptr<Object> newItem(nullptr);
            newItem->fromJson(val[U("xp")]);
            setXp( newItem );
        }
                
    }
    
}

void LineItem::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
{
    utility::string_t namePrefix = prefix;
	if(namePrefix.size() > 0 && namePrefix[namePrefix.size() - 1] != U('.'))
	{
		namePrefix += U(".");
	}

	if(m_IDIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + U("ID"), m_ID));
                
    }
    if(m_ProductIDIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + U("ProductID"), m_ProductID));
                
    }
    if(m_QuantityIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + U("Quantity"), m_Quantity));
    }
    if(m_UnitPriceIsSet)
    {
        if (m_UnitPrice.get())
        {
            m_UnitPrice->toMultipart(multipart, U("UnitPrice."));
        }
                
    }
    if(m_CostCenterIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + U("CostCenter"), m_CostCenter));
                
    }
    if(m_DateNeededIsSet)
    {
        if (m_DateNeeded.get())
        {
            m_DateNeeded->toMultipart(multipart, U("DateNeeded."));
        }
                
    }
    if(m_ShippingAccountIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + U("ShippingAccount"), m_ShippingAccount));
                
    }
    if(m_ShippingAddressIDIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + U("ShippingAddressID"), m_ShippingAddressID));
                
    }
    if(m_ShipfromAddressIDIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + U("ShipfromAddressID"), m_ShipfromAddressID));
                
    }
    if(m_ShipperIDIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + U("ShipperID"), m_ShipperID));
                
    }
    {
        std::vector<web::json::value> jsonArray;
        for( auto& item : m_Specs )
        {
            jsonArray.push_back(ModelBase::toJson(item));
        }
        
        if(jsonArray.size() > 0) 
        {
            multipart->add(ModelBase::toHttpContent(namePrefix + U("Specs"), web::json::value::array(jsonArray), U("application/json")));
        }
    }
    if(m_XpIsSet)
    {
        if (m_Xp.get())
        {
            m_Xp->toMultipart(multipart, U("xp."));
        }
                
    }
    
}

void LineItem::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
{
    utility::string_t namePrefix = prefix;
	if(namePrefix.size() > 0 && namePrefix[namePrefix.size() - 1] != U('.'))
	{
		namePrefix += U(".");
	}

    if(multipart->hasContent(U("ID")))
    {
        setID(ModelBase::stringFromHttpContent(multipart->getContent(U("ID"))));
                
    }
    if(multipart->hasContent(U("ProductID")))
    {
        setProductID(ModelBase::stringFromHttpContent(multipart->getContent(U("ProductID"))));
                
    }
    if(multipart->hasContent(U("Quantity")))
    {
        setQuantity(ModelBase::int32_tFromHttpContent(multipart->getContent(U("Quantity"))));
    }
    if(multipart->hasContent(U("UnitPrice")))
    {
        if(multipart->hasContent(U("UnitPrice")))
        {
            std::shared_ptr<Number> newItem(0.0);
            newItem->fromMultiPart(multipart, U("UnitPrice."));
            setUnitPrice( newItem );
        }
                
    }
    if(multipart->hasContent(U("CostCenter")))
    {
        setCostCenter(ModelBase::stringFromHttpContent(multipart->getContent(U("CostCenter"))));
                
    }
    if(multipart->hasContent(U("DateNeeded")))
    {
        if(multipart->hasContent(U("DateNeeded")))
        {
            utility::datetime newItem(utility::datetime());
            newItem->fromMultiPart(multipart, U("DateNeeded."));
            setDateNeeded( newItem );
        }
                
    }
    if(multipart->hasContent(U("ShippingAccount")))
    {
        setShippingAccount(ModelBase::stringFromHttpContent(multipart->getContent(U("ShippingAccount"))));
                
    }
    if(multipart->hasContent(U("ShippingAddressID")))
    {
        setShippingAddressID(ModelBase::stringFromHttpContent(multipart->getContent(U("ShippingAddressID"))));
                
    }
    if(multipart->hasContent(U("ShipfromAddressID")))
    {
        setShipfromAddressID(ModelBase::stringFromHttpContent(multipart->getContent(U("ShipfromAddressID"))));
                
    }
    if(multipart->hasContent(U("ShipperID")))
    {
        setShipperID(ModelBase::stringFromHttpContent(multipart->getContent(U("ShipperID"))));
                
    }
    {
        m_Specs.clear();
        if(multipart->hasContent(U("Specs")))
        {            
        
        web::json::value jsonArray = web::json::value::parse(ModelBase::stringFromHttpContent(multipart->getContent(U("Specs"))));
        for( auto& item : jsonArray.as_array() )
        {
            
            if(item.is_null()) 
            {
                m_Specs.push_back( std::shared_ptr<ShipmentItem>(nullptr) );
            }
            else
            {
                std::shared_ptr<ShipmentItem> newItem(new ShipmentItem());
                newItem->fromJson(item);
                m_Specs.push_back( newItem );
            }
            
        }
        }
    }
    if(multipart->hasContent(U("xp")))
    {
        if(multipart->hasContent(U("xp")))
        {
            std::shared_ptr<Object> newItem(nullptr);
            newItem->fromMultiPart(multipart, U("xp."));
            setXp( newItem );
        }
                
    }
    
}
    
   
utility::string_t LineItem::getID() const
{
	return m_ID;
}
void LineItem::setID(utility::string_t value)
{
	m_ID = value;
    m_IDIsSet = true;
}
bool LineItem::IDIsSet() const
{
    return m_IDIsSet;
}
void LineItem::unsetID() 
{
    m_IDIsSet = false;
}
utility::string_t LineItem::getProductID() const
{
	return m_ProductID;
}
void LineItem::setProductID(utility::string_t value)
{
	m_ProductID = value;
    m_ProductIDIsSet = true;
}
bool LineItem::ProductIDIsSet() const
{
    return m_ProductIDIsSet;
}
void LineItem::unsetProductID() 
{
    m_ProductIDIsSet = false;
}
int32_t LineItem::getQuantity() const
{
	return m_Quantity;
}
void LineItem::setQuantity(int32_t value)
{
	m_Quantity = value;
    m_QuantityIsSet = true;
}
bool LineItem::QuantityIsSet() const
{
    return m_QuantityIsSet;
}
void LineItem::unsetQuantity() 
{
    m_QuantityIsSet = false;
}
std::shared_ptr<Number> LineItem::getUnitPrice() const
{
	return m_UnitPrice;
}
void LineItem::setUnitPrice(std::shared_ptr<Number> value)
{
	m_UnitPrice = value;
    m_UnitPriceIsSet = true;
}
bool LineItem::UnitPriceIsSet() const
{
    return m_UnitPriceIsSet;
}
void LineItem::unsetUnitPrice() 
{
    m_UnitPriceIsSet = false;
}
utility::string_t LineItem::getCostCenter() const
{
	return m_CostCenter;
}
void LineItem::setCostCenter(utility::string_t value)
{
	m_CostCenter = value;
    m_CostCenterIsSet = true;
}
bool LineItem::CostCenterIsSet() const
{
    return m_CostCenterIsSet;
}
void LineItem::unsetCostCenter() 
{
    m_CostCenterIsSet = false;
}
utility::datetime LineItem::getDateNeeded() const
{
	return m_DateNeeded;
}
void LineItem::setDateNeeded(utility::datetime value)
{
	m_DateNeeded = value;
    m_DateNeededIsSet = true;
}
bool LineItem::DateNeededIsSet() const
{
    return m_DateNeededIsSet;
}
void LineItem::unsetDateNeeded() 
{
    m_DateNeededIsSet = false;
}
utility::string_t LineItem::getShippingAccount() const
{
	return m_ShippingAccount;
}
void LineItem::setShippingAccount(utility::string_t value)
{
	m_ShippingAccount = value;
    m_ShippingAccountIsSet = true;
}
bool LineItem::ShippingAccountIsSet() const
{
    return m_ShippingAccountIsSet;
}
void LineItem::unsetShippingAccount() 
{
    m_ShippingAccountIsSet = false;
}
utility::string_t LineItem::getShippingAddressID() const
{
	return m_ShippingAddressID;
}
void LineItem::setShippingAddressID(utility::string_t value)
{
	m_ShippingAddressID = value;
    m_ShippingAddressIDIsSet = true;
}
bool LineItem::ShippingAddressIDIsSet() const
{
    return m_ShippingAddressIDIsSet;
}
void LineItem::unsetShippingAddressID() 
{
    m_ShippingAddressIDIsSet = false;
}
utility::string_t LineItem::getShipfromAddressID() const
{
	return m_ShipfromAddressID;
}
void LineItem::setShipfromAddressID(utility::string_t value)
{
	m_ShipfromAddressID = value;
    m_ShipfromAddressIDIsSet = true;
}
bool LineItem::ShipfromAddressIDIsSet() const
{
    return m_ShipfromAddressIDIsSet;
}
void LineItem::unsetShipfromAddressID() 
{
    m_ShipfromAddressIDIsSet = false;
}
utility::string_t LineItem::getShipperID() const
{
	return m_ShipperID;
}
void LineItem::setShipperID(utility::string_t value)
{
	m_ShipperID = value;
    m_ShipperIDIsSet = true;
}
bool LineItem::ShipperIDIsSet() const
{
    return m_ShipperIDIsSet;
}
void LineItem::unsetShipperID() 
{
    m_ShipperIDIsSet = false;
}
std::vector<std::shared_ptr<ShipmentItem>>& LineItem::getSpecs()
{
	return m_Specs;
}
bool LineItem::SpecsIsSet() const
{
    return m_SpecsIsSet;
}
void LineItem::unsetSpecs() 
{
    m_SpecsIsSet = false;
}
std::shared_ptr<Object> LineItem::getXp() const
{
	return m_Xp;
}
void LineItem::setXp(std::shared_ptr<Object> value)
{
	m_Xp = value;
    m_XpIsSet = true;
}
bool LineItem::xpIsSet() const
{
    return m_XpIsSet;
}
void LineItem::unsetXp() 
{
    m_XpIsSet = false;
}

}
}
}
}
