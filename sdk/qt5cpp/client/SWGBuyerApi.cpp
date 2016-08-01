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

#include "SWGBuyerApi.h"
#include "SWGHelpers.h"
#include "SWGModelFactory.h"

#include <QJsonArray>
#include <QJsonDocument>

namespace Swagger {
SWGBuyerApi::SWGBuyerApi() {}

SWGBuyerApi::~SWGBuyerApi() {}

SWGBuyerApi::SWGBuyerApi(QString host, QString basePath) {
    this->host = host;
    this->basePath = basePath;
}

void
SWGBuyerApi::create(SWGBuyer company) {
    QString fullPath;
    fullPath.append(this->host).append(this->basePath).append("/buyers");



    HttpRequestWorker *worker = new HttpRequestWorker();
    HttpRequestInput input(fullPath, "POST");

    
    QString output = company.asJson();
    input.request_body.append(output);
    


    connect(worker,
            &HttpRequestWorker::on_execution_finished,
            this,
            &SWGBuyerApi::createCallback);

    worker->execute(&input);
}

void
SWGBuyerApi::createCallback(HttpRequestWorker * worker) {
    QString msg;
    if (worker->error_type == QNetworkReply::NoError) {
        msg = QString("Success! %1 bytes").arg(worker->response.length());
    }
    else {
        msg = "Error: " + worker->error_str;
    }

    
        QString json(worker->response);
    SWGObject* output = static_cast<SWGObject*>(create(json, QString("SWGObject")));
    

    worker->deleteLater();

    emit createSignal(output);
    
}
void
SWGBuyerApi::delete(QString* buyerID) {
    QString fullPath;
    fullPath.append(this->host).append(this->basePath).append("/buyers/{buyerID}");

    QString buyerIDPathParam("{"); buyerIDPathParam.append("buyerID").append("}");
    fullPath.replace(buyerIDPathParam, stringValue(buyerID));


    HttpRequestWorker *worker = new HttpRequestWorker();
    HttpRequestInput input(fullPath, "DELETE");

    



    connect(worker,
            &HttpRequestWorker::on_execution_finished,
            this,
            &SWGBuyerApi::deleteCallback);

    worker->execute(&input);
}

void
SWGBuyerApi::deleteCallback(HttpRequestWorker * worker) {
    QString msg;
    if (worker->error_type == QNetworkReply::NoError) {
        msg = QString("Success! %1 bytes").arg(worker->response.length());
    }
    else {
        msg = "Error: " + worker->error_str;
    }

    

    worker->deleteLater();

    
    emit deleteSignal();
}
void
SWGBuyerApi::get(QString* buyerID) {
    QString fullPath;
    fullPath.append(this->host).append(this->basePath).append("/buyers/{buyerID}");

    QString buyerIDPathParam("{"); buyerIDPathParam.append("buyerID").append("}");
    fullPath.replace(buyerIDPathParam, stringValue(buyerID));


    HttpRequestWorker *worker = new HttpRequestWorker();
    HttpRequestInput input(fullPath, "GET");

    



    connect(worker,
            &HttpRequestWorker::on_execution_finished,
            this,
            &SWGBuyerApi::getCallback);

    worker->execute(&input);
}

void
SWGBuyerApi::getCallback(HttpRequestWorker * worker) {
    QString msg;
    if (worker->error_type == QNetworkReply::NoError) {
        msg = QString("Success! %1 bytes").arg(worker->response.length());
    }
    else {
        msg = "Error: " + worker->error_str;
    }

    
        QString json(worker->response);
    SWGObject* output = static_cast<SWGObject*>(create(json, QString("SWGObject")));
    

    worker->deleteLater();

    emit getSignal(output);
    
}
void
SWGBuyerApi::list(QString* search, qint32 page, qint32 pageSize) {
    QString fullPath;
    fullPath.append(this->host).append(this->basePath).append("/buyers");


    if (fullPath.indexOf("?") > 0) 
      fullPath.append("&");
    else 
      fullPath.append("?");
    fullPath.append(QUrl::toPercentEncoding("search"))
        .append("=")
        .append(QUrl::toPercentEncoding(stringValue(search)));

    if (fullPath.indexOf("?") > 0) 
      fullPath.append("&");
    else 
      fullPath.append("?");
    fullPath.append(QUrl::toPercentEncoding("page"))
        .append("=")
        .append(QUrl::toPercentEncoding(stringValue(page)));

    if (fullPath.indexOf("?") > 0) 
      fullPath.append("&");
    else 
      fullPath.append("?");
    fullPath.append(QUrl::toPercentEncoding("pageSize"))
        .append("=")
        .append(QUrl::toPercentEncoding(stringValue(pageSize)));


    HttpRequestWorker *worker = new HttpRequestWorker();
    HttpRequestInput input(fullPath, "GET");

    



    connect(worker,
            &HttpRequestWorker::on_execution_finished,
            this,
            &SWGBuyerApi::listCallback);

    worker->execute(&input);
}

void
SWGBuyerApi::listCallback(HttpRequestWorker * worker) {
    QString msg;
    if (worker->error_type == QNetworkReply::NoError) {
        msg = QString("Success! %1 bytes").arg(worker->response.length());
    }
    else {
        msg = "Error: " + worker->error_str;
    }

    
        QString json(worker->response);
    SWGObject* output = static_cast<SWGObject*>(create(json, QString("SWGObject")));
    

    worker->deleteLater();

    emit listSignal(output);
    
}
void
SWGBuyerApi::update(QString* buyerID, SWGBuyer company) {
    QString fullPath;
    fullPath.append(this->host).append(this->basePath).append("/buyers/{buyerID}");

    QString buyerIDPathParam("{"); buyerIDPathParam.append("buyerID").append("}");
    fullPath.replace(buyerIDPathParam, stringValue(buyerID));


    HttpRequestWorker *worker = new HttpRequestWorker();
    HttpRequestInput input(fullPath, "PUT");

    
    QString output = company.asJson();
    input.request_body.append(output);
    


    connect(worker,
            &HttpRequestWorker::on_execution_finished,
            this,
            &SWGBuyerApi::updateCallback);

    worker->execute(&input);
}

void
SWGBuyerApi::updateCallback(HttpRequestWorker * worker) {
    QString msg;
    if (worker->error_type == QNetworkReply::NoError) {
        msg = QString("Success! %1 bytes").arg(worker->response.length());
    }
    else {
        msg = "Error: " + worker->error_str;
    }

    
        QString json(worker->response);
    SWGObject* output = static_cast<SWGObject*>(create(json, QString("SWGObject")));
    

    worker->deleteLater();

    emit updateSignal(output);
    
}
} /* namespace Swagger */