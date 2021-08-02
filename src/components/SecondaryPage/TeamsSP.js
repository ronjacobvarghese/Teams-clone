import HeaderSP from "./Secondary-Header/HeaderSP";
import TeamsPosts from "../TeritiaryPage/TeamsPosts";
import { Fragment } from "react";
import styles from "./teamssp.module.css";

function TeamsSP() {
  return (
    <Fragment style={{width:'100%'}}>
      <div className={styles.container}>
        <HeaderSP title="General" />
        <TeamsPosts />
      </div>
    </Fragment>
  );
}

export default TeamsSP;
