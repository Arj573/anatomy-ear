import React, { useState } from "react";
import { EarPart } from "../types";
import { getEarPartsBySection } from "../data/earData";
import { useEar } from "../context/EarContext";

interface EarPartDetailsProps {
  part: EarPart | null;
}

export const EarPartDetails: React.FC<EarPartDetailsProps> = ({ part }) => {
  const { activeSection, selectPartById } = useEar();
  const sectionParts = getEarPartsBySection(activeSection);
  const [showModal, setShowModal] = useState(false); // NEW
  const [pinInfo, setPinInfo] = useState<string | null>(null);

  if (part) {
    return (
      <div className="card p-6 animate-fadeIn">
        <h2 className="text-2xl font-semibold text-accent-700 mb-3">
          {part.name}
        </h2>
        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Fungsi</h3>
          <p className="text-gray-800">{part.description}</p>

          {/* More Detail Button (KHUSUS SEMICIRCULAR CANALS) */}
          {part.details && (
            <button
              onClick={() => setShowModal(true)}
              className="mt-3 text-sm text-blue-600 hover:underline"
            >
              More Detail
            </button>
          )}
        </div>

        <h3 className="text-sm font-medium text-gray-500 mb-2">Lokasi</h3>
        <p className="text-gray-800 mb-4">
          {part.section === "outer"
            ? "Telinga Luar"
            : part.section === "middle"
            ? "Telinga Tengah"
            : "Telinga Dalam"}
        </p>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-500 mb-4">
            Bagian Lain pada Telinga
          </h3>
          <div className="flex flex-wrap gap-2">
            {sectionParts
              .filter((p) => p.id !== part.id)
              .map((otherPart) => (
                <button
                  key={otherPart.id}
                  onClick={() => selectPartById(otherPart.id)}
                  className="text-sm bg-gray-100 px-3 py-1.5 rounded-full hover:bg-accent-50 hover:text-accent-700 transition-colors"
                >
                  {otherPart.name}
                </button>
              ))}
          </div>
        </div>

        {/* MODAL */}
        {showModal && part.details && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg w-full max-w-xl relative">
              <button
                className="absolute top-2 right-3 text-gray-500 hover:text-black"
                onClick={() => {
                  setShowModal(false);
                  setPinInfo(null);
                }}
              >
                ✕
              </button>
              <h2 className="text-lg font-semibold mb-4">
                Detail dari {part.name}
              </h2>

              <div className="relative w-full">
                {pinInfo && (
                  <div className="mt-4 p-3 bg-orange-50 border-l-4 border-orange-300 text-sm text-orange-900 rounded">
                    {pinInfo}
                  </div>
                )}
                <div className="relative w-full">
                  <img
                    src="/inner_ear_detail.jpg"
                    alt="Inner Ear Detail"
                    className="w-full rounded"
                  />

                  {/* Loop detail pins */}
                  {part.details.map((detailItem) => (
                    <button
                      key={detailItem.id}
                      title={detailItem.label}
                      onClick={() => setPinInfo(detailItem.info)}
                      className="absolute w-4 h-4 rounded-full bg-[#FF9B45] ring-2 ring-white"
                      style={{
                        top: detailItem.top,
                        left: detailItem.left,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="card p-6">
      <h2 className="text-2xl font-semibold text-accent-700 mb-4">
        {activeSection === "outer"
          ? "Telinga Luar"
          : activeSection === "middle"
          ? "Telinga Tengah"
          : "Telinga Dalam"}
      </h2>

      <p className="text-gray-600 mb-6">
        {activeSection === "outer"
          ? "Telinga luar adalah bagian telinga yang mengumpulkan dan mengarahkan gelombang suara ke telinga tengah."
          : activeSection === "middle"
          ? "Telinga tengah adalah rongga berisi udara yang menghubungkan telinga luar dengan telinga dalam dan berisi tulang-tulang pendengaran."
          : "Telinga dalam berisi koklea dan saluran semisirkular yang mengubah getaran menjadi sinyal saraf dan membantu keseimbangan."}
      </p>

      <h3 className="text-base font-medium text-gray-700 mb-3">
        Bagian-bagian:
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {sectionParts.map((part) => (
          <button
            key={part.id}
            onClick={() => selectPartById(part.id)}
            className="text-left p-3 border border-gray-200 rounded-md hover:bg-accent-50 hover:border-accent-100 transition-all"
          >
            <span className="font-medium">{part.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
