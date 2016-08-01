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
 * SWGCategory.h
 * 
 * 
 */

#ifndef SWGCategory_H_
#define SWGCategory_H_

#include <QJsonObject>


#include "SWGObject.h"
#include <QString>

#include "SWGObject.h"


namespace Swagger {

class SWGCategory: public SWGObject {
public:
    SWGCategory();
    SWGCategory(QString* json);
    virtual ~SWGCategory();
    void init();
    void cleanup();

    QString asJson ();
    QJsonObject* asJsonObject();
    void fromJsonObject(QJsonObject &json);
    SWGCategory* fromJson(QString &jsonString);

    QString* getID();
    void setID(QString* ID);
QString* getName();
    void setName(QString* Name);
QString* getDescription();
    void setDescription(QString* Description);
SWGObject* getXp();
    void setXp(SWGObject* xp);
qint32 getListOrder();
    void setListOrder(qint32 ListOrder);
bool getActive();
    void setActive(bool Active);
QString* getParentID();
    void setParentID(QString* ParentID);

private:
    QString* ID;
QString* Name;
QString* Description;
SWGObject* xp;
qint32 ListOrder;
bool Active;
QString* ParentID;
};

} /* namespace Swagger */

#endif /* SWGCategory_H_ */