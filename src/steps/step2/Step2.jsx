import { CondominiumsInformation } from "../../components/step2/CondominiumsInformation";

export default function Step2({ next, prev }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    next();
  };

  return (
    <>
      
      <CondominiumsInformation/>
      

      <div className="flex justify-between items-center">
        <button type="button" onClick={prev} className="btn btn-outline">
          Back
        </button>
        <button type="submit" onClick={handleSubmit} className="btn btn-primary">
          Next
        </button>
      </div>
    </>
  );
}
