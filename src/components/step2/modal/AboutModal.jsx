import {  X } from "lucide-react";
export default function AboutModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-4 rounded-lg">
        <div className=" bg-[#f4f4f4] p-2 rounded-lg flex items-center justify-between mb-4">
          <h2 className="text-xl text-[#6F6C6A] ">Leasing Info</h2>
          <button onClick={onClose} className="btn btn-sm btn-ghost">
            <X className="w-5 h-5" />
          </button>
        </div>
        <h2 className="text-xl font-bold mb-2">About Property</h2>
        <p>Modal content goes here...</p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mt-4 btn btn-sm bg-[#316EED] text-white "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
