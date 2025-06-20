

import { useState } from "react";
import { CreditCard, X } from "lucide-react";

export function PaymentModal({ isOpen, onClose, onSave }) {
  const [cardData, setCardData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    cardholderName: "",
  });

  const handleSave = () => {
    onSave(cardData);
    onClose();
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(" ") : v;
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setCardData({ ...cardData, cardNumber: formatted });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <div className="flex items-center justify-between border-b pb-3 mb-4">
          <h3 className="text-lg font-semibold">Add new card</h3>
          <button onClick={onClose} className="btn btn-sm btn-ghost">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Card number</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="0000 0000 0000 0000"
                maxLength={19}
                value={cardData.cardNumber}
                onChange={handleCardNumberChange}
                className="input input-bordered w-full pr-10"
              />
              <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="label">
                <span className="label-text">Expiry date</span>
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                maxLength={5}
                value={cardData.expiryDate}
                onChange={(e) =>
                  setCardData({ ...cardData, expiryDate: e.target.value })
                }
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">CVC</span>
              </label>
              <input
                type="text"
                placeholder="123"
                maxLength={4}
                value={cardData.cvc}
                onChange={(e) =>
                  setCardData({ ...cardData, cvc: e.target.value })
                }
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div>
            <label className="label">
              <span className="label-text">Cardholder name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={cardData.cardholderName}
              onChange={(e) =>
                setCardData({ ...cardData, cardholderName: e.target.value })
              }
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSave}
            className="btn bg-blue-600 hover:bg-blue-700 text-white px-6"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
