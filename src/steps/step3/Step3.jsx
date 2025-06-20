import { CondominiumsFilled } from "../../components/step3/CondominiumsFilled";

const Step3 = ({ next, prev }) => {
  return (
    <>
      <h2 className="text-2xl font-semibold">Step 3</h2>

      <CondominiumsFilled prev={prev} next={next} />
 
    </>
  );
};

export default Step3;
