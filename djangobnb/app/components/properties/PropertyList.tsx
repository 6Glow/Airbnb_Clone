"use client"

import { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";

const PropertyList = () => {
  const getProperties = async () => {
    const url = 'http://localhost:8000/api/properties/'

    await fetch(url, {
      method: 'GET',
    })
        .then(response => response.json())
        .then((json) =>  {
          console.log('json', json)
        })
        .catch((error) => {
          console.log('error', error)
        });
  };
  useEffect(() => {
    getProperties
  }, []);

  return (
    <>
        <PropertyListItem />
        <PropertyListItem />
        <PropertyListItem />
    </>

  )
}

export default PropertyList;