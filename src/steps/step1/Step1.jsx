import PropertySetup from "../../components/step1/PropertySetup";


export default function Step1({ next }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    next();
  };

  return (
    <>
      <PropertySetup next={next} />
      <button onClick={handleSubmit} type="submit" className="btn btn-primary">
        Next
      </button>
    </>
  );
}
