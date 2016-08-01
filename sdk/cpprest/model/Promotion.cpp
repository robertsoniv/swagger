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



#include "Promotion.h"

namespace io {
namespace swagger {
namespace client {
namespace model {

Promotion::Promotion()
{
    m_ID = U("");
    m_IDIsSet = false;
    m_Code = U("");
    m_CodeIsSet = false;
    m_Name = U("");
    m_NameIsSet = false;
    m_UsagesRemaining = nullptr;
    m_UsagesRemainingIsSet = false;
    m_Description = U("");
    m_DescriptionIsSet = false;
    m_FinePrint = U("");
    m_FinePrintIsSet = false;
    m_StartDateIsSet = false;
    m_ExpirationDateIsSet = false;
    m_EligibleExpression = U("");
    m_EligibleExpressionIsSet = false;
    m_ValueExpression = U("");
    m_ValueExpressionIsSet = false;
    m_CanCombine = false;
    m_CanCombineIsSet = false;
    m_XpIsSet = false;
    
}

Promotion::~Promotion()
{
}

void Promotion::validate() 
{
    // TODO: implement validation
}

web::json::value Promotion::toJson() const
{
    web::json::value val = web::json::value::object();
     
	if(m_IDIsSet)
    {
        val[U("ID")] = ModelBase::toJson(m_ID);
    }
    if(m_CodeIsSet)
    {
        val[U("Code")] = ModelBase::toJson(m_Code);
    }
    if(m_NameIsSet)
    {
        val[U("Name")] = ModelBase::toJson(m_Name);
    }
    if(m_UsagesRemainingIsSet)
    {
        val[U("UsagesRemaining")] = ModelBase::toJson(m_UsagesRemaining);
    }
    if(m_DescriptionIsSet)
    {
        val[U("Description")] = ModelBase::toJson(m_Description);
    }
    if(m_FinePrintIsSet)
    {
        val[U("FinePrint")] = ModelBase::toJson(m_FinePrint);
    }
    if(m_StartDateIsSet)
    {
        val[U("StartDate")] = ModelBase::toJson(m_StartDate);
    }
    if(m_ExpirationDateIsSet)
    {
        val[U("ExpirationDate")] = ModelBase::toJson(m_ExpirationDate);
    }
    if(m_EligibleExpressionIsSet)
    {
        val[U("EligibleExpression")] = ModelBase::toJson(m_EligibleExpression);
    }
    if(m_ValueExpressionIsSet)
    {
        val[U("ValueExpression")] = ModelBase::toJson(m_ValueExpression);
    }
    if(m_CanCombineIsSet)
    {
        val[U("CanCombine")] = ModelBase::toJson(m_CanCombine);
    }
    if(m_XpIsSet)
    {
        val[U("xp")] = ModelBase::toJson(m_Xp);
    }
    

    return val;
}

void Promotion::fromJson(web::json::value& val)
{
    if(val.has_field(U("ID")))
    {
        setID(ModelBase::stringFromJson(val[U("ID")]));
                
    }
    if(val.has_field(U("Code")))
    {
        setCode(ModelBase::stringFromJson(val[U("Code")]));
                
    }
    if(val.has_field(U("Name")))
    {
        setName(ModelBase::stringFromJson(val[U("Name")]));
                
    }
    if(val.has_field(U("UsagesRemaining")))
    {
        setUsagesRemaining(ModelBase::int32_tFromJson(val[U("UsagesRemaining")]));
    }
    if(val.has_field(U("Description")))
    {
        setDescription(ModelBase::stringFromJson(val[U("Description")]));
                
    }
    if(val.has_field(U("FinePrint")))
    {
        setFinePrint(ModelBase::stringFromJson(val[U("FinePrint")]));
                
    }
    if(val.has_field(U("StartDate")))
    {
        if(!val[U("StartDate")].is_null()) 
        {
            utility::datetime newItem(utility::datetime());
            newItem->fromJson(val[U("StartDate")]);
            setStartDate( newItem );
        }
                
    }
    if(val.has_field(U("ExpirationDate")))
    {
        if(!val[U("ExpirationDate")].is_null()) 
        {
            utility::datetime newItem(utility::datetime());
            newItem->fromJson(val[U("ExpirationDate")]);
            setExpirationDate( newItem );
        }
                
    }
    if(val.has_field(U("EligibleExpression")))
    {
        setEligibleExpression(ModelBase::stringFromJson(val[U("EligibleExpression")]));
                
    }
    if(val.has_field(U("ValueExpression")))
    {
        setValueExpression(ModelBase::stringFromJson(val[U("ValueExpression")]));
                
    }
    if(val.has_field(U("CanCombine")))
    {
        setCanCombine(ModelBase::boolFromJson(val[U("CanCombine")]));
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

void Promotion::toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix) const
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
    if(m_CodeIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + U("Code"), m_Code));
                
    }
    if(m_NameIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + U("Name"), m_Name));
                
    }
    if(m_UsagesRemainingIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + U("UsagesRemaining"), m_UsagesRemaining));
    }
    if(m_DescriptionIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + U("Description"), m_Description));
                
    }
    if(m_FinePrintIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + U("FinePrint"), m_FinePrint));
                
    }
    if(m_StartDateIsSet)
    {
        if (m_StartDate.get())
        {
            m_StartDate->toMultipart(multipart, U("StartDate."));
        }
                
    }
    if(m_ExpirationDateIsSet)
    {
        if (m_ExpirationDate.get())
        {
            m_ExpirationDate->toMultipart(multipart, U("ExpirationDate."));
        }
                
    }
    if(m_EligibleExpressionIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + U("EligibleExpression"), m_EligibleExpression));
                
    }
    if(m_ValueExpressionIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + U("ValueExpression"), m_ValueExpression));
                
    }
    if(m_CanCombineIsSet)
    {
        multipart->add(ModelBase::toHttpContent(namePrefix + U("CanCombine"), m_CanCombine));
    }
    if(m_XpIsSet)
    {
        if (m_Xp.get())
        {
            m_Xp->toMultipart(multipart, U("xp."));
        }
                
    }
    
}

