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
  };

  useEffect(() => {
    if(!keyword) {
      // dont't fetch api
      return;
    }
    locationRequest(keyword.toLowerCase())
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
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{ location, isLoading, error, search: onSearch, keyword }}>
      {children}
    </LocationContext.Provider>
  );
};
