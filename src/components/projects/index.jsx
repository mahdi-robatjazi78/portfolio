import React, { useContext, useState } from "react";
import { Element } from "react-scroll";
import InjectMassage from "../../utils/intl";
import RtlMaker from "../../utils/helpers/rtlMaker";
import { GoDownload } from "react-icons/go";
import { FiLink } from "react-icons/fi";
import Pdf from "../../../public/cv/word-cv.pdf";
import { LanguageContext } from "../../utils/context/language";
import NotashDetailModal from "./NotashDetailModal";
import KarRaBendazDetailModal from "./KarRaBendazlModal";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Projects = (props) => {
  const { lang } = useContext(LanguageContext);
  const { setOpenContactMeBox } = props;
  const [openNotashModal, setOpenNotashModal] = useState(false);
  const [openKarModal, setOpenKarModal] = useState(false);

  const closeIconStyles = {
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
      <div className="flex flex-col gap-5 w-full p-10 h-full justify-center items-center">
        <div className="h-fit">
          <RtlMaker>
            <div className="flex flex-col md:flex-row justify-center gap-5 w-full">
              <div className="glassMorphism w-full md:w-3/5 h-52 flex justify-between items-center">
                <img
                  src="/project-logos/shahabDanesh.jpg"
                  className="w-14 h-14 rounded-lg mx-5"
                />
                <RtlMaker>
                  <div className="p-4 f-dosis-bold overflow-y-auto max-h-36">
                    <h2 className="selection-text-background">
                      <InjectMassage id="path.shahab.danesh.title" />
                    </h2>
                    <br />
                    <p className="selection-text-background">
                      <InjectMassage id="path.shahab.danesh.description" />
                    </p>
                  </div>
                </RtlMaker>
              </div>

              <div className="glassMorphism w-full md:w-3/5 h-52 flex justify-between items-center">
                <div className="mx-5 max-w-14">
                  <img
                    src="/project-logos/mapsa.jpg"
                    className="max-w-4xl h-14 mb-3 rounded-lg"
                  />
                  <img
                    src="/project-logos/theMovieProject.jpg"
                    className="max-w-4xl h-14 rounded-lg"
                  />
                </div>
                <RtlMaker>
                  <div className="p-4 f-dosis-bold overflow-y-auto max-h-36	">
                    <h2 className="selection-text-background">
                      <InjectMassage id="path.mapsa.title" />
                    </h2>
                    <br />
                    <p className="selection-text-background">
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
                onClick={() => {
                  setOpenNotashModal(true);
                }}
                className="glassMorphism cursor-pointer relative w-full md:w-3/5 h-52 flex justify-between items-center"
              >
                <span style={closeIconStyles} className="glassMorphism">
                  <IoIosInformationCircleOutline className="text-3xl scale-animation" />
                </span>

                <div className="mx-5 max-w-14">
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
                  <div className="p-4 f-dosis-bold overflow-y-auto max-h-36	">
                    <h2 className="selection-text-background">
                      <InjectMassage id="path.notash.title" />
                    </h2>
                    <br />
                    <p className="selection-text-background">
                      <InjectMassage id="path.notash.description" />
                    </p>
                  </div>
                </RtlMaker>
              </div>

              <div
                onClick={() => {
                  setOpenKarModal(true);
                }}
                className="glassMorphism cursor-pointer relative w-full md:w-3/5 h-52 flex justify-between items-center"
              >
                <span style={closeIconStyles} className="glassMorphism">
                  <IoIosInformationCircleOutline className="text-3xl scale-animation" />
                </span>

                <img
                  src="/project-logos/todo-512.jpg"
                  className="w-14 h-14 rounded-lg mx-5"
                />
                <RtlMaker>
                  <div className="p-4 f-dosis-bold overflow-y-auto max-h-36	">
                    <h2 className="selection-text-background">
                      <InjectMassage id="path.kar.title" />
                    </h2>
                    <br />
                    <p className="selection-text-background">
                      <InjectMassage id="path.kar.description" />
                    </p>
                  </div>
                </RtlMaker>
              </div>
            </div>
          </RtlMaker>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer flex gap-5 md:gap-10">
        <div className="glassMorphism w-44">
          <a target="_blank" href={Pdf}>
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
        <div className="glassMorphism w-44">
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
      <NotashDetailModal open={openNotashModal} setOpen={setOpenNotashModal} />
      <KarRaBendazDetailModal open={openKarModal} setOpen={setOpenKarModal} />
    </Element>
  );
};

export default Projects;
