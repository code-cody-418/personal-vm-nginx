import React, { useEffect, useMemo, useRef, useState } from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { FontConfig } from "./FontCofig";

export const TitleProfessionText = () => {
  //set responsive values
  const responsiveData = new Responsive();
  responsiveData.desktopSize = 1;
  responsiveData.desktopPositionX = -10;
  responsiveData.desktopPositionY = -5;

  responsiveData.desktopSubSize = 1;
  responsiveData.desktopSubPositionX = 6;
  responsiveData.desktopSubPositionY = -5;

  responsiveData.mobileSize = 0.7;
  responsiveData.mobilePositionX = -5;
  responsiveData.mobilePositionY = 1;

  responsiveData.mobileSubSize = 1.5;
  responsiveData.mobileSubPositionX = -5;
  responsiveData.mobileSubPositionY = -2;

  const { size, positionX, positionY, subSize, subPositionX, subPositionY } =
    useResponsive(responsiveData);

  const ProfessionText = () => {
    //set the state of the icon
    const [textState, setTextState] = useState("");
    const [descriptionState, setDescriptionState] = useState("");

    //color of text before being changed
    let startingColor = "#ea2e6f";

    //allows each skill to change color
    const [textColor] = useState(startingColor);

    //Functionality to 30 second timer
    const [thirtySeconds, setThirtySeconds] = useState(30);
    const [timerOnOff, setTimerOnOff] = useState(true);

    useEffect(() => {
      if (timerOnOff === true) {
        if (thirtySeconds === -1) {
          setThirtySeconds(30);
        } else if (thirtySeconds > -2) {
          const intervalId = setInterval(() => {
            setThirtySeconds((thirtySeconds) => thirtySeconds - 1);
          }, 1000);
          // console.log("seconds", thirtySeconds)
          return () => clearInterval(intervalId);
        }
      }
    }, [thirtySeconds, timerOnOff]);

    useEffect(() => {
      if (timerOnOff === true) {
        if (thirtySeconds === 30) {
          setTextState("Full ");
        } else if (thirtySeconds === 28) {
          setTextState("Full Stack ");
        } else if (thirtySeconds === 26) {
          setTextState("Full Stack Website");
        } else if (thirtySeconds === 24) {
          setDescriptionState("Creator");
        } else if (thirtySeconds === 22) {
          setDescriptionState("Designer");
        } else if (thirtySeconds === 20) {
          setDescriptionState("Developer");
        } else if (thirtySeconds === 18) {
          setDescriptionState("Creator");
        } else if (thirtySeconds === 16) {
          setDescriptionState("Designer");
        } else if (thirtySeconds === 14) {
          setDescriptionState("Developer");
        } else if (thirtySeconds === 12) {
          setDescriptionState("Creator");
        } else if (thirtySeconds === 10) {
          setDescriptionState("Designer");
        } else if (thirtySeconds === 8) {
          setDescriptionState("Developer");
        } else if (thirtySeconds === 6) {
          setDescriptionState("Creator");
          setTimerOnOff(false);
        }
      }
    }, [textState, thirtySeconds, timerOnOff]);

    return (
      <>
        <group position={[0, 0, 0]}>
          <group position={[positionX, positionY, -15]} //separate each new item in list by y-2
            rotation={[0, 0, 0]}>
            <FontConfig
              text={textState}
              fontType="/Sunmore-Slant-Free-Regular.json"
              size={size}

            // uniqueColor={textColor}
            // uniqueSize={size}
            // uniqueMaterial={false}
            />
          </group>
          <group position={[subPositionX, subPositionY, -15]} //separate each new item in list by y-2
            rotation={[0, 0, 0]}>
            <FontConfig
              text={descriptionState}
              fontType="/Sunmore-Slant-Free-Regular.json"
              size={subSize}

            // uniqueColor={textColor}
            // uniqueSize={subSize}
            // uniqueMaterial={true}
            />
          </group>
        </group>
      </>
    );
  };
  return (
    <>
      <ProfessionText />
    </>
  );
};
