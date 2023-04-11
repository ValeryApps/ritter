import Image from "next/image";
import { FC, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
interface ImageProps {
  value: string;
  disabled?: boolean;
  onChange: (e: string) => void;
  label?: string;
}
export const ImageUpload: FC<ImageProps> = ({
  value,
  disabled,
  onChange,
  label,
}) => {
  const [base64, setBase64] = useState(value);

  const handleChange = useCallback(
    (str: string) => {
      onChange(str);
    },
    [onChange]
  );
  const handleDrop = useCallback(
    (files: any) => {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        setBase64(event.target.result);
        handleChange(event.target.result);
      };
      reader.readAsDataURL(file);
    },
    [handleChange]
  );
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop: handleDrop,
    disabled,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/jpg": [],
      "image/gif": [],
      "image/webp": [],
    },
  });
  return (
    <div
      {...getRootProps({
        className:
          "w-full p-4 text-white text-center border-2 border-dotted rounded-md border-neutral-700",
      })}
    >
      <input {...getInputProps} hidden />
      {base64 ? (
        <div className="flex items-center justify-center">
          <Image src={base64} alt="img" height={100} width={100} />
        </div>
      ) : (
        <p className="text-white">{label}</p>
      )}
    </div>
  );
};
