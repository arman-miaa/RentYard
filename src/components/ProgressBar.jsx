export default function ProgressBar({ step, totalSteps }) {
  const progressPercent = (step / totalSteps) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-2 mt-6">
      <div
        className="bg-primary h-2 rounded-full transition-all duration-300"
        style={{ width: `${progressPercent}%` }}
      ></div>
    </div>
  );
}
