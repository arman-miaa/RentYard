
import { useState } from "react";
import { Check } from "lucide-react";

export default function PropertyManagementForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: "",
    ownerType: "",
    condoInfo: {},
    address: {},
    plan: "",
  });

  const steps = [
    "Property Type",
    "Condominium Information",
    "Property Address",
    "Subscription Plan",
  ];

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    index + 1 <= currentStep
                      ? "bg-primary text-primary-content"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {index + 1 <= currentStep ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    index + 1
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-24 h-1 mx-2 ${
                      index + 1 < currentStep ? "bg-primary" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 text-center">
            Step {currentStep} of {steps.length}: {steps[currentStep - 1]}
          </p>
        </div>

        {/* Step Content */}
        <div className="mb-8">
          {currentStep === 1 && (
            <div>
              <label className="label">
                <span className="label-text">Property Type</span>
              </label>
              <select
                className="select select-bordered w-full max-w-xs"
                value={formData.propertyType}
                onChange={(e) =>
                  setFormData({ ...formData, propertyType: e.target.value })
                }
              >
                <option value="">Select Property Type</option>
                <option value="house">House</option>
                <option value="condo">Condominium</option>
                <option value="apartment">Apartment</option>
              </select>

              <label className="label mt-4">
                <span className="label-text">Owner Type</span>
              </label>
              <div className="flex space-x-4">
                <label className="cursor-pointer label">
                  <input
                    type="radio"
                    name="ownerType"
                    value="individual"
                    checked={formData.ownerType === "individual"}
                    onChange={(e) =>
                      setFormData({ ...formData, ownerType: e.target.value })
                    }
                    className="radio checked:bg-primary"
                  />
                  <span className="label-text ml-2">Individual</span>
                </label>
                <label className="cursor-pointer label">
                  <input
                    type="radio"
                    name="ownerType"
                    value="company"
                    checked={formData.ownerType === "company"}
                    onChange={(e) =>
                      setFormData({ ...formData, ownerType: e.target.value })
                    }
                    className="radio checked:bg-primary"
                  />
                  <span className="label-text ml-2">Company</span>
                </label>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <label className="label">
                <span className="label-text">Condominium Info</span>
              </label>
              <input
                type="text"
                placeholder="Building Name"
                className="input input-bordered w-full max-w-xs"
                value={formData.condoInfo.buildingName || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    condoInfo: {
                      ...formData.condoInfo,
                      buildingName: e.target.value,
                    },
                  })
                }
              />
             
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="Street"
                className="input input-bordered w-full max-w-xs"
                value={formData.address.street || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: {
                      ...formData.address,
                      street: e.target.value,
                    },
                  })
                }
              />
            
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <label className="label">
                <span className="label-text">Subscription Plan</span>
              </label>
              <select
                className="select select-bordered w-full max-w-xs"
                value={formData.plan}
                onChange={(e) =>
                  setFormData({ ...formData, plan: e.target.value })
                }
              >
                <option value="">Select a Plan</option>
                <option value="basic">Basic</option>
                <option value="premium">Premium</option>
                <option value="enterprise">Enterprise</option>
              </select>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            className={`btn btn-outline ${
              currentStep === 1 ? "btn-disabled" : ""
            }`}
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            Previous
          </button>
          <button
            className={`btn ${
              currentStep === steps.length ? "btn-primary" : ""
            }`}
            onClick={nextStep}
            disabled={currentStep === steps.length}
          >
            {currentStep === steps.length ? "Complete" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
