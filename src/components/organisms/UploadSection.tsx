import SectionTitle from "../atoms/SectionTitle";
import UploadForm from "../molecules/UploadForm";
import UserList from "./UserList";

const UploadSection: React.FC = () => {
  return (
    <div className="pb-16">
      <SectionTitle title="Upload" />
      <div className="flex flex-wrap md:flex-nowrap gap-12 md:gap-8 mb-20">
        <UploadForm className="w-full md:w-1/2" fileName="following"/>
        <UploadForm className="w-full md:w-1/2" fileName="followers"/>
      </div>
      <UserList />
    </div>
  );
}

export default UploadSection;