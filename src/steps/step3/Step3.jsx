import { CondominiumsFilled } from "../../components/step3/CondominiumsFilled";

const Step3 = ({ next, prev }) => {
  return (
    <>
      <h2 className="text-2xl font-semibold">Step 3</h2>

      <CondominiumsFilled/>
      <div className="flex justify-between mt-8">
        <button onClick={prev} className="btn btn-outline">
          Back
        </button>
        <button onClick={next} className="btn btn-primary">
          Next
        </button>
      </div>
    </>
  );
};

export default Step3;
