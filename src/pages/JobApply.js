import React from "react";
import Header from "../components/job/Header";
import JobForm from "../components/form/JobForm";
import { useParams } from "react-router-dom";

const capitalizeEachFirstLetter = (sentence) => {
  return sentence.replace(/\b\w/g, (match) => match.toUpperCase());
};

const JobApply = () => {
  const params = useParams();
  const jobTitle = params.id.split("-").join(" ");
  return (
    <div>
      <Header title={`Apply For ${capitalizeEachFirstLetter(jobTitle)}`} />
      <JobForm />
    </div>
  );
};

export default JobApply;
