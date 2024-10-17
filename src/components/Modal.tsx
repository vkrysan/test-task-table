import React, { useState } from "react";

interface ModalProps<T> {
  item: T;
  onSave: (updatedItem: T) => void;
  onClose: () => void;
}

const Modal = <T extends { id: number; [key: string]: any }>({
  item,
  onSave,
  onClose,
}: ModalProps<T>) => {
  const [updatedItem, setUpdatedItem] = useState<T>(item);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedItem({ ...updatedItem, [name]: value });
  };

  return (
    <>
      <div className="overlay" onClick={onClose} />
      <div className="modal">
        <h2>Edit Item</h2>
        {Object.keys(item).map(
          (key) =>
            key !== "id" && (
              <div key={key}>
                <label>{key}:</label>
                <input
                  name={key}
                  value={updatedItem[key]}
                  onChange={handleChange}
                />
              </div>
            )
        )}
        <button onClick={() => onSave(updatedItem)}>Save</button>
      </div>
    </>
  );
};

export default Modal;
