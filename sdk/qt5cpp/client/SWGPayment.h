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
 * SWGPayment.h
 * 
 * 
 */

#ifndef SWGPayment_H_
#define SWGPayment_H_

#include <QJsonObject>


#include "SWGNumber.h"
#include "SWGObject.h"
#include <QString>

#include "SWGObject.h"


namespace Swagger {

class SWGPayment: public SWGObject {
public:
    SWGPayment();
    SWGPayment(QString* json);
    virtual ~SWGPayment();
    void init();
    void cleanup();

    QString asJson ();
    QJsonObject* asJsonObject();
    void fromJsonObject(QJsonObject &json);
    SWGPayment* fromJson(QString &jsonString);

    QString* getID();
    void setID(QString* ID);
QString* getType();
    void setType(QString* Type);
QString* getCreditCardID();
    void setCreditCardID(QString* CreditCardID);
QString* getSpendingAccountID();
    void setSpendingAccountID(QString* SpendingAccountID);
QString* getDescription();
    void setDescription(QString* Description);
SWGNumber* getAmount();
    void setAmount(SWGNumber* Amount);
SWGObject* getXp();
    void setXp(SWGObject* xp);

private:
    QString* ID;
QString* Type;
QString* CreditCardID;
QString* SpendingAccountID;
QString* Description;
SWGNumber* Amount;
SWGObject* xp;
};

} /* namespace Swagger */

#endif /* SWGPayment_H_ */