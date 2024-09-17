import SectionTitle from "../atoms/SectionTitle";
import UploadForm from "../molecules/UploadForm";

const UploadSection: React.FC = () => {
  return (
    <div className="pb-16">
      <SectionTitle title="Upload" />
      <div className="flex flex-wrap md:flex-nowrap gap-12 md:gap-8">
        <UploadForm className="w-full md:w-1/2" fileName="following"/>
        <UploadForm className="w-full md:w-1/2" fileName="followers"/>
      </div>
    </div>
  );
}

export default UploadSection;