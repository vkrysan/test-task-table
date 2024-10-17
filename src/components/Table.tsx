import React, { useState } from "react";
import Modal from "./Modal.tsx";

interface TableProps<T> {
  data: T[];
  onEdit: (updatedData: T) => void;
}

const Table = <
  T extends { id: number; options?: { [key: string]: any }; [key: string]: any }
>({
  data,
  onEdit,
}: TableProps<T>) => {
  const [selectedData, setSelectedData] = useState<T | null>(null);

  const handleEditClick = (item: T) => {
    setSelectedData(item);
  };

  const handleSave = (updatedItem: T) => {
    onEdit(updatedItem);
    setSelectedData(null);
  };

  const handleClose = () => {
    setSelectedData(null);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key}>{key === "options" ? "Options" : key}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {Object.entries(item).map(([key, value], index) => (
                <td key={index}>
                  {key === "options" ? (
                    <>
                      <div>Size: {value.size}</div>
                      <div>Amount: {value.amount}</div>
                    </>
                  ) : key === "active" ? (
                    value ? (
                      "Yes"
                    ) : (
                      "No"
                    )
                  ) : (
                    value
                  )}
                </td>
              ))}
              <td>
                <button onClick={() => handleEditClick(item)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedData && (
        <Modal item={selectedData} onSave={handleSave} onClose={handleClose} />
      )}
    </div>
  );
};

export default Table;
