export const featureFlagsDataServiceCall = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          showDarkLightMode: true,
          showTicTacToeBoard: true,
          showAccordion: true,
          showPopupModal: true,
          showScrollProgress: true,
          showSearchAutoComplete: true,
          showStarRating: true,
        });
      }, 1000);
    });
  };
  