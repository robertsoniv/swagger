# coding: utf-8

"""
    OrderCloud

    A full ecommerce backend as a service.

    OpenAPI spec version: 0.1
    Contact: ordercloud@four51.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
"""

from pprint import pformat
from six import iteritems
import re


class Order(object):
    """
    NOTE: This class is auto generated by the swagger code generator program.
    Do not edit the class manually.
    """
    def __init__(self, id=None, type=None, from_user_id=None, billing_address_id=None, shipping_address_id=None, comments=None, shipping_cost=None, tax_cost=None, xp=None):
        """
        Order - a model defined in Swagger

        :param dict swaggerTypes: The key is attribute name
                                  and the value is attribute type.
        :param dict attributeMap: The key is attribute name
                                  and the value is json key in definition.
        """
        self.swagger_types = {
            'id': 'str',
            'type': 'str',
            'from_user_id': 'str',
            'billing_address_id': 'str',
            'shipping_address_id': 'str',
            'comments': 'str',
            'shipping_cost': 'float',
            'tax_cost': 'float',
            'xp': 'object'
        }

        self.attribute_map = {
            'id': 'ID',
            'type': 'Type',
            'from_user_id': 'FromUserID',
            'billing_address_id': 'BillingAddressID',
            'shipping_address_id': 'ShippingAddressID',
            'comments': 'Comments',
            'shipping_cost': 'ShippingCost',
            'tax_cost': 'TaxCost',
            'xp': 'xp'
        }

        self._id = id
        self._type = type
        self._from_user_id = from_user_id
        self._billing_address_id = billing_address_id
        self._shipping_address_id = shipping_address_id
        self._comments = comments
        self._shipping_cost = shipping_cost
        self._tax_cost = tax_cost
        self._xp = xp

    @property
    def id(self):
        """
        Gets the id of this Order.


        :return: The id of this Order.
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """
        Sets the id of this Order.


        :param id: The id of this Order.
        :type: str
        """

        self._id = id

    @property
    def type(self):
        """
        Gets the type of this Order.


        :return: The type of this Order.
        :rtype: str
        """
        return self._type

    @type.setter
    def type(self, type):
        """
        Sets the type of this Order.


        :param type: The type of this Order.
        :type: str
        """

        self._type = type

    @property
    def from_user_id(self):
        """
        Gets the from_user_id of this Order.


        :return: The from_user_id of this Order.
        :rtype: str
        """
        return self._from_user_id

    @from_user_id.setter
    def from_user_id(self, from_user_id):
        """
        Sets the from_user_id of this Order.


        :param from_user_id: The from_user_id of this Order.
        :type: str
        """

        self._from_user_id = from_user_id

    @property
    def billing_address_id(self):
        """
        Gets the billing_address_id of this Order.


        :return: The billing_address_id of this Order.
        :rtype: str
        """
        return self._billing_address_id

    @billing_address_id.setter
    def billing_address_id(self, billing_address_id):
        """
        Sets the billing_address_id of this Order.


        :param billing_address_id: The billing_address_id of this Order.
        :type: str
        """

        self._billing_address_id = billing_address_id

    @property
    def shipping_address_id(self):
        """
        Gets the shipping_address_id of this Order.


        :return: The shipping_address_id of this Order.
        :rtype: str
        """
        return self._shipping_address_id

    @shipping_address_id.setter
    def shipping_address_id(self, shipping_address_id):
        """
        Sets the shipping_address_id of this Order.


        :param shipping_address_id: The shipping_address_id of this Order.
        :type: str
        """

        self._shipping_address_id = shipping_address_id

    @property
    def comments(self):
        """
        Gets the comments of this Order.


        :return: The comments of this Order.
        :rtype: str
        """
        return self._comments

    @comments.setter
    def comments(self, comments):
        """
        Sets the comments of this Order.


        :param comments: The comments of this Order.
        :type: str
        """

        self._comments = comments

    @property
    def shipping_cost(self):
        """
        Gets the shipping_cost of this Order.


        :return: The shipping_cost of this Order.
        :rtype: float
        """
        return self._shipping_cost

    @shipping_cost.setter
    def shipping_cost(self, shipping_cost):
        """
        Sets the shipping_cost of this Order.


        :param shipping_cost: The shipping_cost of this Order.
        :type: float
        """

        self._shipping_cost = shipping_cost

    @property
    def tax_cost(self):
        """
        Gets the tax_cost of this Order.


        :return: The tax_cost of this Order.
        :rtype: float
        """
        return self._tax_cost

    @tax_cost.setter
    def tax_cost(self, tax_cost):
        """
        Sets the tax_cost of this Order.


        :param tax_cost: The tax_cost of this Order.
        :type: float
        """

        self._tax_cost = tax_cost

    @property
    def xp(self):
        """
        Gets the xp of this Order.


        :return: The xp of this Order.
        :rtype: object
        """
        return self._xp

    @xp.setter
    def xp(self, xp):
        """
        Sets the xp of this Order.


        :param xp: The xp of this Order.
        :type: object
        """

        self._xp = xp

    def to_dict(self):
        """
        Returns the model properties as a dict
        """
        result = {}

        for attr, _ in iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """
        Returns the string representation of the model
        """
        return pformat(self.to_dict())

    def __repr__(self):
        """
        For `print` and `pprint`
        """
        return self.to_str()

    def __eq__(self, other):
        """
        Returns true if both objects are equal
        """
        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """
        Returns true if both objects are not equal
        """
        return not self == other