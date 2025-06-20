import { CondominiumsInformation } from "../../components/step2/CondominiumsInformation";

export default function Step2({ next, prev }) {
  return (
    <>
      <CondominiumsInformation prev={prev} next={next} />
    </>
  );
}
