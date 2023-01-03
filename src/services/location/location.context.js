import { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState({lat: 37.7749295, lng: -122.4194155});
  const [keyword, setKeyword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = searchKeyword => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    if(!searchKeyword.length) {
      // dont't fetch api
      return;
    }
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then(res => {
        setIsLoading(false);
        setLocation(res);
        console.log(res)
      })
      .catch(err => {
        setIsLoading(false);
        setError(err);
      });
  };

  return (
    <LocationContext.Provider
      value={{ location, isLoading, error, search: onSearch, keyword }}>
      {children}
    </LocationContext.Provider>
  );
};
