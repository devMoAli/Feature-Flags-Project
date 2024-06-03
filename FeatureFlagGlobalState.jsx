import React, { createContext, useState, useEffect } from "react";
import { featureFlagsDataServiceCall } from "../featureFlagsDataServiceCall";

export const FeatureFlagsContext = createContext();

export const FeatureFlagsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [enabledFlags, setEnabledFlags] = useState({});

  useEffect(() => {
    featureFlagsDataServiceCall().then((flags) => {
      setEnabledFlags(flags);
      setLoading(false);
    });
  }, []);

  return (
    <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
};
