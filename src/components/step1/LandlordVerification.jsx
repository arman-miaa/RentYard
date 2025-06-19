
import { Upload } from "lucide-react";

export function LandlordVerification({ acceptTerms, onAcceptTermsChange }) {
  return (
    <div className="space-y-6">
      <h3 className="  text-lg font-semibold text-[#6F6C6A] w-full text-left border border-[#e0e0e0] bg-[#f4f4f4] rounded-lg p-2">
        Proof of ownership
      </h3>

      <div>
        <label className="label">
          <span className="text-base font-medium text-gray-500">
            Ownership doc*
          </span>
        </label>
        <label className="mt-2 max-w-96 bg-[#E0E0E0] rounded-lg p-2 text-center cursor-pointer flex items-center justify-center gap-1">
          <Upload className="w-5 h-5 text-gray-400" />
          <p className="text-gray-600 text-sm">(pdf only)</p>
          <input type="file" accept=".pdf" className="hidden" />
        </label>
      </div>

      <div className="form-control">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            className="checkbox "
            checked={acceptTerms}
            onChange={(e) => onAcceptTermsChange(e.target.checked)}
          />
          <span className="label-text ml-2 text-sm text-gray-700">
            Accept RentYard property adding terms & condition
          </span>
        </label>
      </div>
    </div>
  );
}
