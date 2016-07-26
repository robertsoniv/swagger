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


class Product(object):
    """
    NOTE: This class is auto generated by the swagger code generator program.
    Do not edit the class manually.
    """
    def __init__(self, id=None, name=None, description=None, quantity_multiplier=None, ship_weight=None, active=None, type=None, inventory_enabled=None, inventory_notification_point=None, variant_level_inventory=None, xp=None, allow_order_exceed_inventory=None, inventory_visible=None):
        """
        Product - a model defined in Swagger

        :param dict swaggerTypes: The key is attribute name
                                  and the value is attribute type.
        :param dict attributeMap: The key is attribute name
                                  and the value is json key in definition.
        """
        self.swagger_types = {
            'id': 'str',
            'name': 'str',
            'description': 'str',
            'quantity_multiplier': 'int',
            'ship_weight': 'float',
            'active': 'bool',
            'type': 'str',
            'inventory_enabled': 'bool',
            'inventory_notification_point': 'int',
            'variant_level_inventory': 'bool',
            'xp': 'object',
            'allow_order_exceed_inventory': 'bool',
            'inventory_visible': 'bool'
        }

        self.attribute_map = {
            'id': 'ID',
            'name': 'Name',
            'description': 'Description',
            'quantity_multiplier': 'QuantityMultiplier',
            'ship_weight': 'ShipWeight',
            'active': 'Active',
            'type': 'Type',
            'inventory_enabled': 'InventoryEnabled',
            'inventory_notification_point': 'InventoryNotificationPoint',
            'variant_level_inventory': 'VariantLevelInventory',
            'xp': 'xp',
            'allow_order_exceed_inventory': 'AllowOrderExceedInventory',
            'inventory_visible': 'InventoryVisible'
        }

        self._id = id
        self._name = name
        self._description = description
        self._quantity_multiplier = quantity_multiplier
        self._ship_weight = ship_weight
        self._active = active
        self._type = type
        self._inventory_enabled = inventory_enabled
        self._inventory_notification_point = inventory_notification_point
        self._variant_level_inventory = variant_level_inventory
        self._xp = xp
        self._allow_order_exceed_inventory = allow_order_exceed_inventory
        self._inventory_visible = inventory_visible

    @property
    def id(self):
        """
        Gets the id of this Product.


        :return: The id of this Product.
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """
        Sets the id of this Product.


        :param id: The id of this Product.
        :type: str
        """

        self._id = id

    @property
    def name(self):
        """
        Gets the name of this Product.


        :return: The name of this Product.
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """
        Sets the name of this Product.


        :param name: The name of this Product.
        :type: str
        """

        self._name = name

    @property
    def description(self):
        """
        Gets the description of this Product.


        :return: The description of this Product.
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """
        Sets the description of this Product.


        :param description: The description of this Product.
        :type: str
        """

        self._description = description

    @property
    def quantity_multiplier(self):
        """
        Gets the quantity_multiplier of this Product.


        :return: The quantity_multiplier of this Product.
        :rtype: int
        """
        return self._quantity_multiplier

    @quantity_multiplier.setter
    def quantity_multiplier(self, quantity_multiplier):
        """
        Sets the quantity_multiplier of this Product.


        :param quantity_multiplier: The quantity_multiplier of this Product.
        :type: int
        """

        self._quantity_multiplier = quantity_multiplier

    @property
    def ship_weight(self):
        """
        Gets the ship_weight of this Product.


        :return: The ship_weight of this Product.
        :rtype: float
        """
        return self._ship_weight

    @ship_weight.setter
    def ship_weight(self, ship_weight):
        """
        Sets the ship_weight of this Product.


        :param ship_weight: The ship_weight of this Product.
        :type: float
        """

        self._ship_weight = ship_weight

    @property
    def active(self):
        """
        Gets the active of this Product.


        :return: The active of this Product.
        :rtype: bool
        """
        return self._active

    @active.setter
    def active(self, active):
        """
        Sets the active of this Product.


        :param active: The active of this Product.
        :type: bool
        """

        self._active = active

    @property
    def type(self):
        """
        Gets the type of this Product.


        :return: The type of this Product.
        :rtype: str
        """
        return self._type

    @type.setter
    def type(self, type):
        """
        Sets the type of this Product.


        :param type: The type of this Product.
        :type: str
        """

        self._type = type

    @property
    def inventory_enabled(self):
        """
        Gets the inventory_enabled of this Product.


        :return: The inventory_enabled of this Product.
        :rtype: bool
        """
        return self._inventory_enabled

    @inventory_enabled.setter
    def inventory_enabled(self, inventory_enabled):
        """
        Sets the inventory_enabled of this Product.


        :param inventory_enabled: The inventory_enabled of this Product.
        :type: bool
        """

        self._inventory_enabled = inventory_enabled

    @property
    def inventory_notification_point(self):
        """
        Gets the inventory_notification_point of this Product.


        :return: The inventory_notification_point of this Product.
        :rtype: int
        """
        return self._inventory_notification_point

    @inventory_notification_point.setter
    def inventory_notification_point(self, inventory_notification_point):
        """
        Sets the inventory_notification_point of this Product.


        :param inventory_notification_point: The inventory_notification_point of this Product.
        :type: int
        """

        self._inventory_notification_point = inventory_notification_point

    @property
    def variant_level_inventory(self):
        """
        Gets the variant_level_inventory of this Product.


        :return: The variant_level_inventory of this Product.
        :rtype: bool
        """
        return self._variant_level_inventory

    @variant_level_inventory.setter
    def variant_level_inventory(self, variant_level_inventory):
        """
        Sets the variant_level_inventory of this Product.


        :param variant_level_inventory: The variant_level_inventory of this Product.
        :type: bool
        """

        self._variant_level_inventory = variant_level_inventory

    @property
    def xp(self):
        """
        Gets the xp of this Product.


        :return: The xp of this Product.
        :rtype: object
        """
        return self._xp

    @xp.setter
    def xp(self, xp):
        """
        Sets the xp of this Product.


        :param xp: The xp of this Product.
        :type: object
        """

        self._xp = xp

    @property
    def allow_order_exceed_inventory(self):
        """
        Gets the allow_order_exceed_inventory of this Product.


        :return: The allow_order_exceed_inventory of this Product.
        :rtype: bool
        """
        return self._allow_order_exceed_inventory

    @allow_order_exceed_inventory.setter
    def allow_order_exceed_inventory(self, allow_order_exceed_inventory):
        """
        Sets the allow_order_exceed_inventory of this Product.


        :param allow_order_exceed_inventory: The allow_order_exceed_inventory of this Product.
        :type: bool
        """

        self._allow_order_exceed_inventory = allow_order_exceed_inventory

    @property
    def inventory_visible(self):
        """
        Gets the inventory_visible of this Product.


        :return: The inventory_visible of this Product.
        :rtype: bool
        """
        return self._inventory_visible

    @inventory_visible.setter
    def inventory_visible(self, inventory_visible):
        """
        Sets the inventory_visible of this Product.


        :param inventory_visible: The inventory_visible of this Product.
        :type: bool
        """

        self._inventory_visible = inventory_visible

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
