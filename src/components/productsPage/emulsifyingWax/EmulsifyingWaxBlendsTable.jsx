import React from "react";

const EmulsifyingWaxBlendsTable = ({ data }) => {
  if (!data || !data.tableData || data.tableData.length === 0) {
    return null;
  }

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {data.heading && (
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {data.heading}
            </h2>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg shadow-sm border border-gray-400">
            <thead>
              <tr className="bg-[#E99322] text-white">
                <th className="w-1/2 px-6 py-4 text-center font-semibold text-lg border-b border-gray-500 border-r border-gray-500">
                  {data.tableHeaders?.product || "Product name"}
                </th>
                <th className="w-1/2 px-6 py-4 text-center font-semibold text-lg border-b border-gray-500">
                  {data.tableHeaders?.inci || "INCI name"}
                </th>
              </tr>
            </thead>
            <tbody>
              {data.tableData.map((row, index) => (
                <tr 
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="w-1/2 px-6 py-4 text-center text-gray-800 border-b border-gray-400 border-r border-gray-400">
                    {row.productName}
                  </td>
                  <td className="w-1/2 px-6 py-4 text-center text-gray-800 border-b border-gray-400">
                    {row.inciName}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default EmulsifyingWaxBlendsTable;
