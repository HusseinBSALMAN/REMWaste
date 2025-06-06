 import Image from 'next/image';
import { useState } from 'react';

interface Bin {
  id: string;
  size:  number;
  image: string;
  price: number;
}

interface PopUpMSGProps {
  bins: Bin[];
  selectedBin: string | null;
  setSelectedBin: (binId: string | null) => void;
}

export function PopUpMSG({ bins, selectedBin, setSelectedBin }: PopUpMSGProps) {
  const [quantity, setQuantity] = useState(1);

  return selectedBin !== null ? (
    <div className="alertMSG">
      <h4>You have selected: {bins.find(bin => bin.id === selectedBin)?.size} Yard Type</h4>
    <label className="text-gray-700">
        Quantity:
        <input
            onChange={(e) => {
                const value = e.target.value;
                // Remove leading zeros
                const parsedValue = parseInt(value, 10);
                // Ensure the parsed value is not NaN and within the desired range
                if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 100) {
                    setQuantity(parsedValue);
                } else if (value === "") {
                    // Allow clearing the input
                    setQuantity(1); // or any default value you prefer
                }
            }}
            value={quantity}
            min="1"
            max="100"
            type="number"
            placeholder="Please select quantities"
            className="border border-gray-300 p-2 rounded w-full mt-2"
            style={{ width: "10rem", borderRadius: "0.5rem", textAlign: "center" }}
        />
    </label>


      <div className="flex flex-col items-center mt-2">
        <Image
          src={bins.find(bin => bin.id === selectedBin)?.image || ""}
          alt={`${bins.find(bin => bin.id === selectedBin)?.size} yard bin`}
          width={250}
          height={250}
          style={{
            borderRadius: "20%",
            boxShadow: "0 0.4rem 0.8rem rgba(0,0,0,0.2)",
            transition: "transform 0.3s",
          }}
        />
        <div className="ml-4 text-center">
          <h5>{bins.find(bin => bin.id === selectedBin)?.size} Yard Bin</h5>
          <p className="text-gray-600">
            £
            {(() => {
              const bin = bins.find(bin => bin.id === selectedBin);
              return bin ? bin.price * quantity : "";
            })()} + VAT
          </p>
        </div>
      </div>
      <h5>Delivery in 14 working days</h5>

      <p className="text-xs text-gray-500 mt-4 leading-relaxed">Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.</p>
      <button
        className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
        onClick={() => setSelectedBin(null)}
      >
        Clear Selection
      </button>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition ml-2"
        onClick={() => alert("Proceeding to next step...")}
      >
        Proceed to Next Step
      </button>
    </div>
  ) : null;
}