
import { Upload, X } from "lucide-react";


export default function ApplicationModal({ onClose }) {
 ;



  const handleAdd = () => {
    
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg w-full max-w-3xl mx-4 max-h-[90vh] overflow-y-auto shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between bg-[#F4F4F4] p-4">
          <h2 className="text-lg font-semibold text-[#938282]">
            Application agreement (optional)
          </h2>
          <button onClick={onClose} className="btn btn-sm btn-ghost">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="w-full p-4">
          <label className="label">
            <span className="text-base font-medium text-gray-900">
              Upload agreement
            </span>
          </label>
          <label className="mt-2 bg-[#E0E0E0] rounded-lg p-3 cursor-pointer flex items-center justify-center gap-2 w-full min-h-[48px] hover:bg-[#d6d6d6] transition">
            <Upload className="w-5 h-5 text-gray-400" />
            <p className="text-gray-600 text-sm">(pdf only)</p>
            <input type="file" accept=".pdf" className="hidden" />
          </label>

          <label htmlFor="">
            <input type="checkbox" name="" id="" className="mt-4" />
            <span> Accept immigrant & international student application</span>
          </label>
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
