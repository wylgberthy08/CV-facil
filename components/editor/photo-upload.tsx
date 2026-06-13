"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Camera, X } from "lucide-react";

interface PhotoUploadProps {
  photo: string;
  firstName: string;
  lastName: string;
  onChange: (base64: string) => void;
}

export function PhotoUpload({ photo, firstName, lastName, onChange }: PhotoUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        onChange(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    onChange("");
    if (inputRef.current) inputRef.current.value = "";
  };

  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();

  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        {photo ? (
          <div className="h-16 w-16 overflow-hidden rounded-full">
            <img
              src={photo}
              alt="Foto"
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600">
            {initials}
          </div>
        )}
      </div>
      <div className="flex gap-2">
        <Button variant="secondary" size="sm" onClick={() => inputRef.current?.click()}>
          <Camera size={14} /> {photo ? "Trocar" : "Adicionar"}
        </Button>
        {photo && (
          <Button variant="ghost" size="sm" onClick={handleRemove}>
            <X size={14} />
          </Button>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
        className="hidden"
      />
    </div>
  );
}
