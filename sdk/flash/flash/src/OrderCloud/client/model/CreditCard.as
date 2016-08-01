package OrderCloud.client.model {

import OrderCloud.client.model.Object;

    [XmlRootNode(name="CreditCard")]
    public class CreditCard {
                [XmlElement(name="ID")]
        public var id: String = null;
                [XmlElement(name="Token")]
        public var token: String = null;
                [XmlElement(name="CardType")]
        public var cardType: String = null;
                [XmlElement(name="PartialAccountNumber")]
        public var partialAccountNumber: String = null;
                [XmlElement(name="CardholderName")]
        public var cardholderName: String = null;
                [XmlElement(name="ExpirationDate")]
        public var expirationDate: Date = null;
                [XmlElement(name="xp")]
        public var xp: Object = NaN;

    public function toString(): String {
        var str: String = "CreditCard: ";
        str += " (id: " + id + ")";
        str += " (token: " + token + ")";
        str += " (cardType: " + cardType + ")";
        str += " (partialAccountNumber: " + partialAccountNumber + ")";
        str += " (cardholderName: " + cardholderName + ")";
        str += " (expirationDate: " + expirationDate + ")";
        str += " (xp: " + xp + ")";
        return str;
    }

}

}