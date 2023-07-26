/** @format */

import { memo, useState } from "react";

interface Props {
  show: boolean;
  fileError: string | undefined;
  closeModalBoxFn: () => void;
  fileUploaderFn: (e: FileList | React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * @TODO I add all the code for Dropzone comp here. later, I'll break into multiple comp?
 */

export const FileDropZoneModal = memo(
  ({
    show,
    fileError,
    closeModalBoxFn,
    fileUploaderFn,
  }: Props): JSX.Element | null => {
    const [dragging, setDragging] = useState<boolean>(false);

    /**
     * Handler for drag enter event.
     */

    const dragEnterFn = (e: React.DragEvent<HTMLDivElement>): void => {
      e.preventDefault();
      setDragging(true);
    };

    /**
     * Handler for drag leave event.
     */
    const dragLeaveFn = (e: React.DragEvent<HTMLDivElement>): void => {
      e.preventDefault();
      setDragging(false);
    };

    /**
     * Handler for drop event.
     */
    const dropFn = (e: React.DragEvent<HTMLDivElement>): void => {
      e.preventDefault();

      const droppedFiles = e?.dataTransfer.files;
      if (droppedFiles.length > 0) {
        fileUploaderFn(droppedFiles);
      }
    };

    /**
     * if show is falsy, render nothing
     */
    if (!show) return null;

    return (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">Change</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={closeModalBoxFn}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>

              {/*body*/}
              <div className="relative p-6 flex-auto">
                <div
                  className={`border-dotted border-4 p-12 cursor-pointer relative h-52 ${
                    dragging ? "border-blue-500" : "border-black"
                  }`}
                  onDragEnter={dragEnterFn}
                  onDragLeave={dragLeaveFn}
                  onDrop={dropFn}
                >
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    <span className="font-bold">Click to upload </span> or drag
                    and drop (MAX SIZE. 10MB)
                  </p>
                  <input
                    type="file"
                    className="absolute bottom-0 top-0 left-0 right-0 opacity-0 cursor-pointer"
                    onChange={fileUploaderFn}
                  />
                </div>

                <p className="pt-5 text-red-400">{fileError}</p>
              </div>

              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={closeModalBoxFn}
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  // onClick={() => setShowModal(false)}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    );
  }
);
