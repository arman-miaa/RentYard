import { useState } from "react";
import { Upload } from "lucide-react";

export function CompanyInfo({ acceptTerms, onAcceptTermsChange }) {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [phoneCode, setPhoneCode] = useState("");

  return (
    <div className="space-y-6 rounded-lg">
      <h3 className="text-lg font-semibold text-[#6F6C6A] w-full text-left border border-[#e0e0e0] bg-[#f4f4f4] rounded-lg p-2">
        Company & Office Info
      </h3>

      {/* Company Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="label">
            <span className="label-text">Company name*</span>
          </label>
          <input
            type="text"
            placeholder="Runyan trade center"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Company Identifier (EIN/TIN)*</span>
          </label>
          <input
            type="text"
            placeholder="123456789"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Your job title*</span>
          </label>
          <input
            type="text"
            placeholder="Manager"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="label">
            <span className="text-base font-medium">
              Agreement with landlord/owner*
            </span>
          </label>
          <label className="bg-[#E0E0E0] rounded-lg p-3 cursor-pointer flex items-center justify-center gap-2 w-full min-h-[48px] hover:bg-[#d6d6d6] transition">
            <Upload className="w-5 h-5 text-gray-400" />
            <p className="text-gray-600 text-sm">(pdf only)</p>
            <input type="file" accept=".pdf" className="hidden" />
          </label>
        </div>
      </div>

      {/* Address Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="label">
            <span className="label-text">Country/Region*</span>
          </label>
          <select
            className="select select-bordered w-full"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
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
            <span className="label-text">Street address*</span>
          </label>
          <input
            type="text"
            placeholder="111 Austin Ave"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Apt, suite, unit (if applicable)</span>
          </label>
          <input
            type="text"
            placeholder="3050"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Phone number*</span>
          </label>
          <div className="flex gap-2">
            <select
              className="select select-bordered w-20"
              value={phoneCode}
              onChange={(e) => setPhoneCode(e.target.value)}
            >
              <option value="">🇧🇩</option>
              <option value="us">🇺🇸</option>
              <option value="ca">🇨🇦</option>
            </select>
            <input
              type="text"
              placeholder="+880"
              className="input input-bordered w-full"
            />
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="label">
            <span className="label-text">Contact email*</span>
          </label>
          <input
            type="email"
            placeholder="example@email.com"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">City/Town*</span>
          </label>
          <input
            type="text"
            placeholder="Dhaka"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">State/Territory*</span>
          </label>
          <select
            className="select select-bordered w-full"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option disabled value="">
              Choose state
            </option>
            <option value="tx">Texas</option>
            <option value="ca">California</option>
            <option value="ny">New York</option>
            <option value="fl">Florida</option>
          </select>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Zip code*</span>
          </label>
          <input
            type="text"
            placeholder="75061"
            className="input input-bordered w-full"
          />
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="form-control">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            checked={acceptTerms}
            onChange={(e) => onAcceptTermsChange(e.target.checked)}
            className="checkbox"
          />
          <span className="label-text ml-2">
            Accept RentYard property adding terms & condition
          </span>
        </label>
      </div>
    </div>
  );
}
