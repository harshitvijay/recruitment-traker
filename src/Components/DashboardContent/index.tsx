import { FC, useEffect, useState } from "react";
import DashboardContentCard from "../DashboardContentCard";
import DashboardHeader from "../DashboardHeader";
import { getCandidateProfile } from "src/service";
import { candidateProfileURL } from "src/constants";
import { CandidateProfileInterface } from "src/common.interface";

const DashboardContent: FC = () => {
  const [cardData, setCardData] = useState<Array<CandidateProfileInterface>>();

  useEffect(() => {
    const getData = async () => {
      const data = await getCandidateProfile(candidateProfileURL);
      if (data.success) {
        setCardData(data.data.profiles);
      }
    };
    getData();
  }, []);

  return (
    <div className="dash-content">
      <DashboardHeader title="Recent Candidate" mainHeading="Dashboard" />
      <div className="row my-4">
        {cardData?.map((candidate, index: number) => {
          return <DashboardContentCard key={index} data={candidate} />;
        })}
      </div>
    </div>
  );
};

export default DashboardContent;
