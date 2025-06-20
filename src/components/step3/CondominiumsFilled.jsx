import { Edit, Trash2, Plus, Upload, HelpCircle, X } from "lucide-react";
import ProgressBar from "../ProgressBar";

const CondominiumsFilled = ({prev,next}) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-2xl font-semibold mb-8 text-gray-800">
        Condominiums information
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Property Address */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-gray-700">
                Property address<span className="text-red-500">(Required)</span>
              </h3>
              <button className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
                <Edit className="w-4 h-4" />
                Edit
              </button>
            </div>
            <p className="text-sm text-gray-600">
              Dallas apartments complex, http://rentyeard.com, Total unit: 80
              <br />
              1423 Estara Rd Dallas TX 75077, USA
            </p>
          </div>

          {/* Leasing Info */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-gray-700">
                Leasing Info<span className="text-red-500">(Required)</span>
              </h3>
              <button className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
                <Edit className="w-4 h-4" />
                Edit
              </button>
            </div>
            <p className="text-sm text-gray-600">
              Leasing manager: Alex Johan fitex, leasing@rentyeard.com
              <br />
              +8801632177501 Address(same as property)
            </p>
          </div>

          {/* Charges */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-gray-700">
                Charges<span className="text-red-500">(Required)</span>
              </h3>
              <button className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
                <Edit className="w-4 h-4" />
                Edit
              </button>
            </div>
            <p className="text-sm text-gray-600">
              Application fee: $100(All 18+ applicant), Admin fee: $15
            </p>
          </div>

          {/* Rent Frequency */}
          <div className="bg-gray-50 p-4 rounded-lg">
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
            <p className="text-sm text-gray-600">
              Rent payment frequency: Monthly, Rent reminder date: 25th every
              month
              <br />
              Rent due date: 5th every month
            </p>
          </div>

          {/* Application Agreement */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700 mb-3">
              Application agreement
              <span className="text-gray-500">(Optional)</span>
            </h3>
            <div className="flex items-center justify-between bg-white p-3 rounded border">
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
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700 mb-3">
              About the property
              <span className="text-gray-500">(Optional)</span>
            </h3>
            <p className="text-sm text-gray-600 mb-3">
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

          {/* Community Amenities */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-gray-700">
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
              <div className="relative bg-white p-3 rounded-lg border text-center">
                <button className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  <X className="text-xs" />
                </button>
                <div className="text-2xl mb-1">❄️</div>
                <p className="text-xs">Air conditioning</p>
              </div>
              <div className="relative bg-white p-3 rounded-lg border text-center">
                <button className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  <X className="text-xs" />
                </button>
                <div className="text-2xl mb-1">📺</div>
                <p className="text-xs">Cable ready</p>
              </div>
              <div className="relative bg-white p-3 rounded-lg border text-center">
                <button className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  <X className="text-xs" />
                </button>
                <div className="text-2xl mb-1">🏠</div>
                <p className="text-xs">Ceiling fan</p>
              </div>
              <div className="relative bg-white p-3 rounded-lg border text-center">
                <button className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  <X className="text-xs" />
                </button>
                <div className="text-2xl mb-1">🏠</div>
                <p className="text-xs">High ceilings</p>
              </div>
              <div className="relative bg-white p-3 rounded-lg border text-center">
                <button className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  <X className="text-xs" />
                </button>
                <div className="text-2xl mb-1">🏠</div>
                <p className="text-xs">Private balcony</p>
              </div>
              <div className="relative bg-white p-3 rounded-lg border text-center">
                <button className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  <X className="text-xs" />
                </button>
                <div className="text-2xl mb-1">❄️</div>
                <p className="text-xs">Refrigerator</p>
              </div>
              <div className="relative bg-white p-3 rounded-lg border text-center">
                <button className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  <X className="text-xs" />
                </button>
                <div className="text-2xl mb-1">🌳</div>
                <p className="text-xs">Wooded views</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Pet Fees */}
          <div className="bg-gray-50 p-4 rounded-lg">
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
              <div className="bg-white p-3 rounded border">
                <p className="text-sm font-medium">
                  Dog, Max weight: 20lb, Monthly per rent: $100
                </p>
                <p className="text-xs text-gray-500">
                  One time pet fee: $100, Pet security deposit: $100
                </p>
                <div className="flex gap-2 mt-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white p-3 rounded border">
                <p className="text-sm font-medium">
                  Dog, Max weight: 20lb, Monthly per rent: $100
                </p>
                <p className="text-xs text-gray-500">
                  One time pet fee: $100, Pet security deposit: $100
                </p>
                <div className="flex gap-2 mt-2">
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
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700 mb-3">
              Parking<span className="text-gray-500">(optional)</span>
            </h3>
            <div className="bg-white p-3 rounded border">
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
          <div className="bg-gray-50 p-4 rounded-lg">
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
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border flex justify-between items-center">
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
              <div className="bg-white p-3 rounded border flex justify-between items-center">
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
              <div className="bg-white p-3 rounded border flex justify-between items-center">
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
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-gray-700">
                Nearest stations{" "}
                <span className="text-gray-500">
                  (optional but recommended)
                </span>
              </h3>
              <button className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border flex justify-between items-center">
                <p className="text-sm">Bus, Stations name, 2mile</p>
                <div className="flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white p-3 rounded border flex justify-between items-center">
                <p className="text-sm">Train, Stations name, 2mile</p>
                <div className="flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white p-3 rounded border flex justify-between items-center">
                <p className="text-sm">Airport, Stations name, 2mile</p>
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
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-gray-700">
                Nearest landmark{" "}
                <span className="text-gray-500">
                  (optional but recommended)
                </span>
              </h3>
              <button className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border flex justify-between items-center">
                <p className="text-sm">Museums, Landmark name, 2mile</p>
                <div className="flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white p-3 rounded border flex justify-between items-center">
                <p className="text-sm">Mosque, Landmark name, 2mile</p>
                <div className="flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white p-3 rounded border flex justify-between items-center">
                <p className="text-sm">Temple, Landmark name, 2mile</p>
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
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-gray-700">
                Utilities provider
                <span className="text-gray-500">
                  (Optional but recommended)
                </span>
              </h3>
              <button className="text-blue-500 hover:text-blue-700 flex items-center gap-1">
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border flex justify-between items-center">
                <p className="text-sm">Internet-Utilities company name</p>
                <div className="flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white p-3 rounded border flex justify-between items-center">
                <p className="text-sm">Cable-Utilities company name</p>
                <div className="flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="bg-white p-3 rounded border flex justify-between items-center">
                <p className="text-sm">Internet-Utilities company name</p>
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
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-700 mb-4">
            Property gallery
            <span className="text-gray-500">(Its not unit photo)</span>
          </h3>

          {/* Featured Photos */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-600 mb-3">
              Featured photos*
            </h4>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-white">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                  <Upload className="w-6 h-6 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600">Upload cover photo</p>
                <p className="text-xs text-gray-400">Max size: 5MB</p>
              </div>
            </div>
          </div>

          {/* More Photos */}
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-3">
              More photos<span className="text-gray-500">(optional)</span>
            </h4>
            <div className="grid grid-cols-4 lg:grid-cols-7 gap-3">
              {[...Array(14)].map((_, index) => (
                <div
                  key={index}
                  className="border-2 border-dashed border-gray-300 rounded-lg aspect-square flex items-center justify-center bg-white hover:bg-gray-50 cursor-pointer"
                >
                  <Plus className="w-6 h-6 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Videos Section */}
      <div className="col-span-1 lg:col-span-2 mt-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-gray-700">
              Videos<span className="text-gray-500">(optional)</span>
            </h3>
            <button className="text-gray-400">
              <HelpCircle className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Property Video */}
            <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                  <Upload className="w-6 h-6 text-gray-400" />
                </div>
                <p className="text-sm font-medium text-gray-700 mb-1">
                  Upload video
                </p>
                <p className="text-xs text-gray-500">
                  Property Video (optional)
                </p>
                <p className="text-xs text-gray-400 mt-1">Max size: 50MB</p>
              </div>
            </div>

            {/* Virtual Tour */}
            <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                  <Upload className="w-6 h-6 text-gray-400" />
                </div>
                <p className="text-sm font-medium text-gray-700 mb-1">
                  Upload video
                </p>
                <p className="text-xs text-gray-500">
                  Property virtual tour(optional)
                </p>
                <p className="text-xs text-gray-400 mt-1">Max size: 50MB</p>
              </div>
            </div>

            {/* Arial Video */}
            <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                  <Upload className="w-6 h-6 text-gray-400" />
                </div>
                <p className="text-sm font-medium text-gray-700 mb-1">
                  Upload video
                </p>
                <p className="text-xs text-gray-500">
                  Property arial video (optional)
                </p>
                <p className="text-xs text-gray-400 mt-1">Max size: 50MB</p>
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
    </div>
  );
};

export default CondominiumsFilled;
