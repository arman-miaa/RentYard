import { SubscriptionPlans } from "../../components/step4/SubscriptionPlans";

const Step4 = ({ prev }) => {
  return (
    <>
      
      <SubscriptionPlans/>
      <h2 className="text-2xl font-semibold">Step 4</h2>

      <div className="flex justify-center mt-8">
        <button onClick={prev} className="btn btn-outline">
          Back
        </button>
      </div>
    </>
  );
};

export default Step4;
