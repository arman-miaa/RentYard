

import { X } from "lucide-react";
import { useState } from "react";

export default function RentModal({ onClose }) {
  const [formData, setFormData] = useState({
  
    frequency: "monthly",
    
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg w-full max-w-3xl mx-4 max-h-[90vh] overflow-y-auto shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between bg-[#F4F4F4] p-4">
          <h2 className="text-lg font-semibold text-[#938282]">
            Rent frequency & payment reminder
          </h2>
          <button onClick={onClose} className="btn btn-sm btn-ghost">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 1. Frequency select */}
            <div>
              <label className="label">
                <span className="label-text text-[#272B35] mb-1">
                  Rent payment frequency
                  <span className="text-[#FF6A62]">*</span>
                </span>
              </label>
              <select
                className="select select-bordered w-full"
                value={formData.frequency}
                onChange={(e) => handleInputChange("frequency", e.target.value)}
              >
                <option value="monthly">Monthly</option>
                <option value="weekly">Weekly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>

            <div>
              <label className="label">
                <span className="label-text text-[#272B35] mb-1">
                  Rent Reminder/Statement date
                  <span className="text-[#FF6A62]">*</span>
                </span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                value="25th Every Month"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-[#272B35] mb-1">
                  Rent due date
                  <span className="text-[#FF6A62]">*</span>
                </span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                value="25th Every Month"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-4 border-t border-base-300">
          <button
            onClick={handleAdd}
            className="btn bg-[#316EED] text-white px-6"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
