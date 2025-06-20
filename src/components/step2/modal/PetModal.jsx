import { X } from "lucide-react";
import { useState } from "react";

export default function PetModal({ onClose }) {
  const [formData, setFormData] = useState({
  
    weight: "100",
    fee: "$100"
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
            Pet fees
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
                 Pet Type<span className="text-[#FF6A62]">*</span>
                </span>
              </label>
              <select
                className="select select-bordered w-full text-[#7d7373]"
                value={formData.country}
                onChange={(e) => handleInputChange("country", e.target.value)}
              >
                <option disabled value="">
                  Select
                </option>
                <option value="us">Black</option>
                <option value="ca">White</option>
                <option value="uk">RED</option>
                <option value="bd">Bangladeshi</option>
              </select>
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text text-[#272B35] ">
                  Max weight(LB)<span className="text-[#FF6A62]">*</span>
                </span>
              </label>
              <input
                className="input input-bordered w-full text-[#7d7373]"
                value={formData.weight}
                onChange={(e) =>
                  handleInputChange("streetAddress", e.target.value)
                }
              />
            </div>
        
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="label">
                <span className="label-text text-[#272B35] ">
                  one type pet fee<span className="text-[#FF6A62]">*</span>
                </span>
              </label>
              <input
                className="input input-bordered w-full text-[#7d7373]"
                value={formData.fee}
                onChange={(e) => handleInputChange("city", e.target.value)}
              />
            </div>
          
            <div>
              <label className="label">
                <span className="label-text text-[#272B35] ">
                 pet sequrity deposit<span className="text-[#FF6A62]">*</span>
                </span>
              </label>
              <input
                className="input input-bordered w-full text-[#7d7373]"
                value={formData.fee}
                onChange={(e) => handleInputChange("zipCode", e.target.value)}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-[#272B35] ">
                  Monthly pet rent<span className="text-[#FF6A62]">*</span>
                </span>
              </label>
              <input
                className="input input-bordered w-full text-[#7d7373]"
                value={formData.fee}
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
