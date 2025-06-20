import { X } from "lucide-react";
import { useState } from "react";

export default function LeasingModal({ onClose }) {
  const [formData, setFormData] = useState({
    propertyName: "Alex Johan",
    phoneNumber: "+880",
    managerEmail: "leasing@rendyard.com",
    sameAsProperty: false,
    email: "leasing@rendyard.com",
  });


  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAdd = () => {
    console.log("Form data:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
      <div className="bg-white rounded-lg w-full max-w-3xl mx-4 max-h-[90vh] overflow-y-auto shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between bg-[#F4F4F4] p-4 ">
          <h2 className="text-lg font-semibold text-[#938282] ">Leasing Info</h2>
          <button onClick={onClose} className="btn btn-sm btn-ghost">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="label">
                <span className="label-text text-[#272B35] ">
                  Leasing manager name
                  <span className="text-[#FF6A62]">*</span>
                </span>
              </label>
              <input
                className="input input-bordered w-full text-[#7d7373] mt-1"
                value={formData.propertyName}
                onChange={(e) =>
                  handleInputChange("propertyName", e.target.value)
                }
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-[#272B35] mb-1 ">
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

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="label">
                <span className="label-text text-[#272B35] ">
                  Leasing manager email<span className="text-[#FF6A62]">*</span>
                </span>
              </label>
              <input
                className="input input-bordered w-full text-[#7d7373] mt-1"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>
            {/* Address */}
            <div>
              <label className="flex items-center gap-2 mt-8">
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

        {/* Footer */}
        <div className="flex justify-end p-4 border-t border-base-300">
          <button
            onClick={handleAdd}
            className="btn bg-[#316EED] text-white px-4"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
