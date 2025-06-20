

export default function ApplicationModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">About Property</h2>
        <p>Modal content goes here...</p>
        <button onClick={onClose} className="mt-4 btn btn-sm btn-primary">
          Close
        </button>
      </div>
    </div>
  );
}