
import { useState } from "react";
import { Home, CreditCard, Plus } from "lucide-react";
import { PaymentModal } from "./PaymentModalProps";
import ProgressBar from "../ProgressBar";


export function SubscriptionPlans({prev}) {
  const [selectedPlan, setSelectedPlan] = useState("regular");
  const [selectedPayment, setSelectedPayment] = useState("");
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [autoPayEnabled, setAutoPayEnabled] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([
    { id: "card1", type: "Any card", last4: "****1234" },
    { id: "card2", type: "Any card", last4: "****5678" },
    { id: "card3", type: "Any card", last4: "****9012" },
  ]);

  const plans = [
    {
      id: "regular",
      name: "Regular",
      monthlyPrice: 99.99,
      annualPrice: 999.99,
    },
    {
      id: "platinum",
      name: "Platinum",
      monthlyPrice: 129.99,
      annualPrice: 1299.99,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      monthlyPrice: 199.99,
      annualPrice: 1999.99,
    },
  ];

  const getCurrentPrice = () => {
    const plan = plans.find((p) => p.id === selectedPlan);
    if (!plan) return 0;
    return billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice;
  };

  const handleAddCard = (cardData) => {
    const newCard = {
      id: `card${paymentMethods.length + 1}`,
      type: "Any card",
      last4: `****${cardData.cardNumber.slice(-4)}`,
    };
    setPaymentMethods([...paymentMethods, newCard]);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-6 space-y-6">
        <h1 className="text-xl font-bold text-gray-700">
          Choose a plan for after 30-days free trial
        </h1>

        <div role="tablist" className="tabs tabs-boxed">
          <a
            role="tab"
            className={`tab ${
              billingCycle === "monthly" &&
              "tab-active text-[#316EED] bg-blue-100 rounded-2xl "
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </a>
          <a
            role="tab"
            className={`tab ${
              billingCycle === "annually" &&
              "tab-active text-[#316EED] bg-blue-100 rounded-2xl"
            }`}
            onClick={() => setBillingCycle("annually")}
          >
            Annually (save 20%)
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`card border cursor-pointer ${
                selectedPlan === plan.id
                  ? "border-blue-500 bg-blue-50"
                  : "hover:shadow"
              }`}
            >
              <div className="card-body items-center text-center">
                <h2 className="card-title">{plan.name}</h2>
                <p className="text-3xl font-bold text-gray-800">
                  $
                  {billingCycle === "monthly"
                    ? plan.monthlyPrice
                    : plan.annualPrice}
                </p>
                <p className="text-sm text-gray-500">Price for 1-50 units</p>
                {plan.id === "regular" && selectedPlan === "regular" && (
                  <div className="form-control mt-3">
                    <label className="label cursor-pointer">
                      <span className="label-text">Auto Pay</span>
                      <input
                        type="checkbox"
                        className="toggle toggle-primary"
                        checked={autoPayEnabled}
                        onChange={(e) => setAutoPayEnabled(e.target.checked)}
                      />
                    </label>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 ">
              Payment option
            </h3>
            <button
              className="btn btn-ghost text-blue-600 mt-4"
              onClick={() => setIsPaymentModalOpen(true)}
            >
              <Plus className="w-4 h-4 mr-1" /> Add new card
            </button>
          </div>
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`card cursor-pointer bg-base-200 ${
                  selectedPayment === method.id ? "" : "hover:shadow"
                }`}
              >
                <div className="card-body flex-row items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-gray-600" />
                    <span>{method.type}</span>
                    <span className="text-sm text-gray-500">
                      {method.last4}
                    </span>
                  </div>
                  <button
                    className={`btn btn-sm ${
                      selectedPayment === method.id
                        ? "btn bg-[#316EED] text-white rounded-lg"
                        : "btn text-[#316EED] border-blue-500"
                    }`}
                    onClick={() => setSelectedPayment(method.id)}
                  >
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ProgressBar step={4} totalSteps={4} />
        <div className="flex justify-between items-center pt-8">
          <button
            onClick={prev}
            className=" border-b-2 leading-none mt-4 cursor-pointer"
          >
            Back
          </button>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">Total with card charges</p>
              <p className="text-lg font-bold text-gray-900">
                ${getCurrentPrice().toFixed(2)}
              </p>
            </div>
            <button
              className="btn bg-[#316EED] text-white rounded-xl px-6"
              disabled={!selectedPlan || !selectedPayment}
            >
              Pay & add property
            </button>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        onSave={handleAddCard}
      />
    </div>
  );
}
