import React, { useContext } from "react";
import { Dialog } from "@headlessui/react";
import InjectMassage from "../../utils/intl";
import { LanguageContext } from "../../utils/context/language";
import { Tab } from "@headlessui/react";
import MyModal from "../../utils/templates/modal";
import ReactPlayer from "react-player/youtube";
import ThemeContext from "../../utils/context/theme";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const KarRaBendazDetailModal = (props) => {
  const { open, setOpen } = props;
  const { lang } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  return (
    <MyModal open={open} setOpen={setOpen}>
      <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
        <div className="sm:flex sm:items-start">
          <div className="mt-3 sm:ml-4 sm:mt-0 w-full">
            <Dialog.Title
              as="h2"
              className="text-center font-semibold leading-6 underline-offset-8 text-2xl f-exo-medium"
            >
              <p
                className={`selection-text-background 
               ${theme === "light" ? "text-gray-950" : "text-gray-100"}
              `}
              >
                <InjectMassage id="kar.ra.bendaz.title" />
              </p>
            </Dialog.Title>

          

          

            <div className="w-full max-w-md px-0 md:px-2 py-6 sm:px-0">
              <Tab.Group>
                <Tab.List className="flex space-x-1 mb-3 rounded-xl bg-blue-900/20 p-1">
                <Tab
                    className={({ selected }) => {
                      return classNames(
                        "selection-text-background f-exo-medium w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                        "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                        selected
                          ? "bg-white  text-gray-950 shadow"
                          : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                      );
                    }}
                  >
                    <InjectMassage id="project.detail.box.notash.select.summary" />
                  </Tab>
                  
                  
                  <Tab
                    className={({ selected }) => {
                      return classNames(
                        "selection-text-background f-exo-medium w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                        "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                        selected
                          ? "bg-white  text-gray-950 shadow"
                          : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                      );
                    }}
                  >
                    <InjectMassage id="kar.ra.bendaz.modal.tab.1" />
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        "selection-text-background f-exo-medium w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                        "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                        selected
                          ? "bg-white text-gray-950 shadow"
                          : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                      )
                    }
                  >
                    <InjectMassage id="kar.ra.bendaz.modal.tab.2" />
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        "selection-text-background f-exo-medium w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                        "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                        selected
                          ? "bg-white text-gray-950 shadow"
                          : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                      )
                    }
                  >
                    <InjectMassage id="kar.ra.bendaz.modal.tab.3" />
                  </Tab>
                </Tab.List>
                <Tab.Panels className="">
                <Tab.Panel
                    className={classNames(
                      "rounded-xl glassMorphism p-0 md:p-3",
                      "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                    )}
                  >
                    <div className="">
                    <div className="py-2 overflow-y-scroll h-52">
                    <Dialog.Title
              as="h3"
              className="px-7 selection-text-background text-base font-semibold leading-6 text-gray-100 f-exo-medium"
            >
              <InjectMassage id="kar.ra.bendaz.modal.tab.title" />
            </Dialog.Title>
              
              
              <ul
                className={`list-disc pr-5  ${
                  lang === "fa-IR"
                    ? "list-disc pr-7 text-base"
                    : "list-disc pl-7"
                }`}
              >
                <li
                  className={`
               ${theme === "light" ? "text-gray-950" : "text-gray-100"}

                
                text-sm selection-text-background text-gray-100 f-exo-medium px-2`}
                >
                  <InjectMassage id="kar.ra.bendaz.description1" />{" "}
                </li>
                <li
                  className={`
               ${theme === "light" ? "text-gray-950" : "text-gray-100"}

                
                mt-2 text-sm selection-text-background text-gray-100 f-exo-medium px-2`}
                >
                  <InjectMassage id="kar.ra.bendaz.description2" />{" "}
                </li>
                <li
                  className={`
               ${theme === "light" ? "text-gray-950" : "text-gray-100"}

                
                mt-2 text-sm selection-text-background text-gray-100 f-exo-medium px-2`}
                >
                  <InjectMassage id="kar.ra.bendaz.description3" />{" "}
                </li>
                <li
                  className={`
               ${theme === "light" ? "text-gray-950" : "text-gray-100"}

                
                mt-2 text-sm selection-text-background text-gray-100 f-exo-medium px-2`}
                >
                  <InjectMassage id="kar.ra.bendaz.description4" />{" "}
                </li>
              </ul>
            </div>
                    </div>
                  </Tab.Panel>



                  <Tab.Panel
                    className={classNames(
                      "rounded-xl glassMorphism p-0 md:p-3",
                      "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                    )}
                  >
                    <div className="py-4 flex justify-around items-center flex-col sm:flex-row gap-3 lg:gap-0 ">
                      <img
                        className="w-32 sm:w-64 sm:h-44"
                        alt="Kar Ra Bendaz Poster"
                        src="/portfolio/karRaBendaz/landing.png"
                      />
                      <img
                        className="w-20 md:w-28"
                        alt="Kar Ra Bendaz Poster"
                        src="/portfolio/karRaBendaz/logo512.png"
                      />
                    </div>
                  </Tab.Panel>

                  <Tab.Panel
                    className={classNames(
                      "rounded-xl glassMorphism p-4 md:p-3 w-full",
                      "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                    )}
                  >
               <iframe
                      src="https://www.aparat.com/video/video/embed/videohash/vl9zO/vt/frame"
                      allowFullScreen="true"
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                      className="w-full h-56"
                    ></iframe>  

                    {/* <ReactPlayer
                      width="100%"
                      height="180px"
                      url="https://youtu.be/FpQn0ZuypFA"
                    /> */}

                    <div className="py-3">
                      <p className="text-sm text-black f-exo-medium selection-text-background">
                        <InjectMassage id="kar.ra.bendaz.description2" />
                      </p>
                    </div>
                  </Tab.Panel>

                  <Tab.Panel
                    className={classNames(
                      "rounded-xl glassMorphism p-4 md:p-3 w-full",
                      "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                    )}
                  >
                    <ul
                      className={`list-disc pr-5 pb-8 ${
                        lang === "fa-IR"
                          ? "list-disc pr-7 text-base"
                          : "list-disc pl-7"
                      }`}
                    >
                      <li className={`${theme === "light"?"text-yellow-700":"text-yellow-400"} mt-5 f-exo-medium`}>
                        <a
                          target="_blank"
                          href="https://www.aparat.com/video/video/embed/videohash/vl9zO/vt/frame"
                        >
                          <InjectMassage id="kar.ra.bendaz.links.aparat" />
                        </a>
                      </li>
                      <li className={`${theme === "light"?"text-yellow-700":"text-yellow-400"} mt-5 f-exo-medium`}>
                        <a target="_blank" href="https://youtu.be/FpQn0ZuypFA">
                          <InjectMassage id="kar.ra.bendaz.links.youtube" />
                        </a>
                      </li>
                    </ul>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>
      </div>
    </MyModal>
  );
};

export default KarRaBendazDetailModal;
