
import { X } from "lucide-react";
import { useState } from "react";

export default function ChargesModal({ onClose }) {
  const [formData, setFormData] = useState({
    fee: "15",
    Afee:"100                    All 18 Applicte",
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
          <h2 className="text-lg font-semibold text-[#938282] ">Charges</h2>
          <button onClick={onClose} className="btn btn-sm btn-ghost">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="label">
                <span className="label-text text-[#272B35] ">
                 Application fee (one-time)
                  <span className="text-[#FF6A62]">*</span>
                </span>
              </label>
              <input
                className="input input-bordered w-full text-[#7d7373] mt-1"
                value={formData.Afee}
                onChange={(e) =>
                  handleInputChange("propertyName", e.target.value)
                }
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-[#272B35] ">
                  Admin fee (one-time)<span className="text-[#FF6A62]">*</span>
                </span>
              </label>
              <input
                className="input input-bordered w-full text-[#7d7373] mt-1"
                value={formData.fee}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between p-4 border-t border-base-300">
          <p>🔘Type 0 if Charges not applicable</p>
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

