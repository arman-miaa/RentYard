export default function ProgressBar({ step, totalSteps }) {
  const percentage = (step / totalSteps) * 100;

  return (
    <div className="w-full h-[1px] bg-gray-200">
      <div
        className="h-full bg-black transition-all duration-300"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}
