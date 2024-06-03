import React, { useContext } from "react";
import { FeatureFlagsContext } from "./context/FeatureFlagGlobalState";
import Accordion from "../accordion/src/components/accordion/index";
import DarkModeToggle from "../darkmode-toggle/src/components/index";
import TicTacTeo from "../tic-tac-teo/src/components/index";
import ModalP from "../popup-modal/src/components/modalP";
import StarRating from "../star-rating/src/components/index";
import SeachAutoComplete from "../search-autocomplete/src/components/SearchAutoComplete";
import ScrollProgressBarIndicator from "../scroll-progress-bar-indicator/src/components/index";
import "./styles.css";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    { key: "showDarkLightMode", component: <DarkModeToggle /> },
    { key: "showTicTacToeBoard", component: <TicTacTeo /> },
    { key: "showAccordion", component: <Accordion /> },
    { key: "showPopupModal", component: <ModalP /> },
    { key: "showScrollProgress", component: <ScrollProgressBarIndicator /> },
    { key: "showSearchAutoComplete", component: <SeachAutoComplete /> },
    { key: "showStarRating", component: <StarRating noOfStars={5} /> },
  ];

  function checkEnabledFlags(key) {
    return enabledFlags[key];
  }

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="featureFlagsContainer">
    {/* <h1>Feature Flags</h1> */}
    <div className="components-wrapper">
      {componentsToRender.map((item) =>
        checkEnabledFlags(item.key) ? (
          <div key={item.key} className="component">{item.component}</div>
        ) : null
      )}
    </div>
  </div>
  );
}
