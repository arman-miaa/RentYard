import { useState } from "react";
import { Home, Building, Building2, Key, Users, Briefcase } from "lucide-react";



import { LandlordVerification } from "./LandlordVerification";
import { RealtorVerification } from "./RealtorVerification";
import { CompanyInfo } from "./CompanyInfo";

const PropertySetup = ({ next }) => {
  
  const handleNextStep = (e) => {
    e.preventDefault();

    next();
  };

  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const propertyTypes = [
    {
      id: "single-house",
      title: "Single House Property",
      description: "Single unit house for single family",
      icon: Home,
    },
    {
      id: "apartments",
      title: "Apartments complex",
      description: "Multiple unit house for families",
      icon: Building,
    },
    {
      id: "condominiums",
      title: "Condominiums",
      description: "Multiple unit house for families",
      icon: Building2,
    },
  ];

  const roles = [
    {
      id: "landlord",
      title: "Landlord",
      description: "Owner of the property",
      icon: Key,
    },
    {
      id: "realtor",
      title: "Realtor",
      description: "Manage property on behalf of owner",
      icon: Users,
    },
    {
      id: "property-management",
      title: "Property management company",
      description: "For management company",
      icon: Briefcase,
    },
  ];

  const renderRoleSpecificContent = () => {
    switch (selectedRole) {
      case "landlord":
        return (
          <LandlordVerification
            acceptTerms={acceptTerms}
            onAcceptTermsChange={setAcceptTerms}
          />
        );
      case "realtor":
        return (
          <RealtorVerification
            acceptTerms={acceptTerms}
            onAcceptTermsChange={setAcceptTerms}
          />
        );
      case "property-management":
        return (
          <CompanyInfo
            acceptTerms={acceptTerms}
            onAcceptTermsChange={setAcceptTerms}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-6 space-y-8">
        {/* Property Type */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Property type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {propertyTypes.map((type) => {
              const IconComponent = type.icon;
              const isSelected = selectedPropertyType === type.id;

              return (
                <div
                  key={type.id} // or role.id
                  onClick={() => setSelectedPropertyType(type.id)} // অথবা setSelectedRole(role.id)
                  className={`p-6 border-2 rounded-lg cursor-pointer transition-all hover:border-blue-200 ${
                    isSelected ? "border-blue-400" : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center space-x-5">
                    {/* Icon on the left */}
                    <IconComponent className="w-5 h-6" />

                    {/* Title and description on the right, centered vertically */}
                    <div className="space-y-1">
                      <h3 className={`font-semibold text-base`}>
                        {type.title /* or role.title */}
                      </h3>
                      <p className={`text-sm`}>
                        {type.description /* or role.description */}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Role Selection */}
        <div className="">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Select your role
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {roles.map((role) => {
              const IconComponent = role.icon;
              const isSelected = selectedRole === role.id;

              return (
                <div
                  key={role.id}
                  onClick={() => {
                    setSelectedRole(role.id);
                    setAcceptTerms(false);
                  }}
                  className={`p-6 border-2 rounded-lg cursor-pointer transition-all hover:border-blue-200 ${
                    isSelected ? "border-blue-400" : "border-gray-200"
                  }`}
                >
                  {/* Horizontal flex with centered content */}
                  <div className="flex items-center space-x-5">
                    {/* Icon on left */}
                    <IconComponent className="w-5 h-6" />

                    {/* Title and Description on right */}
                    <div className="space-y-1">
                      <h3 className={`font-semibold `}>{role.title}</h3>
                      <p className={`text-sm `}>{role.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Conditional Render */}
        {selectedRole && (
          <div className="mt-8">{renderRoleSpecificContent()}</div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-8">
          <button className="border-b-2 leading-none mt-4 cursor-pointer">
            Back
          </button>

          <button
            onClick={handleNextStep}
            className="btn btn-primary rounded-lg bg-[#316EED] border-none px-8"
            disabled={!selectedPropertyType || !selectedRole || !acceptTerms}
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertySetup;
