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
import KarRaBendazDetailModal from "./KarRaBendazlModal";
import Virgool from "../../../public/logos/virgool.svg";
import Btn1 from "../../utils/templates/button/btn1";
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
      className={`relative w-screen h-fit projects-gradient`}
    >
      <div className="flex-col gap-10 items-center content-center max-w-[1200px] m-auto h-full">
        <RtlMaker className="flex flex-col gap-5 w-full px-3 justify-center items-center">
          <div
            className="glassMorphism ag-courses-item_link cursor-pointer w-full md:w-3/5 h-52 flex justify-between items-center rounded-md"
            onClick={() => {
              setOpenMapsaModal(true);
            }}
          >
            <div className="ag-courses-item_bg"></div>

            <span
              style={InformationIconStyle}
              className="glassMorphism rounded-md z-10"
            >
              <IoIosInformationCircleOutline className="text-3xl scale-animation" />
            </span>
            <div className="mx-5 max-w-14 z-10">
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
              <div className="p-4 f-dosis-bold overflow-y-hidden max-h-36	z-10">
                <h2 className="selection-text-background ">
                  <InjectMassage id="path.mapsa.title" />
                </h2>
                <br />
                <p className="selection-text-background low_weight">
                  <InjectMassage id="path.mapsa.description" />
                </p>
              </div>
            </RtlMaker>
          </div>
          <div
            className="glassMorphism ag-courses-item_link cursor-pointer relative w-full md:w-3/5 h-52 flex justify-between items-center rounded-md"
            onClick={() => {
              setOpenNotashModal(true);
            }}
          >
            <div className="ag-courses-item_bg"></div>
            <span
              style={InformationIconStyle}
              className="glassMorphism rounded-md z-10"
            >
              <IoIosInformationCircleOutline className="text-3xl scale-animation" />
            </span>

            <div className="mx-5 max-w-14  z-10">
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
              <div className="p-4 f-dosis-bold overflow-y-hidden	">
                <h2 className="selection-text-background ">
                  <InjectMassage id="path.notash.title" />
                </h2>
                <br />
                <p className="selection-text-background low_weight">
                  <InjectMassage id="path.notash.description" />
                </p>
              </div>
            </RtlMaker>
          </div>
          <div className="glassMorphism ag-courses-item_link cursor-pointer relative w-full md:w-3/5 h-52 flex justify-between items-center rounded-md">
            <div className="ag-courses-item_bg"></div>
            <img
              src="/project-logos/kafineteman.jpg"
              className="w-14 h-14 rounded-lg mx-5  z-10"
            />
            <RtlMaker>
              <div className="p-4 f-dosis-bold overflow-y-hidden max-h-36	">
                <h2 className="selection-text-background">
                  <h2 className="selection-text-background ">
                    <InjectMassage id="path.kar.title" />
                  </h2>
                </h2>
                <br />
                <p className="selection-text-background low_weight">
                  <InjectMassage id="path.kar.description" />
                </p>
              </div>
            </RtlMaker>
          </div>
        </RtlMaker>
        <div className="lg:absolute lg:bottom-10 lg:right-10 my-3 lg:my-0">
          <div className="flex flex-col md:flex-row lg:flex-col  gap-3  justify-center items-center">
            <div>
              <a
                target="_blank"
                href="https://virgool.io/@mahdi-robatjazi"
                download
              >
                <Btn1 dir={lang === "fa-IR" ? "rtl" : "ltr"}>
                  <img src={Virgool} width={16} height={16} />
                  <InjectMassage id="go.to.my.virgool.account" />
                </Btn1>
              </a>
            </div>

            <div>
              <a target="_blank" href={Pdf} download>
                <Btn1 dir={lang === "fa-IR" ? "rtl" : "ltr"}>
                  <GoDownload className="text-lg" />
                  <InjectMassage id="get.resume.file" />
                </Btn1>
              </a>
            </div>
            <div>
              <Btn1
                onClick={() => setOpenContactMeBox((prevState) => !prevState)}
                dir={lang === "fa-IR" ? "rtl" : "ltr"}
              >
                <FiLink className="text-lg" />

                <InjectMassage id="header.section.title.contactme" />
              </Btn1>
            </div>
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
