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


class Shipment(object):
    """
    NOTE: This class is auto generated by the swagger code generator program.
    Do not edit the class manually.
    """
    def __init__(self, id=None, shipper=None, date_shipped=None, tracking_number=None, cost=None, items=None, xp=None):
        """
        Shipment - a model defined in Swagger

        :param dict swaggerTypes: The key is attribute name
                                  and the value is attribute type.
        :param dict attributeMap: The key is attribute name
                                  and the value is json key in definition.
        """
        self.swagger_types = {
            'id': 'str',
            'shipper': 'str',
            'date_shipped': 'date',
            'tracking_number': 'str',
            'cost': 'float',
            'items': 'list[ShipmentItem]',
            'xp': 'object'
        }

        self.attribute_map = {
            'id': 'ID',
            'shipper': 'Shipper',
            'date_shipped': 'DateShipped',
            'tracking_number': 'TrackingNumber',
            'cost': 'Cost',
            'items': 'Items',
            'xp': 'xp'
        }

        self._id = id
        self._shipper = shipper
        self._date_shipped = date_shipped
        self._tracking_number = tracking_number
        self._cost = cost
        self._items = items
        self._xp = xp

    @property
    def id(self):
        """
        Gets the id of this Shipment.


        :return: The id of this Shipment.
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """
        Sets the id of this Shipment.


        :param id: The id of this Shipment.
        :type: str
        """

        self._id = id

    @property
    def shipper(self):
        """
        Gets the shipper of this Shipment.


        :return: The shipper of this Shipment.
        :rtype: str
        """
        return self._shipper

    @shipper.setter
    def shipper(self, shipper):
        """
        Sets the shipper of this Shipment.


        :param shipper: The shipper of this Shipment.
        :type: str
        """

        self._shipper = shipper

    @property
    def date_shipped(self):
        """
        Gets the date_shipped of this Shipment.


        :return: The date_shipped of this Shipment.
        :rtype: date
        """
        return self._date_shipped

    @date_shipped.setter
    def date_shipped(self, date_shipped):
        """
        Sets the date_shipped of this Shipment.


        :param date_shipped: The date_shipped of this Shipment.
        :type: date
        """

        self._date_shipped = date_shipped

    @property
    def tracking_number(self):
        """
        Gets the tracking_number of this Shipment.


        :return: The tracking_number of this Shipment.
        :rtype: str
        """
        return self._tracking_number

    @tracking_number.setter
    def tracking_number(self, tracking_number):
        """
        Sets the tracking_number of this Shipment.


        :param tracking_number: The tracking_number of this Shipment.
        :type: str
        """

        self._tracking_number = tracking_number

    @property
    def cost(self):
        """
        Gets the cost of this Shipment.


        :return: The cost of this Shipment.
        :rtype: float
        """
        return self._cost

    @cost.setter
    def cost(self, cost):
        """
        Sets the cost of this Shipment.


        :param cost: The cost of this Shipment.
        :type: float
        """

        self._cost = cost

    @property
    def items(self):
        """
        Gets the items of this Shipment.


        :return: The items of this Shipment.
        :rtype: list[ShipmentItem]
        """
        return self._items

    @items.setter
    def items(self, items):
        """
        Sets the items of this Shipment.


        :param items: The items of this Shipment.
        :type: list[ShipmentItem]
        """

        self._items = items

    @property
    def xp(self):
        """
        Gets the xp of this Shipment.


        :return: The xp of this Shipment.
        :rtype: object
        """
        return self._xp

    @xp.setter
    def xp(self, xp):
        """
        Sets the xp of this Shipment.


        :param xp: The xp of this Shipment.
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
