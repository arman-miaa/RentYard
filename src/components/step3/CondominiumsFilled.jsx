import { Edit,Home, Trash2, Plus, Upload, HelpCircle, X } from "lucide-react";

import ProgressBar from "../ProgressBar";
import { useState } from "react";
import LeasingInfoModal from "./LeasingInfoModal";

const CondominiumsFilled = ({ prev, next }) => {
const [isLeasingModalOpen, setIsLeasingModalOpen] = useState(false);

  const PhotoUploadBox = ({ label, isLarge }) => (
    <div
      className={`border-2 border-dashed border-blue-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 transition-colors ${
        isLarge ? "col-span-2 row-span-2 p-8" : "p-4"
      }`}
    >
      <Upload
        className={`text-blue-400 mb-2 ${isLarge ? "w-8 h-8" : "w-6 h-6"}`}
      />
      {label && <span className="text-sm text-gray-600">{label}</span>}
    </div>
  );
  return (
    <div className="container mx-auto  bg-white">
      <h1 className="text-2xl font-semibold mb-8 text-gray-800">
        Condominiums information
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Property Address */}
          <div className=" border border-base-300 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-gray-700">
                Property address<span className="text-red-500">(Required)</span>
              </h3>
              <button className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
                <Edit className="w-4 h-4" />
                Edit
              </button>
            </div>
            <hr className="text-base-300" />
            <p className="text-sm text-gray-600  border-base-300 mt-2">
              Dallas apartments complex, http://rentyeard.com, Total unit: 80
            </p>
            <p className="text-sm text-gray-600 mt-1">
              1423 Estara Rd Dallas TX 75077, USA
            </p>
          </div>

          {/* Leasing Info */}

          <div className="border border-base-300 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-gray-700">
                Leasing info<span className="text-red-500">(Required)</span>
              </h3>
              <button
                onClick={() => {
                 

                  setIsLeasingModalOpen(true);
                }}
                className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
              >
                <Edit className="w-4 h-4" />
                Edit
              </button>
            </div>
            <hr className="text-base-300" />
            <p className="text-sm text-gray-600 mt-2">
              Leasing term: 12 months, Deposit: $500, Rent starts from $1200
            </p>
          </div>

          {/* ✅ Modal should be rendered outside the button */}
          {isLeasingModalOpen && (
            <LeasingInfoModal
              isOpen={isLeasingModalOpen}
              onClose={() => setIsLeasingModalOpen(false)}
            />
          )}

          {/* Charges */}

          <div className=" border border-base-300 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-gray-700">
                Charges<span className="text-red-500">(Required)</span>
              </h3>
              <button className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
                <Edit className="w-4 h-4" />
                Edit
              </button>
            </div>
            <hr className="text-base-300" />
            <p className="text-sm text-gray-600  border-base-300 mt-2">
              Application fee: $100(All 18+ applicant), Admin fee: $15
            </p>
          </div>

          <div className=" border border-base-300 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-gray-700">
                Rent frequency & payment reminder
                <span className="text-red-500">(Required)</span>
              </h3>
              <button className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
                <Edit className="w-4 h-4" />
                Edit
              </button>
            </div>
            <hr className="text-base-300" />
            <p className="text-sm text-gray-600  border-base-300 mt-2">
              Rent payment frequency: Monthly, Rent reminder date: 25th every
              month, Rent due date: 5th every month
            </p>
          </div>

          {/* Application Agreement */}
          <div className="border border-base-300 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700 mb-3">
              Application agreement
              <span className="text-gray-500">(Optional)</span>
            </h3>
            <hr className="text-base-300" />
            <div className="flex items-center justify-between  p-3 rounded ">
              <div>
                <p className="text-sm font-medium">Agreement: PDF</p>
                <p className="text-xs text-gray-500">
                  Accept immigrant & international student application
                </p>
              </div>
              <div className="flex gap-2">
                <button className="text-blue-500 hover:text-blue-700">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* About Property */}
          <div className="border border-base-300 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700 mb-3">
              About the property
              <span className="text-gray-500">(Optional)</span>
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
            <div className="flex gap-2">
              <button className="text-blue-500 hover:text-blue-700">
                <Edit className="w-4 h-4" />
              </button>
              <button className="text-red-500 hover:text-red-700">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Community Amenities */}
          <div className="border border-base-300 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-sm text-gray-700">
                Community's amenity/features
                <span className="text-gray-500">
                  (Optional but recommended)
                </span>
              </h3>
              <button className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: "❄️", label: "Air conditioning" },
                { icon: "📺", label: "Cable ready" },
                { icon: "🏠", label: "Ceiling fan" },
                { icon: "🏠", label: "High ceilings" },
                { icon: "🏠", label: "Private balcony" },
                { icon: "❄️", label: "Refrigerator" },
                { icon: "🌳", label: "Wooded views" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-center gap-1 bg-white border rounded-lg h-12 px-2"
                >
                  <button className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    <X className="text-xs" />
                  </button>
                  <span className="text-base">{item.icon}</span>
                  <p className="text-xs leading-none">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Pet Fees */}
          <div className="border border-base-300 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-gray-700">
                Pet fees
                <span className="text-gray-500">
                  (Optional, add fees if you allow pet)
                </span>
              </h3>
              <button className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
            <div className="space-y-3">
              <hr className="text-base-300" />
              <div className="flex items-center justify-between  p-3 rounded ">
                <div>
                  <p className="text-sm">
                    Dog, Max weight: 20lb, Monthly per rent: $100{" "}
                  </p>
                  <p className="text-sm ">
                    One time pet fee: $100, Pet security deposit: $100
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <hr className="text-base-300" />
              <div className="flex items-center justify-between  p-3 rounded ">
                <div>
                  <p className="text-sm">
                    Dog, Max weight: 20lb, Monthly per rent: $100{" "}
                  </p>
                  <p className="text-sm ">
                    One time pet fee: $100, Pet security deposit: $100
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Parking */}
          <div className="border border-base-300 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700 mb-3">
              Parking<span className="text-gray-500">(optional)</span>
            </h3>
            <div className=" p-3 rounded ">
              <p className="text-sm font-medium mb-2">
                Guest vehicle parking time: 2H
              </p>
              <p className="text-xs text-gray-600 mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="flex gap-2">
                <button className="text-blue-500 hover:text-blue-700">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Educational Institution */}
          <div className=" p-4 rounded-lg border border-base-300">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-gray-700">
                Nearest educational institution
                <span className="text-gray-500">
                  (optional but recommended)
                </span>
              </h3>
              <button className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
            <div className="space-y-1">
              <hr className="text-base-300" />
              <div className=" p-3 rounded  flex justify-between items-center">
                <p className="text-sm">
                  Elementary school, Institution name, 2mile
                </p>
                <div className="flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <hr className="text-base-300" />
              <div className=" p-3 rounded  flex justify-between items-center">
                <p className="text-sm">High school, Institution name, 2mile</p>
                <div className="flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <hr className="text-base-300" />
              <div className=" p-3 rounded  flex justify-between items-center">
                <p className="text-sm">
                  Elementary school, Institution name, 2mile
                </p>
                <div className="flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Nearest Stations */}
          <div className=" p-4 rounded-lg border border-base-300">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-gray-700">
                Nearest educational institution
                <span className="text-gray-500">
                  (optional but recommended)
                </span>
              </h3>
              <button className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
            <div className="space-y-1">
              <hr className="text-base-300" />
              <div className=" p-3 rounded  flex justify-between items-center">
                <p className="text-sm">
                  Elementary school, Institution name, 2mile
                </p>
                <div className="flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <hr className="text-base-300" />
              <div className=" p-3 rounded  flex justify-between items-center">
                <p className="text-sm">High school, Institution name, 2mile</p>
                <div className="flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <hr className="text-base-300" />
              <div className=" p-3 rounded  flex justify-between items-center">
                <p className="text-sm">
                  Elementary school, Institution name, 2mile
                </p>
                <div className="flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Nearest Landmark */}
          <div className=" p-4 rounded-lg border border-base-300">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-gray-700">
                Nearest educational institution
                <span className="text-gray-500">
                  (optional but recommended)
                </span>
              </h3>
              <button className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
            <div className="space-y-1">
              <hr className="text-base-300" />
              <div className=" p-3 rounded  flex justify-between items-center">
                <p className="text-sm">
                  Elementary school, Institution name, 2mile
                </p>
                <div className="flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <hr className="text-base-300" />
              <div className=" p-3 rounded  flex justify-between items-center">
                <p className="text-sm">High school, Institution name, 2mile</p>
                <div className="flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <hr className="text-base-300" />
              <div className=" p-3 rounded  flex justify-between items-center">
                <p className="text-sm">
                  Elementary school, Institution name, 2mile
                </p>
                <div className="flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Utilities Provider */}
          <div className=" p-4 rounded-lg border border-base-300">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-gray-700">
                Nearest educational institution
                <span className="text-gray-500">
                  (optional but recommended)
                </span>
              </h3>
              <button className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
            <div className="space-y-1">
              <hr className="text-base-300" />
              <div className=" p-3 rounded  flex justify-between items-center">
                <p className="text-sm">
                  Elementary school, Institution name, 2mile
                </p>
                <div className="flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <hr className="text-base-300" />
              <div className=" p-3 rounded  flex justify-between items-center">
                <p className="text-sm">High school, Institution name, 2mile</p>
                <div className="flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <hr className="text-base-300" />
              <div className=" p-3 rounded  flex justify-between items-center">
                <p className="text-sm">
                  Elementary school, Institution name, 2mile
                </p>
                <div className="flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Property Gallery */}
      <div className="col-span-1 lg:col-span-2 mt-8">
        <div className="border border-base-300 p-4 rounded-lg">
          <h3 className="font-medium text-gray-700 mb-4">
            Property gallery
            <span className="text-gray-500">(Its not unit photo)</span>
          </h3>

        
          <h4 className="font-medium mb-3">Featured photos*</h4>
          <div className="grid grid-cols-6 gap-3 mb-8">
            <PhotoUploadBox label="Upload cover photo (Max size 5MB)" isLarge />
            {Array.from({ length: 8 }).map((_, index) => (
              <PhotoUploadBox key={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Videos Section */}
      <div className="col-span-1 lg:col-span-2 mt-6">
        <div className="mb-2 border border-base-300 p-4 rounded-lg">
          <div className="mb-8 border border-base-300 p-2 rounded-xl ">
            <div className="flex items-center justify-between ">
              <div className="flex items-center space-x-2">
                <h4 className="font-medium">Videos</h4>
                <span className="text-gray-500 font-normal">(optional)</span>
              </div>
              <HelpCircle className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Property Video */}
            <div>
              <h5 className="mb-2 text-base-400">
                Property Video
                <span className="text-base-700">(optional)</span>{" "}
              </h5>
              <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                    <Upload className="w-6 h-6 text-gray-400" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 mb-1">
                    Upload video
                  </p>
                  <p className="text-xs text-gray-500">(MP4, MOV only)</p>
                </div>
              </div>
            </div>

            {/* Virtual Tour */}
            <div>
              <h5 className="mb-2 text-base-400">
                Property virtual tour
                <span className="text-base-700">(optional)</span>{" "}
              </h5>
              <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                    <Upload className="w-6 h-6 text-gray-400" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 mb-1">
                    Upload video
                  </p>
                  <p className="text-xs text-gray-500">(MP4, MOV only)</p>
                </div>
              </div>
            </div>

            {/* Arial Video */}

            <div>
              <h5 className="mb-2 text-base-400">
                Property arial video{" "}
                <span className="text-base-700">(optional)</span>{" "}
              </h5>
              <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                    <Upload className="w-6 h-6 text-gray-400" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 mb-1">
                    Upload video
                  </p>
                  <p className="text-xs text-gray-500">(MP4, MOV only)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProgressBar step={3} totalSteps={4} />
        {/* Navigation */}
        <div className="flex justify-between  pt-6">
          <button
            onClick={prev}
            className=" border-b-2 leading-none mt-4 cursor-pointer"
          >
            Back
          </button>
          <button
            onClick={next}
            className="btn btn-primary rounded-lg bg-[#316EED] border-none px-8"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CondominiumsFilled;
