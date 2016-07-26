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


class SpecProductAssignment(object):
    """
    NOTE: This class is auto generated by the swagger code generator program.
    Do not edit the class manually.
    """
    def __init__(self, spec_id=None, product_id=None, defines_variant=None):
        """
        SpecProductAssignment - a model defined in Swagger

        :param dict swaggerTypes: The key is attribute name
                                  and the value is attribute type.
        :param dict attributeMap: The key is attribute name
                                  and the value is json key in definition.
        """
        self.swagger_types = {
            'spec_id': 'str',
            'product_id': 'str',
            'defines_variant': 'bool'
        }

        self.attribute_map = {
            'spec_id': 'SpecID',
            'product_id': 'ProductID',
            'defines_variant': 'DefinesVariant'
        }

        self._spec_id = spec_id
        self._product_id = product_id
        self._defines_variant = defines_variant

    @property
    def spec_id(self):
        """
        Gets the spec_id of this SpecProductAssignment.


        :return: The spec_id of this SpecProductAssignment.
        :rtype: str
        """
        return self._spec_id

    @spec_id.setter
    def spec_id(self, spec_id):
        """
        Sets the spec_id of this SpecProductAssignment.


        :param spec_id: The spec_id of this SpecProductAssignment.
        :type: str
        """

        self._spec_id = spec_id

    @property
    def product_id(self):
        """
        Gets the product_id of this SpecProductAssignment.


        :return: The product_id of this SpecProductAssignment.
        :rtype: str
        """
        return self._product_id

    @product_id.setter
    def product_id(self, product_id):
        """
        Sets the product_id of this SpecProductAssignment.


        :param product_id: The product_id of this SpecProductAssignment.
        :type: str
        """

        self._product_id = product_id

    @property
    def defines_variant(self):
        """
        Gets the defines_variant of this SpecProductAssignment.


        :return: The defines_variant of this SpecProductAssignment.
        :rtype: bool
        """
        return self._defines_variant

    @defines_variant.setter
    def defines_variant(self, defines_variant):
        """
        Sets the defines_variant of this SpecProductAssignment.


        :param defines_variant: The defines_variant of this SpecProductAssignment.
        :type: bool
        """

        self._defines_variant = defines_variant

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
