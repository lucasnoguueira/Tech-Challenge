"use client";

import { useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, File, X, FileText, Image as ImageIcon } from "lucide-react";
import { Attachment } from "@/types";
import Button from "./Button";

interface FileUploadProps {
  attachments: Attachment[];
  onAttachmentsChange: (attachments: Attachment[]) => void;
  maxFiles?: number;
  maxSize?: number; // em MB
}

export default function FileUpload({
  attachments,
  onAttachmentsChange,
  maxFiles = 5,
  maxSize = 5,
}: FileUploadProps) {
  const maxSizeBytes = maxSize * 1024 * 1024;

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newAttachments: Attachment[] = acceptedFiles.map((file) => ({
        id: `${Date.now()}-${Math.random()}`,
        name: file.name,
        url: URL.createObjectURL(file),
        type: file.type,
        size: file.size,
        uploadedAt: new Date().toISOString(),
      }));

      const updatedAttachments = [...attachments, ...newAttachments].slice(
        0,
        maxFiles
      );
      onAttachmentsChange(updatedAttachments);
    },
    [attachments, maxFiles, onAttachmentsChange]
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      accept: {
        "image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp"],
        "application/pdf": [".pdf"],
        "application/msword": [".doc"],
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
          [".docx"],
      },
      maxSize: maxSizeBytes,
      maxFiles: maxFiles - attachments.length,
    });

  const removeAttachment = (id: string) => {
    const updatedAttachments = attachments.filter((a) => a.id !== id);
    onAttachmentsChange(updatedAttachments);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith("image/")) {
      return <ImageIcon className="w-6 h-6 text-blue-500" />;
    }
    return <FileText className="w-6 h-6 text-gray-500" />;
  };

  return (
    <div className="space-y-4">
      {/* Upload Area */}
      <div
        {...getRootProps()}
        className={`
          border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all
          ${
            isDragActive
              ? "border-primary-500 bg-primary-50"
              : "border-gray-300 hover:border-primary-400 hover:bg-gray-50"
          }
          ${
            attachments.length >= maxFiles
              ? "opacity-50 cursor-not-allowed"
              : ""
          }
        `}
        aria-label="Área para upload de arquivos"
      >
        <input {...getInputProps()} aria-label="Selecionar arquivos" />
        <Upload className="w-12 h-12 mx-auto text-gray-400 mb-3" />
        <p className="text-gray-600 mb-1">
          {isDragActive
            ? "Solte os arquivos aqui..."
            : "Arraste arquivos aqui ou clique para selecionar"}
        </p>
        <p className="text-sm text-gray-500">
          PDF, DOC, DOCX ou imagens até {maxSize}MB (máx. {maxFiles} arquivos)
        </p>
      </div>

      {/* Error Messages */}
      {fileRejections.length > 0 && (
        <div
          className="bg-red-50 border border-red-200 rounded-lg p-3"
          role="alert"
        >
          <p className="text-sm text-red-800 font-medium">
            Alguns arquivos não puderam ser adicionados:
          </p>
          <ul className="mt-2 text-sm text-red-700 list-disc list-inside">
            {fileRejections.map(({ file, errors }) => (
              <li key={file.name}>
                {file.name}: {errors[0].message}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Attachments List */}
      {attachments.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium text-gray-900">
            Anexos ({attachments.length})
          </h4>
          <div className="space-y-2">
            {attachments.map((attachment) => (
              <div
                key={attachment.id}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
              >
                {getFileIcon(attachment.type)}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {attachment.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatFileSize(attachment.size)}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => removeAttachment(attachment.id)}
                  className="flex-shrink-0"
                  aria-label={`Remover ${attachment.name}`}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
