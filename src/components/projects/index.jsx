import React, { useContext, useState } from "react";
import { Element } from "react-scroll";
import InjectMassage from "../../utils/intl";
import RtlMaker from "../../utils/helpers/rtlMaker";
import { GoDownload } from "react-icons/go";
import { FiLink } from "react-icons/fi";
import Pdf from "../../cv/word-cv.pdf";
import { LanguageContext } from "../../utils/context/language";
import { IoIosInformationCircleOutline } from "react-icons/io";
import MapsaDetailModal from "./mapsaModal";
import NotashDetailModal from "./notashModal";
import {motion} from "framer-motion";

const Projects = (props) => {
  const { lang } = useContext(LanguageContext);
  const { setOpenContactMeBox } = props;
  const [openNotashModal, setOpenNotashModal] = useState(false);
  const [openKarModal, setOpenKarModal] = useState(false);
  const [openMapsaModal, setOpenMapsaModal] = useState(false);

  const InformationIconStyle = {
    position: "absolute",
    top: "20px",
    cursor: "pointer",
    ...(lang === "en-US" ? { right: "30px" } : { left: "30px" }),
  };

  return (
    <Element
      name="project-section"
      id="projects-section"
      className={`relative w-screen  h:fit md:h-screen projects-gradient pb-10 md:pb-none`}
    >
      <div className="flex flex-col gap-5 w-full px-3 p-20 md:p-10 h-full justify-center items-center">
        <div className="h-fit">
          <RtlMaker>
            <div className="flex flex-col md:flex-row justify-center gap-5 w-full">
              <div className="glassMorphism overflow-hidden w-full md:w-3/5 h-52 flex justify-between items-center rounded-md">
                <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1}}
                >

                <img
                  src="/project-logos/shahabDanesh.jpg"
                  className="w-14 h-14 rounded-lg mx-5"
                  />
                  </motion.div>
                <RtlMaker>
                  <div className="f-dosis-bold overflow-y-auto px-3 max-h-36">
                    <h2 className="selection-text-background">
                      <InjectMassage id="path.shahab.danesh.title" />
                    </h2>
                    <br />
                    <p className="selection-text-background  text-sm leading-6 md:leading-8 low_weight">
                      <InjectMassage id="path.shahab.danesh.description" />
                    </p>
                  </div>
                </RtlMaker>
              </div>

              <div
                className="glassMorphism overflow-hidden cursor-pointer w-full md:w-3/5 h-52 flex justify-between items-center rounded-md"
                onClick={() => {
                  setOpenMapsaModal(true);
                }}
              >
                <span style={InformationIconStyle} className="glassMorphism rounded-md">
                  <IoIosInformationCircleOutline className="text-3xl scale-animation" />
                </span>
                <motion.div
                
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1}}
                
                className="mx-5 max-w-14">
                  <img
                    src="/project-logos/mapsa.jpg"
                    className="max-w-4xl h-14 mb-3 rounded-lg"
                  />
                  <img
                    src="/project-logos/theMovieProject.jpg"
                    className="max-w-4xl h-14 rounded-lg"
                  />
                </motion.div>
                <RtlMaker>
                  <div className="f-dosis-bold overflow-y-auto px-3 max-h-36	">
                    <h2 className="selection-text-background">
                      <InjectMassage id="path.mapsa.title" />
                    </h2>
                    <br />
                    <p className="selection-text-background  text-sm leading-6 md:leading-8 low_weight">
                      <InjectMassage id="path.mapsa.description" />
                    </p>
                  </div>
                </RtlMaker>
              </div>
            </div>
          </RtlMaker>
        </div>

        <div className="h-fit">
          <RtlMaker>
            <div className="flex flex-col md:flex-row justify-center gap-5 w-full">
              <div
                className="glassMorphism overflow-hidden cursor-pointer relative w-full md:w-3/5 h-52 flex justify-between items-center rounded-md"
                onClick={() => {
                  setOpenNotashModal(true);
                }}
              >
                <span style={InformationIconStyle} className="glassMorphism rounded-md">
                  <IoIosInformationCircleOutline className="text-3xl scale-animation" />
                </span>

                <div className="mx-5 max-w-14"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1}}
                >
                  <img
                    src="/project-logos/danialmoj.jpg"
                    className="h-14 mb-3 rounded-lg max-w-4xl"
                  />
                  <img
                    src="/project-logos/notash.jpg"
                    className="h-14 rounded-lg max-w-4xl"
                  />
                </div>

                <RtlMaker>
                  <div className="f-dosis-bold overflow-y-auto px-3 max-h-36	">
                    <h2 className="selection-text-background ">
                      <InjectMassage id="path.notash.title" />
                    </h2>
                    <br />
                    <p className="selection-text-background  text-sm leading-6 md:leading-8 low_weight">
                      <InjectMassage id="path.notash.description" />
                    </p>
                  </div>
                </RtlMaker>
              </div>

              <div
                // onClick={() => {
                //   setOpenKarModal(true);
                // }}
                className="glassMorphism overflow-hidden cursor-pointer relative w-full md:w-3/5 h-52 flex justify-between items-center rounded-md"
              >
                {/* <span style={InformationIconStyle} className="glassMorphism rounded-md">
                  <IoIosInformationCircleOutline className="text-3xl scale-animation" />
                </span> */}

                <div
                className="flex justify-between items-center"m
                >


                <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1}}
                
                >



                <img
                  src="/project-logos/kafineteman.jpg"
                  className="w-20 h-14 rounded-lg mx-5"
                  />
                  </motion.div>
                <RtlMaker>
                  <div className="f-dosis-bold overflow-y-auto px-3 max-h-36	">
                    <h2 className="selection-text-background">
                      <a id="link_1" href="https://kafineteman.com/" target="_blank">
                      <InjectMassage id="path.kar.title" />
                      </a>
                    </h2>
                    <br />
                    <p className="selection-text-background  text-sm leading-6 md:leading-8 low_weight">
                      <InjectMassage id="path.kar.description" />
                    </p>
                  </div>
                </RtlMaker>
                </div>

              </div>
            </div>
          </RtlMaker>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col md:flex-row gap-3 md:gap-10">
        <div className="glassMorphism rounded-md w-44">
          <a target="_blank" href={Pdf} download>
            <div
              className="flex justify-around items-center px-4 "
              dir={lang === "fa-IR" ? "rtl" : "ltr"}
            >
              <GoDownload />

              <p className="leading-10 f-exo-medium">
                <InjectMassage id="get.resume.file" />
              </p>
            </div>
          </a>
        </div>
        <div className="glassMorphism rounded-md w-44">
          <div
            onClick={() => setOpenContactMeBox((prevState) => !prevState)}
            className="flex justify-around items-center px-4 "
            dir={lang === "fa-IR" ? "rtl" : "ltr"}
          >
            <FiLink />

            <p className="leading-10 f-exo-medium">
              <InjectMassage id="header.section.title.contactme" />
            </p>
          </div>
        </div>
      </div>

      <MapsaDetailModal open={openMapsaModal} setOpen={setOpenMapsaModal} />
      <NotashDetailModal open={openNotashModal} setOpen={setOpenNotashModal} />
      {/* <KarRaBendazDetailModal open={openKarModal} setOpen={setOpenKarModal} /> */}
    </Element>
  );
};

export default Projects;
