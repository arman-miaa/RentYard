import { Upload, X } from "lucide-react";

export default function ParkingModal({ onClose }) {
  const handleAdd = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg w-full max-w-3xl mx-4 max-h-[90vh] overflow-y-auto shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between bg-[#F4F4F4] p-4">
          <h2 className="text-lg font-semibold text-[#938282]">parking</h2>
          <button onClick={onClose} className="btn btn-sm btn-ghost">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-2 w-1/2">
          <label className="label"></label>
          <input
            className="input input-bordered w-full "
            value="Guest vehicle parking time"
          />
        </div>

        <div className="p-2">
          <textarea
            className="border rounded-xl border-base-300 w-full p-2 "
            defaultValue="Write parking overview"
            name=""
            id=""
            cols="30"
            rows="7"
          ></textarea>
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
