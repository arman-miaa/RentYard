import { Upload } from "lucide-react";

export function RealtorVerification({ acceptTerms, onAcceptTermsChange }) {
  return (
    <div className="space-y-6 py-6 rounded-lg">
      <h3 className="text-lg font-semibold text-[#6F6C6A] w-full text-left border border-[#e0e0e0] bg-[#f4f4f4] rounded-lg p-2">
        Realtor verification
      </h3>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Lenience Number Input */}
        <div className="w-full lg:w-1/2">
          <label className="label">
            <span className="text-base font-medium text-gray-500">
              Lenience number*
            </span>
          </label>
          <input
            type="text"
            placeholder="000000000000"
            className="input input-bordered w-full mt-1"
          />
        </div>

        {/* Document Uploads */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Upload Box 1 */}
          <div className="w-full">
            <label className="label">
              <span className="text-base font-medium text-gray-900">
                Additional documents for realtor
              </span>
            </label>
            <label className="mt-2 bg-[#E0E0E0] rounded-lg p-3 cursor-pointer flex items-center justify-center gap-2 w-full min-h-[48px] hover:bg-[#d6d6d6] transition">
              <Upload className="w-5 h-5 text-gray-400" />
              <p className="text-gray-600 text-sm">(pdf only)</p>
              <input type="file" accept=".pdf" className="hidden" />
            </label>
          </div>

          {/* Upload Box 2 */}
          <div className="w-full">
            <label className="label">
              <span className="text-base font-medium text-gray-900">
                Agreement with landlord*
              </span>
            </label>
            <label className="mt-2 bg-[#E0E0E0] rounded-lg p-3 cursor-pointer flex items-center justify-center gap-2 w-full min-h-[48px] hover:bg-[#d6d6d6] transition">
              <Upload className="w-5 h-5 text-gray-400" />
              <p className="text-gray-600 text-sm">(pdf only)</p>
              <input type="file" accept=".pdf" className="hidden" />
            </label>
          </div>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="form-control">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            className="checkbox"
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
