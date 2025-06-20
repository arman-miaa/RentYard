

import { X } from "lucide-react";
import { useState } from "react";

export default function PropertyModal({ onClose }) {
  const [formData, setFormData] = useState({
    propertyName: "Dallas apartments complex",
    totalUnits: "50",
    website: "https://",
    country: "",
    streetAddress: "111 Austin Ave",
    aptUnit: "123",
    city: "Dallas",
    state: "",
    zipCode: "75061",
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
          <h2 className="text-lg font-semibold text-[#938282]">
            Property address
          </h2>
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
                  Property name as identifier
                  <span className="text-[#FF6A62]">*</span>
                </span>
              </label>
              <input
                className="input input-bordered w-full text-[#7d7373]"
                value={formData.propertyName}
                onChange={(e) =>
                  handleInputChange("propertyName", e.target.value)
                }
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-[#272B35] ">
                  Total apartment unit<span className="text-[#FF6A62]">*</span>
                </span>
              </label>
              <input
                className="input input-bordered w-full text-[#7d7373]"
                value={formData.totalUnits}
                onChange={(e) =>
                  handleInputChange("totalUnits", e.target.value)
                }
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-[#272B35] ">
                  Property website(optional)
                </span>
              </label>
              <input
                className="input input-bordered w-full text-[#7d7373]"
                value={formData.website}
                onChange={(e) => handleInputChange("website", e.target.value)}
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="label">
                <span className="label-text text-[#272B35] ">
                  Country/Region<span className="text-[#FF6A62]">*</span>
                </span>
              </label>
              <select
                className="select select-bordered w-full text-[#7d7373]"
                value={formData.country}
                onChange={(e) => handleInputChange("country", e.target.value)}
              >
                <option disabled value="">
                  Choose country
                </option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="bd">Bangladesh</option>
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-[#272B35] ">
                  Street address<span className="text-[#FF6A62]">*</span>
                </span>
              </label>
              <input
                className="input input-bordered w-full text-[#7d7373]"
                value={formData.streetAddress}
                onChange={(e) =>
                  handleInputChange("streetAddress", e.target.value)
                }
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-[#272B35] ">
                  Apt, suite, unit (if applicable)
                </span>
              </label>
              <input
                className="input input-bordered w-full text-[#7d7373]"
                value={formData.aptUnit}
                onChange={(e) => handleInputChange("aptUnit", e.target.value)}
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="label">
                <span className="label-text text-[#272B35] ">
                  City/Town<span className="text-[#FF6A62]">*</span>
                </span>
              </label>
              <input
                className="input input-bordered w-full text-[#7d7373]"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-[#272B35] ">
                  State/Territory<span className="text-[#FF6A62]">*</span>
                </span>
              </label>
              <select
                className="select select-bordered w-full text-[#7d7373]"
                value={formData.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
              >
                <option disabled value="">
                  Choose state
                </option>
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
                  Zip code<span className="text-[#FF6A62]">*</span>
                </span>
              </label>
              <input
                className="input input-bordered w-full text-[#7d7373]"
                value={formData.zipCode}
                onChange={(e) => handleInputChange("zipCode", e.target.value)}
              />
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
