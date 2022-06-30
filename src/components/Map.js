import React, { useEffect, useState } from "react";

const { kakao } = window;

const Map = () => {
  let [myLat, setMyLat] = useState("");
  let [myLon, setMyLon] = useState("");

  useEffect(() => {
    // 현 위치 좌표로 찍어주기
    const onGeoOkay = (position) => {
      setMyLat(position.coords.latitude);
      setMyLon(position.coords.longitude);
      console.log("오차범위", position.coords.accuracy, "미터");
    };
    const onGeoError = () => {
      //만약 사용자의 브라우저가 위치 정보를 지원하지 않을 때
      alert("님 다른 브라우저 쓰센");
    };
    navigator.geolocation.getCurrentPosition(onGeoOkay, onGeoError);

    //위에서 만들어진 좌표 주소로 변환
    const getAddr = (lat, lng) => {
      let geocoder = new kakao.maps.services.Geocoder();
      let coord = new kakao.maps.LatLng(lat, lng);
      let callback = function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          console.log(result)
        }
      };
      geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    };
    getAddr(myLat, myLon);
  }, [myLat, myLon]);
};

export default Map;
