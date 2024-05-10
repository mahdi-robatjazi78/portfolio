import React, { useContext } from "react";
import { Dialog } from "@headlessui/react";
import InjectMassage from "../../utils/intl";
import { LanguageContext } from "../../utils/context/language";
import { Tab } from "@headlessui/react";
import MyModal from "../../utils/templates/modal";
import ThemeContext from "../../utils/context/theme";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const MapsaDetailModal = (props) => {
  const { open, setOpen } = props;
  const { lang } = useContext(LanguageContext);
  const {theme} = useContext(ThemeContext)
  return (
    <MyModal open={open} setOpen={setOpen}>
      <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
        <div className="sm:flex sm:items-start">
          <div className="mt-3 sm:ml-4 sm:mt-0">
            <Dialog.Title
              as="h2"
              className="text-center font-semibold leading-6  underline-offset-8 text-2xl f-exo-medium"
            >
              <a
                href="https://bootcamp.mapsahr.com/"
                target="_blank"
                className={`selection-text-background
                ${theme === "light"?"text-yellow-700":"text-yellow-400"}
                `}
              >
                <InjectMassage id="mapsa.bootcamp.modal.title" />
              </a>
            </Dialog.Title>

            <div className="py-4 my-4  h-24">
              <p className={`text-sm selection-text-background  ${theme === "light" ? "text-gray-950" : "text-gray-100"} f-exo-medium px-2`}>
                <InjectMassage id="mapsa.bootcamp.modal.description1" />
              </p>
              <p className={`text-sm selection-text-background  ${theme === "light" ? "text-gray-950" : "text-gray-100"} f-exo-medium px-2`}>
                <InjectMassage id="mapsa.bootcamp.modal.description2" />
              </p>
            </div>

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
                    <InjectMassage id="mapsa.bootcamp.group.image.tab.1" />
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
                    <InjectMassage id="mapsa.bootcamp.movie.project.tab.2" />
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
                    <InjectMassage id="mapsa.bootcamp.links.tab.3" />
                  </Tab>
                </Tab.List>
                <Tab.Panels className="">
                  <Tab.Panel
                    className={classNames(
                      "rounded-xl glassMorphism p-3 md:p-3",
                      "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                    )}
                  >
                    <div className="py-4 flex justify-around items-center flex-row">
                      <img alt="Mapsa Bootcamp Group Image" src="/project-logos/mapsaGroupTogether.jpeg" />
                    </div>
                  </Tab.Panel>
                  <Tab.Panel
                    className={classNames(
                      "rounded-xl glassMorphism p-3 md:p-3",
                      "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                    )}
                  >
                    <div className="py-4 flex justify-around items-center flex-row">
                      <img alt="Mapsa Bootcamp: The Movie Project Landing Page" src="/project-logos/theMovieProjectLanding.png" />
                    </div>
                  </Tab.Panel>

                  <Tab.Panel
                    className={classNames(
                      "rounded-xl glassMorphism p-3 md:p-3",
                      "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                    )}
                  >
                    <ul
                       className={`list-disc pr-5 pb-4  ${
                        lang === "fa-IR"
                          ? "list-disc pr-7 text-base"
                          : "list-disc pl-7"
                      }`}
                    >
                      <li className={`${theme === "light"?"text-yellow-700":"text-yellow-400"} mt-5 f-exo-medium`}><a target="_blank" href="https://bootcamp.mapsahr.com/"><InjectMassage id="mapsa.bootcamp.modal.title" /></a></li>
                      <li className={`${theme === "light"?"text-yellow-700":"text-yellow-400"} mt-5 f-exo-medium`}><a target="_blank" href="https://cv-mehdirobatjazi-tmp.vercel.app/"><InjectMassage id="mapsa.bootcamp.movie.project.tab.2" /></a></li>
                      <li className={`${theme === "light"?"text-yellow-700":"text-yellow-400"} mt-5 f-exo-medium`}><a target="_blank" href="https://www.linkedin.com/in/truemoein/?originalSubdomain=ir"><InjectMassage id="mapsa.bootcamp.moein.alizadeh.linkedin" /></a></li>
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

export default MapsaDetailModal;
