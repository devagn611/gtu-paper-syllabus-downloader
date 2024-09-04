import React, { useState } from "react";

const SyllabusComponent = () => {
  const [subjectCode, setSubjectCode] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");

  const handleFetchPDF = () => {
    if (subjectCode) {
      const url = `https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/${subjectCode}.pdf`;
      setPdfUrl(url);
    } else {
      alert("Please enter a subject code.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Fetch GTU Syllabus</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="subjectCode">
            Enter Subject Code
          </label>
          <input
            id="subjectCode"
            type="text"
            value={subjectCode}
            onChange={(e) => setSubjectCode(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g., 3171609"
          />
        </div>
        <button
          onClick={handleFetchPDF}
          className="w-full bg-blue-600 text-white font-medium p-2 rounded hover:bg-blue-700"
        >
          Fetch PDF
        </button>
      

      {pdfUrl && (
        <div className="mt-6">
          <iframe
            src={pdfUrl}
            className="w-full h-96 border border-gray-300 rounded-lg shadow"
            title="GTU Paper PDF"
          ></iframe>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-blue-600 hover:underline"
          >
            Download PDF
          </a>
        </div>
      )}
    </div>
    </div>
  );
};

export default SyllabusComponent;
