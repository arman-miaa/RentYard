"use client";

import { useState } from "react";
import {
  Home,
  Edit,
  Trash2,
  Plus,
  Upload,
  AirVent,
  Tv,
  Fan,
  Building,
  BuildingIcon as Balcony,
  Refrigerator,
  WashingMachine,
} from "lucide-react";
import ProgressBar from "../ProgressBar";

// 📦 Reusable component for uploading photos
const PhotoUploadBox = ({ label, isLarge = false, hasImage = false }) => (
  <div
    className={`border-2 border-dashed border-blue-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 transition-colors ${
      isLarge ? "col-span-2 row-span-2 p-8" : "p-4"
    } ${hasImage ? "bg-blue-50" : ""}`}
  >
    <Upload
      className={`text-blue-400 mb-2 ${isLarge ? "w-8 h-8" : "w-6 h-6"}`}
    />
    {label && (
      <span className="text-sm text-gray-600 text-center">{label}</span>
    )}
  </div>
);

export function CondominiumsFilled({prev,next}) {
  const [sections, setSections] = useState([
    {
      id: "property-address",
      title: "Property address",
      required: true,
      content:
        "Dallas Apartments complex, https://rentyard.com, Suite unit: 3D\n1423 Dallas Rd, Dallas Tx 75201, USA",
      hasEdit: true,
      hasDelete: false,
    },
    {
      id: "pet-fees",
      title: "Pet fees",
      required: false,
      description: "Optional, add fees if you allow pet",
      content:
        "Dog, Max weight: 25lb, Monthly per rent: $100\nOne time pet fee: $100, Pet security deposit: $100",
      hasEdit: true,
      hasDelete: true,
    },
    // ✂️ Add other sections as needed
  ]);

  const amenities = [
    { icon: AirVent, label: "Air conditioning", active: true },
    { icon: Tv, label: "Cable ready", active: true },
    { icon: Fan, label: "Ceiling fan", active: true },
    { icon: Building, label: "High ceilings", active: false },
    { icon: Balcony, label: "Private balcony", active: false },
    { icon: Refrigerator, label: "Refrigerator", active: true },
    { icon: WashingMachine, label: "Washer/dryer", active: false },
  ];

  const nearbyPlaces = [
    {
      category: "Nearest educational institution",
      description: "Optional but recommended",
      items: [
        "Elementary school, Institution name, 2mile",
        "High school, Institution name, 2mile",
      ],
    },
  ];

  const utilities = ["Internet - Provider A", "Cable - Provider B"];

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

      <div className="max-w-5xl mx-auto p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Condominiums Information
        </h1>

        {/* Sections */}
        <div className="grid md:grid-cols-2 gap-4">
          {sections.map((section) => (
            <div key={section.id} className="card border shadow-sm">
              <div className="card-body">
                <div className="flex justify-between">
                  <div>
                    <div className="font-semibold text-gray-900 flex items-center gap-1">
                      {section.title}
                      {section.required && (
                        <span className="text-red-500 text-sm">(Required)</span>
                      )}
                    </div>
                    {section.description && (
                      <p className="text-sm text-gray-500">
                        {section.description}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-1">
                    {section.hasEdit && (
                      <button className="btn btn-xs btn-ghost text-blue-600">
                        <Edit className="w-4 h-4" />
                      </button>
                    )}
                    {section.hasDelete && (
                      <button className="btn btn-xs btn-ghost text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
                <p className="whitespace-pre-line text-sm text-gray-700 mt-2">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities */}
        <div className="card border">
          <div className="card-body">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h2 className="font-semibold text-gray-900">
                  Community's Amenities
                </h2>
                <p className="text-sm text-gray-500">
                  Optional but recommended
                </p>
              </div>
              <button className="btn btn-sm btn-ghost text-blue-600">
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              {amenities.map((amenity, i) => {
                const Icon = amenity.icon;
                return (
                  <div
                    key={i}
                    className={`badge gap-1 px-3 py-2 ${
                      amenity.active
                        ? "badge-primary"
                        : "badge-ghost text-gray-600"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{amenity.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Nearby Places */}
        {nearbyPlaces.map((group, i) => (
          <div className="card border" key={i}>
            <div className="card-body">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <h2 className="font-semibold text-gray-900">
                    {group.category}
                  </h2>
                  <p className="text-sm text-gray-500">{group.description}</p>
                </div>
                <button className="btn btn-sm btn-ghost text-blue-600">
                  <Plus className="w-4 h-4" />
                  Add
                </button>
              </div>
              <ul className="space-y-2">
                {group.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between items-center bg-gray-50 p-2 rounded"
                  >
                    <span className="text-sm">{item}</span>
                    <div className="flex gap-1">
                      <button className="btn btn-xs btn-ghost text-blue-600">
                        <Edit className="w-3 h-3" />
                      </button>
                      <button className="btn btn-xs btn-ghost text-red-600">
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Utilities */}
        <div className="card border">
          <div className="card-body">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h2 className="font-semibold text-gray-900">Utilities</h2>
                <p className="text-sm text-gray-500">(Optional)</p>
              </div>
              <button className="btn btn-sm btn-ghost text-blue-600">
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
            <ul className="space-y-2">
              {utilities.map((utility, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center bg-gray-50 p-2 rounded"
                >
                  <span className="text-sm">{utility}</span>
                  <div className="flex gap-1">
                    <button className="btn btn-xs btn-ghost text-blue-600">
                      <Edit className="w-3 h-3" />
                    </button>
                    <button className="btn btn-xs btn-ghost text-red-600">
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gallery (Photos only example) */}
        <div className="mt-8">
          <h3 className="font-semibold text-gray-900 mb-2">Property Gallery</h3>
          <p className="text-sm text-gray-500 mb-4">(This is not unit photo)</p>

          <div className="grid grid-cols-6 gap-3 mb-6">
            <PhotoUploadBox
              label="Upload cover photo (max 5MB)"
              isLarge
              hasImage
            />
            {Array.from({ length: 6 }).map((_, i) => (
              <PhotoUploadBox key={i} hasImage={i < 2} />
            ))}
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
}
