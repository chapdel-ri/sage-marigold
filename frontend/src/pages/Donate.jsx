import { FaTimes, FaPlus } from "react-icons/fa";

const Donate = () => {
  return (
    <div className="mx-auto w-1/2 border border-gray-300 rounded-lg p-4 shadow-md">
      <div className="mb-4">
        <h4 className="font-semibold">List an item to Donate</h4>
        <p className="text-gray-600">
          Help someone in need by donating you no longer need. Share your
          Abundance
        </p>
      </div>
      <div>
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium select-none">
              Item Photo
            </label>
            <div>Add at least 1 photo * (0/5)</div>
            
            {/* Image Grid with Empty Slots */}
            <div className="grid grid-cols-5 gap-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={`empty-${index}`}
                  className="w-full aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center bg-gray-50"
                >
                  <FaPlus className="text-gray-400 text-lg mb-1" />
                  <span className="text-xs text-gray-500">Add Photo</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-2">
              <p className="text-sm text-gray-500">
                Click any empty box to upload photos (Max 5)
              </p>
              <p className="text-xs text-gray-400 mt-1">
                PNG, JPG, JPEG (MAX. 5MB)
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Donate;