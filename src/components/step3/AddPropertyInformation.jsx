"use client";

import { useState } from "react";
import { Home, Plus, Upload } from "lucide-react";
import { LeasingInfoModal } from "./leasing-info-modal";

export function AddPropertyInformation() {
  const [isLeasingModalOpen, setIsLeasingModalOpen] = useState(false);

  const formSections = [
    { id: "property-address", label: "Property address", required: true },
    {
      id: "pet-fees",
      label: "Pet fees",
      required: false,
      description: "Optional, add fees if you allow pet",
    },
    { id: "leasing-info", label: "Leasing info", required: true },
    {
      id: "parking",
      label: "Parking",
      required: false,
      description: "optional",
    },
    { id: "charges", label: "Charges", required: true },
    {
      id: "nearest-educational",
      label: "Nearest educational institution",
      required: false,
      description: "optional but recommended",
    },
    {
      id: "rent-frequency",
      label: "Rent frequency & payment reminder",
      required: true,
    },
    {
      id: "nearest-stations",
      label: "Nearest stations",
      required: false,
      description: "optional but recommended",
    },
    {
      id: "application-agreement",
      label: "Application agreement",
      required: false,
      description: "Optional",
    },
    {
      id: "nearest-landmark",
      label: "Nearest landmark",
      required: false,
      description: "optional but recommended",
    },
    {
      id: "about-property",
      label: "About the property",
      required: false,
      description: "Optional",
    },
    {
      id: "community-amenity",
      label: "Community's amenity/features",
      required: false,
      description: "optional but recommended",
    },
  ];

  const handleSectionAdd = (sectionId) => {
    if (sectionId === "leasing-info") {
      setIsLeasingModalOpen(true);
    }
  };

  const handleLeasingInfoSave = (data) => {
    console.log("Leasing info saved:", data);
  };

  const PhotoUploadBox = ({ label, isLarge }) => (
    <div
      className={`border-2 border-dashed border-blue-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 transition-colors ${
        isLarge ? "col-span-2 row-span-2 p-8" : "p-4"
      }`}
    >
      <Upload
        className={`text-blue-400 mb-2 ${isLarge ? "w-8 h-8" : "w-6 h-6"}`}
      />
      {label && (
        <span className="text-sm text-gray-600 text-center">{label}</span>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b bg-gray-50">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <Home className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold text-blue-600">RentYard</span>
        </div>
        <button className="btn btn-ghost text-gray-600">Save & Exit</button>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Add Property Information
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {formSections.map((section) => (
            <div
              key={section.id}
              className="card border border-gray-200 hover:border-gray-300 transition"
            >
              <div className="card-body p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-900">
                        {section.label}
                      </span>
                      {section.required && (
                        <span className="text-red-500 text-sm">(Required)</span>
                      )}
                    </div>
                    {section.description && (
                      <p className="text-sm text-gray-600 mt-1">
                        ({section.description})
                      </p>
                    )}
                  </div>
                  <button
                    className="btn btn-ghost text-blue-600 hover:text-blue-700 btn-sm"
                    onClick={() => handleSectionAdd(section.id)}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Property Gallery Section */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Property gallery
          </h3>
          <p className="text-sm text-gray-600 mb-4">(It's not unit photo)*</p>

          {/* Featured Photos */}
          <h4 className="font-medium text-gray-900 mb-3">Featured photos*</h4>
          <div className="grid grid-cols-6 gap-3 mb-8">
            <PhotoUploadBox label="Upload cover photo (Max size 5MB)" isLarge />
            {Array.from({ length: 10 }).map((_, i) => (
              <PhotoUploadBox key={i} />
            ))}
          </div>

          {/* Video Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <h4 className="font-medium text-gray-900">Videos</h4>
              <span className="text-sm text-gray-500">(optional)</span>
            </div>
            {/* You can add video upload UI here if needed */}
          </div>
        </div>

        {/* Footer buttons */}
        <div className="flex justify-between pt-8 border-t">
          <button className="btn btn-ghost text-gray-600">Back</button>
          <button className="btn bg-blue-600 hover:bg-blue-700 text-white px-8">
            Get started
          </button>
        </div>
      </div>

      {/* Modal */}
      <LeasingInfoModal
        isOpen={isLeasingModalOpen}
        onClose={() => setIsLeasingModalOpen(false)}
        onSave={handleLeasingInfoSave}
      />
    </div>
  );
}