void Promotion::fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& prefix)
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
    if(multipart->hasContent(U("Code")))
    {
        setCode(ModelBase::stringFromHttpContent(multipart->getContent(U("Code"))));
                
    }
    if(multipart->hasContent(U("Name")))
    {
        setName(ModelBase::stringFromHttpContent(multipart->getContent(U("Name"))));
                
    }
    if(multipart->hasContent(U("UsagesRemaining")))
    {
        setUsagesRemaining(ModelBase::int32_tFromHttpContent(multipart->getContent(U("UsagesRemaining"))));
    }
    if(multipart->hasContent(U("Description")))
    {
        setDescription(ModelBase::stringFromHttpContent(multipart->getContent(U("Description"))));
                
    }
    if(multipart->hasContent(U("FinePrint")))
    {
        setFinePrint(ModelBase::stringFromHttpContent(multipart->getContent(U("FinePrint"))));
                
    }
    if(multipart->hasContent(U("StartDate")))
    {
        if(multipart->hasContent(U("StartDate")))
        {
            utility::datetime newItem(utility::datetime());
            newItem->fromMultiPart(multipart, U("StartDate."));
            setStartDate( newItem );
        }
                
    }
    if(multipart->hasContent(U("ExpirationDate")))
    {
        if(multipart->hasContent(U("ExpirationDate")))
        {
            utility::datetime newItem(utility::datetime());
            newItem->fromMultiPart(multipart, U("ExpirationDate."));
            setExpirationDate( newItem );
        }
                
    }
    if(multipart->hasContent(U("EligibleExpression")))
    {
        setEligibleExpression(ModelBase::stringFromHttpContent(multipart->getContent(U("EligibleExpression"))));
                
    }
    if(multipart->hasContent(U("ValueExpression")))
    {
        setValueExpression(ModelBase::stringFromHttpContent(multipart->getContent(U("ValueExpression"))));
                
    }
    if(multipart->hasContent(U("CanCombine")))
    {
        setCanCombine(ModelBase::boolFromHttpContent(multipart->getContent(U("CanCombine"))));
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
    
   
utility::string_t Promotion::getID() const
{
	return m_ID;
}
void Promotion::setID(utility::string_t value)
{
	m_ID = value;
    m_IDIsSet = true;
}
bool Promotion::IDIsSet() const
{
    return m_IDIsSet;
}
void Promotion::unsetID() 
{
    m_IDIsSet = false;
}
utility::string_t Promotion::getCode() const
{
	return m_Code;
}
void Promotion::setCode(utility::string_t value)
{
	m_Code = value;
    m_CodeIsSet = true;
}
bool Promotion::CodeIsSet() const
{
    return m_CodeIsSet;
}
void Promotion::unsetCode() 
{
    m_CodeIsSet = false;
}
utility::string_t Promotion::getName() const
{
	return m_Name;
}
void Promotion::setName(utility::string_t value)
{
	m_Name = value;
    m_NameIsSet = true;
}
bool Promotion::NameIsSet() const
{
    return m_NameIsSet;
}
void Promotion::unsetName() 
{
    m_NameIsSet = false;
}
int32_t Promotion::getUsagesRemaining() const
{
	return m_UsagesRemaining;
}
void Promotion::setUsagesRemaining(int32_t value)
{
	m_UsagesRemaining = value;
    m_UsagesRemainingIsSet = true;
}
bool Promotion::UsagesRemainingIsSet() const
{
    return m_UsagesRemainingIsSet;
}
void Promotion::unsetUsagesRemaining() 
{
    m_UsagesRemainingIsSet = false;
}
utility::string_t Promotion::getDescription() const
{
	return m_Description;
}
void Promotion::setDescription(utility::string_t value)
{
	m_Description = value;
    m_DescriptionIsSet = true;
}
bool Promotion::DescriptionIsSet() const
{
    return m_DescriptionIsSet;
}
void Promotion::unsetDescription() 
{
    m_DescriptionIsSet = false;
}
utility::string_t Promotion::getFinePrint() const
{
	return m_FinePrint;
}
void Promotion::setFinePrint(utility::string_t value)
{
	m_FinePrint = value;
    m_FinePrintIsSet = true;
}
bool Promotion::FinePrintIsSet() const
{
    return m_FinePrintIsSet;
}
void Promotion::unsetFinePrint() 
{
    m_FinePrintIsSet = false;
}
utility::datetime Promotion::getStartDate() const
{
	return m_StartDate;
}
void Promotion::setStartDate(utility::datetime value)
{
	m_StartDate = value;
    m_StartDateIsSet = true;
}
bool Promotion::StartDateIsSet() const
{
    return m_StartDateIsSet;
}
void Promotion::unsetStartDate() 
{
    m_StartDateIsSet = false;
}
utility::datetime Promotion::getExpirationDate() const
{
	return m_ExpirationDate;
}
void Promotion::setExpirationDate(utility::datetime value)
{
	m_ExpirationDate = value;
    m_ExpirationDateIsSet = true;
}
bool Promotion::ExpirationDateIsSet() const
{
    return m_ExpirationDateIsSet;
}
void Promotion::unsetExpirationDate() 
{
    m_ExpirationDateIsSet = false;
}
utility::string_t Promotion::getEligibleExpression() const
{
	return m_EligibleExpression;
}
void Promotion::setEligibleExpression(utility::string_t value)
{
	m_EligibleExpression = value;
    m_EligibleExpressionIsSet = true;
}
bool Promotion::EligibleExpressionIsSet() const
{
    return m_EligibleExpressionIsSet;
}
void Promotion::unsetEligibleExpression() 
{
    m_EligibleExpressionIsSet = false;
}
utility::string_t Promotion::getValueExpression() const
{
	return m_ValueExpression;
}
void Promotion::setValueExpression(utility::string_t value)
{
	m_ValueExpression = value;
    m_ValueExpressionIsSet = true;
}
bool Promotion::ValueExpressionIsSet() const
{
    return m_ValueExpressionIsSet;
}
void Promotion::unsetValueExpression() 
{
    m_ValueExpressionIsSet = false;
}
bool Promotion::getCanCombine() const
{
	return m_CanCombine;
}
void Promotion::setCanCombine(bool value)
{
	m_CanCombine = value;
    m_CanCombineIsSet = true;
}
bool Promotion::CanCombineIsSet() const
{
    return m_CanCombineIsSet;
}
void Promotion::unsetCanCombine() 
{
    m_CanCombineIsSet = false;
}
std::shared_ptr<Object> Promotion::getXp() const
{
	return m_Xp;
}
void Promotion::setXp(std::shared_ptr<Object> value)
{
	m_Xp = value;
    m_XpIsSet = true;
}
bool Promotion::xpIsSet() const
{
    return m_XpIsSet;
}
void Promotion::unsetXp() 
{
    m_XpIsSet = false;
}

}
}
}
}
