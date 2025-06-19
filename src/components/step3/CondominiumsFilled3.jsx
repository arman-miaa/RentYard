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
  Building2,
  Refrigerator,
  WashingMachine,
} from "lucide-react";

export default function CondominiumsFilled() {
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
    // ...rest of sections (same as original)
  ]);
console.log(setSections);
  const amenities = [
    { icon: AirVent, label: "Air conditioning", active: true },
    { icon: Tv, label: "Cable ready", active: true },
    { icon: Fan, label: "Ceiling fan", active: true },
    { icon: Building, label: "High ceilings", active: false },
    { icon: Building2, label: "Private balcony", active: false },
    { icon: Refrigerator, label: "Refrigerator", active: true },
    { icon: WashingMachine, label: "Washer/dryer", active: false },
  ];

  const PhotoUploadBox = ({ label, isLarge, hasImage }) => (
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

  return (
    <div className="min-h-screen bg-white">
      <div className="flex items-center justify-between p-6 border-b bg-gray-50">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <Home className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold text-blue-600">RentYard</span>
        </div>
        <button className="btn btn-ghost text-gray-600">Save & Exit</button>
      </div>

      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Condominiums information
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sections.map((section) => (
            <div key={section.id} className="border rounded shadow-sm p-4">
              <div className="flex justify-between mb-3">
                <div>
                  <div className="font-semibold text-gray-800 flex gap-2">
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
                    <button className="btn btn-sm btn-ghost text-blue-600">
                      <Edit className="w-4 h-4" />
                    </button>
                  )}
                  {section.hasDelete && (
                    <button className="btn btn-sm btn-ghost text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
              <div className="text-sm whitespace-pre-line text-gray-700">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        <div className="border rounded p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="font-medium text-gray-900">
                Community's amenity/features
              </p>
              <p className="text-sm text-gray-500">Optional but recommended</p>
            </div>
            <button className="btn btn-sm btn-outline text-blue-600">
              <Plus className="w-4 h-4 mr-1" /> Add
            </button>
          </div>
          <div className="flex flex-wrap gap-3">
            {amenities.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className={`flex items-center gap-2 border px-3 py-2 rounded text-sm ${
                    item.active
                      ? "bg-blue-100 text-blue-800 border-blue-200"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </div>
              );
            })}
          </div>
        </div>

        {/* Add similar replacements for nearby places, utilities, gallery, videos, buttons */}
      </div>
    </div>
  );
}
