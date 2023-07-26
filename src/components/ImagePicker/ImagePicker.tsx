/** @format */

import { useCallback, useState } from "react";
import Logo from "../../assets/pexels-photo-268533.png";
import { FileDropZoneModal } from "../FileDropzone/FileDropzone";

export const ImagePicker = () => {
  const [openFileDropZoneModal, setOpenFileDropZoneModal] =
    useState<boolean>(false);
  const [file, setFile] = useState<FileList | undefined>();
  const [fileError, setFileError] = useState<string | undefined>();

  /**
   * Toggles Modal box for the FiledropZone
   */

  const openDropzoneModalFn = useCallback(
    (): void => setOpenFileDropZoneModal((prev) => !prev),
    []
  );

  /**
   * Uploads new file to DOM
   */
  const fileUploaderFn = (
    e: FileList | React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile =
      e instanceof FileList ? e : e?.target.files ?? undefined;
    if (selectedFile) {
      const fileSizeInBytes: number = selectedFile[0].size;
      const fileSizeInMB: number = fileSizeInBytes / (1024 * 1024);

      if (fileSizeInMB > 10) {
        setFileError("File size exceeds 10MB");
      } else {
        setFile(selectedFile);
        setOpenFileDropZoneModal((prev) => !prev);
        fileError && setFileError(undefined);
      }
    }
  };

  /**
   * Get the shortened title of the file if it's too long
   */
  const getShortenedFileName = useCallback(
    (fileName: string | undefined): string | undefined => {
      if (fileName?.length ?? 0 > 23)
        return fileName?.slice(0, 15) + "..." + fileName?.slice(-4);
      return fileName;
    },
    []
  );

  return (
    <>
      <div className="flex items-center justify-between w-102">
        <div className="flex items-center">
          {/* @TODO Need to break into smaller comp, img and with extension, button */}
          <img
            className="w-[84px] h-[60px] rounded object-cover"
            src={file ? URL.createObjectURL(file?.[0]) : Logo}
            alt=""
          />

          <p className="ml-4">
            {getShortenedFileName(file?.[0]?.name) || "art_design_740x317.jpg"}
          </p>
        </div>
        <div>
          <button
            className="bg-transparent text-blue border-0 focus:outline-none"
            onClick={openDropzoneModalFn}
          >
            Change
          </button>
        </div>
      </div>

      <FileDropZoneModal
        show={openFileDropZoneModal}
        closeModalBoxFn={openDropzoneModalFn}
        fileUploaderFn={fileUploaderFn}
        fileError={fileError}
      />
    </>
  );
};
