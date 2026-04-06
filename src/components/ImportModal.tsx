import { Modal, ModalContent, CloseBtn } from "./ImportModal.style";
import { useState } from "react";
import type { Session } from "../types";

type Props = {
  onClose: () => void;
  setSessions: React.Dispatch<React.SetStateAction<Session[]>>;
};

const ImportModal = ({ onClose, setSessions }: Props) => {
  const [error, setError] = useState("");

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (!Array.isArray(json)) throw new Error("Invalid JSON format");
        setSessions(json);
        onClose();
      } catch (err: any) {
        setError(err.message || "Failed to import sessions");
      }
    };
    reader.readAsText(file);
  };

  return (
    <Modal>
      <ModalContent>
        <h2>Import Sessions</h2>
        <label htmlFor="fileInput">
          Choose File
        </label>
        <input 
          type="file" 
          accept=".json" 
          onChange={handleFile} 
          style={{ display: "none" }}
          id="fileInput"
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <CloseBtn onClick={onClose}>Close</CloseBtn>
      </ModalContent>
    </Modal>
  );
};

export default ImportModal;
