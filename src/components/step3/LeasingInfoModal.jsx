

import { useState } from "react";
import { X } from "lucide-react";

export default function LeasingInfoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    managerName: "Alex Johan",
    phoneNumber: "+880",
    email: "leasing@rentyard.com",
    sameAsProperty: false,
    streetAddress: "111 Austin Ave",
    aptUnit: "123",
    city: "Dallas",
    state: "",
    zipCode: "75061",
  });

  // const handleSave = () => {
  //   onSave(formData);
  //   onClose();
  // };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
        {/* Header */}
        <div className=" bg-[#f4f4f4] p-2 rounded-lg flex items-center justify-between mb-4">
          <h2 className="text-xl text-[#6F6C6A] ">Leasing Info</h2>
          <button onClick={onClose} className="btn btn-sm btn-ghost">
            <X className="w-5 h-5" />
          </button>
        </div>
        {/* #272B35
#FF6A62 */}
        {/* Form */}
        <div className="space-y-6">
          {/* Manager Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">
                <span className="label-text text-[#272B35] ">
                  Leasing manager name<span className="text-[#FF6A62]">*</span>
                </span>
              </label>
              <input
                className="input input-bordered w-full"
                value={formData.managerName}
                onChange={(e) =>
                  handleInputChange("managerName", e.target.value)
                }
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-[#272B35] ">
                  Leasing manager phone number
                  <span className="text-[#FF6A62]">*</span>
                </span>
              </label>
              <div className="flex gap-2">
                <select className="select select-bordered w-20">
                  <option>🇧🇩</option>
                  <option>🇺🇸</option>
                  <option>🇨🇦</option>
                  <option>🇬🇧</option>
                </select>
                <input
                  className="input input-bordered flex-1"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    handleInputChange("phoneNumber", e.target.value)
                  }
                />
              </div>
            </div>
          </div>

          <div>
            <label className="label">
              <span className="label-text text-[#272B35] ">
                Leasing manager email
                <span className="text-[#FF6A62]">*</span>
              </span>
            </label>
            <div className="flex items-center gap-4">
              <input
                type="email"
                className="input input-bordered "
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              {/* Address */}
              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={formData.sameAsProperty}
                    onChange={(e) =>
                      handleInputChange("sameAsProperty", e.target.checked)
                    }
                  />
                  <span className="label-text">Address (same as property)</span>
                </label>
              </div>
            </div>
          </div>
   

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="label">
                <span className="label-text text-[#272B35] ">
                  Street address
                  <span className="text-[#FF6A62]">*</span>
                </span>
              </label>
              <input
                className="input input-bordered w-full"
                value={formData.streetAddress}
                disabled={formData.sameAsProperty}
                onChange={(e) =>
                  handleInputChange("streetAddress", e.target.value)
                }
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-[#272B35] ">
                  Apt, suite, unit
                  <span className="text-[#FF6A62]">*</span>
                </span>
              </label>
              <input
                className="input input-bordered w-full"
                value={formData.aptUnit}
                disabled={formData.sameAsProperty}
                onChange={(e) => handleInputChange("aptUnit", e.target.value)}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-[#272B35] ">
                  City/Town
                  <span className="text-[#FF6A62]">*</span>
                </span>
              </label>
              <input
                className="input input-bordered w-full"
                value={formData.city}
                disabled={formData.sameAsProperty}
                onChange={(e) => handleInputChange("city", e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="label">
                <span className="label-text text-[#272B35] ">
                  State/Territory
                  <span className="text-[#FF6A62]">*</span>
                </span>
              </label>
              <select
                className="select select-bordered w-full"
                value={formData.state}
                disabled={formData.sameAsProperty}
                onChange={(e) => handleInputChange("state", e.target.value)}
              >
                <option value="">Choose state</option>
                <option value="tx">Texas</option>
                <option value="ca">California</option>
                <option value="ny">New York</option>
                <option value="fl">Florida</option>
                <option value="il">Illinois</option>
              </select>
            </div>

            <div>
              <label className="label">
                <span className="label-text text-[#272B35] ">
                  Zip code
                  <span className="text-[#FF6A62]">*</span>
                </span>
              </label>
              <input
                className="input input-bordered w-full"
                value={formData.zipCode}
                disabled={formData.sameAsProperty}
                onChange={(e) => handleInputChange("zipCode", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-end mt-6 border-t pt-4">
          <button
            onClick={onClose}
            className="btn bg-[#316EED] text-white px-8"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
