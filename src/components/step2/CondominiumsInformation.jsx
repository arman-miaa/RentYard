
// import { useState } from "react";
import { Home, Plus, Upload, Play, HelpCircle } from "lucide-react";
import ProgressBar from "../ProgressBar";
import { useState } from "react";

import AboutModal from "./modal/AboutModal";
import ApplicationModal from "./modal/ApplicationModal";
import ChargesModal from "./modal/ChargesModal";
import CommunityModal from "./modal/CommunityModal";
import EducationalModal from "./modal/EducationalModal";
import LandmarkModal from "./modal/LandmarkModal";
import LeasingModal from "./modal/LeasingModal";
import ParkingModal from "./modal/ParkingModal";
import PetModal from "./modal/PetModal";
import PropertyModal from "./modal/PropertyModal";
import RentModal from "./modal/RentModal";
import StationsModal from "./modal/StationsModal";
import UtilitiesModal from "./modal/UtilitiesModal";


export function CondominiumsInformation({prev,next}) {
  const [activeModal, setActiveModal] = useState(null);


  

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
      description: "Optional",
    },
    { id: "charges", label: "Charges", required: true },
    {
      id: "nearest-educational",
      label: "Nearest educational institution",
      required: false,
      description: "Optional but recommended",
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
      description: "Optional but recommended",
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
      description: "Optional but recommended",
    },
    {
      id: "about-property",
      label: "About the property",
      required: false,
      description: "Optional",
    },
    {
      id: "utilities-provider",
      label: "Utilities provider",
      required: false,
      description: "Optional but recommended",
    },
    {
      id: "community-amenity",
      label: "Community's amenity/features",
      required: false,
      description: "Optional but recommended",
    },
  ];

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
    <div>
      <div className="min-h-screen bg-base-100">
        <div className="container mx-auto py-6">
          <h1 className="text-2xl font-semibold mb-6">
            Condominiums information
          </h1>

          {/* Form Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {formSections.map((section) => (
              <div
                key={section.id}
                className="card bg-base-100 border border-base-300 hover:shadow transition-all"
              >
                <div className="card-body p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 truncate">
                      <span className="font-medium text-sm text-[#272B35] truncate">
                        {section.label}
                      </span>
                      <span
                        className={`text-xs ${
                          section.required ? "text-red-500" : "text-gray-500"
                        }`}
                      >
                        {section.required ? "(Required)" : "(Optional)"}
                      </span>
                    </div>
                    <button
                      onClick={() => setActiveModal(section.id)}
                      className="btn btn-sm btn-ghost text-primary whitespace-nowrap"
                    >
                      <Plus className="w-4 h-4 mr-1" /> Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Property Gallery Section */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-1">Property gallery</h3>
            <p className="text-sm text-gray-600 mb-6">(It's not unit photo)*</p>

            {/* Featured Photos */}
            <h4 className="font-medium mb-3">Featured photos*</h4>
            <div className="grid grid-cols-6 gap-3 mb-8">
              <PhotoUploadBox
                label="Upload cover photo (Max size 5MB)"
                isLarge
              />
              {Array.from({ length: 8 }).map((_, index) => (
                <PhotoUploadBox key={index} />
              ))}
            </div>

            {/* Videos Section */}
            <div className="mb-8 border border-base-300 p-2 rounded-xl ">
              <div className="flex items-center justify-between ">
                <div className="flex items-center space-x-2">
                  <h4 className="font-medium">Videos</h4>
                  <span className="text-gray-500 font-normal">(optional)</span>
                </div>
                <HelpCircle className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <ProgressBar step={2} totalSteps={4} />
          <div className="flex justify-between pt-8 ">
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
      {activeModal === "about-property" && (
        <AboutModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "application-agreement" && (
        <ApplicationModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "charges" && (
        <ChargesModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "community-amenity" && (
        <CommunityModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "nearest-educational" && (
        <EducationalModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "nearest-landmark" && (
        <LandmarkModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "leasing-info" && (
        <LeasingModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "parking" && (
        <ParkingModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "pet-fees" && (
        <PetModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "property-address" && (
        <PropertyModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "rent-frequency" && (
        <RentModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "nearest-stations" && (
        <StationsModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "utilities-provider" && (
        <UtilitiesModal onClose={() => setActiveModal(null)} />
      )}
    </div>
  );
}



