// Components
import { ProfileCard } from "./components/ProfileCard/ProfileCard";

import Logo from "./assets/user.png";
import CoverImage from "./assets/background.webp";
import { useState } from "react";
import { ImagePicker } from "./components/ImagePicker/ImagePicker";

import { ProfileCardUI } from "./types/types";

/**
 * Enum for the Log and Thumbnail
 */

enum FileType {
  Thumbnail = "thumbnail",
  Logo = "logo"
}

function App() {
  /**
   * Great approach for now, considering the complexity.
   * As the project grows and becomes more intricate,
   * I'll switch to a global state management library like Redux or MobX.
   * Exciting possibilities ahead!"
   */
  const [logo, setLogo] = useState<string | FileList>(Logo);
  const [coverImage, setCoverImage] = useState<string | FileList>(CoverImage);

  const data: ProfileCardUI = {
    title: "Let it V",
    bio: "Cool vegan recipes for newbies!",
    tags: ["Food", "Vegan"],
    followers: "12.k members"
  };

  /**
   * Upload new Image
   */

  const uploadNewImage = (type: FileType, file: FileList) => {
    if (type === FileType.Thumbnail) setCoverImage(file);
    else if (type === FileType.Logo) {
      setLogo(file);
    }
  };

  /**
   * Check if the image is instance of FileList then return file from it
   */

  const isInstanceOfFile = (file: string | FileList) =>
    file instanceof FileList ? URL.createObjectURL(file?.[0]) : file;

  console.log("[fiel]", isInstanceOfFile(coverImage));

  const getExtensionOfFile = (file: string | FileList) =>
    file instanceof FileList ? file?.[0].name : file;

  return (
    <div className="ml-5 flex flex-row">
      <div className="flex flex-col mr-8 space-y-8">
        <div>
          <h3 className="mb-4">Community Thumbnail</h3>
          <ImagePicker
            image={isInstanceOfFile(coverImage)}
            setFileFn={uploadNewImage.bind(null, FileType.Thumbnail)}
            imageExtension={getExtensionOfFile(coverImage)}
          />
        </div>
        <div>
          <h3 className="mb-4">Community Logo</h3>
          <ImagePicker
            image={isInstanceOfFile(logo)}
            setFileFn={uploadNewImage.bind(null, FileType.Logo)}
            imageExtension={getExtensionOfFile(logo)}
          />
        </div>
      </div>
      <ProfileCard
        {...data}
        logo={isInstanceOfFile(logo)}
        coverImage={isInstanceOfFile(coverImage)}
      />
    </div>
  );
}

export default App;
