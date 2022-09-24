import React, { useState } from "react";
import AddCompany from "../../Components/AddCompany";
import CompanySelect from "../../Components/CompanySelect";
import RecordCard from "../../Components/RecordCard";
import classes from "./style.module.scss";
import AddCompanyModal from "../../Components/AddCompany/Modal";
import { CREATE_COMPANY } from "../../graphql/mutations";

const Home = () => {
  const [company, setCompany] = useState("");

  const onSelectCompany = (event) => {
    setCompany(event.target.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes["feature-box"]}>
        <CompanySelect
          company={company}
          setCompany={setCompany}
          onSelectCompany={onSelectCompany}
        />
        <AddCompanyModal />
        <div className={classes["budget-box"]}></div>
        <div className={classes.title}>budget</div>
        <div className={classes.value}>KWD 10,000</div>
        <div className={classes.title}>Yearly Net Profit</div>
        <div className={classes["year-wrapper"]}>
          <RecordCard />
          <RecordCard />
          <RecordCard />
          <RecordCard />
          <RecordCard />
          <RecordCard />
          <RecordCard />
          <RecordCard />
          <RecordCard />
          <RecordCard />
          <RecordCard />
          <RecordCard />
        </div>
        <div className={classes.title}>Survival Period</div>
        <div className={classes.value}> ~ 6 months period</div>
        <div className={classes.title}>Company analytics</div>
        <div className={classes.analytics}>
          <div className={classes.value}>Best: Jan, Feb</div>
          <div className={classes.value}>Worst: Aug, Sept, Oct</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
