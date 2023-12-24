import React, { useContext } from "react";
import { Dialog } from "@headlessui/react";
import InjectMassage from "../../utils/intl";
import { LanguageContext } from "../../utils/context/language";
import { Tab } from "@headlessui/react";
import MyModal from "../../utils/templates/modal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const KarRaBendazDetailModal = (props) => {
  const { open, setOpen } = props;
  const { lang } = useContext(LanguageContext);

  return (
    <MyModal open={open} setOpen={setOpen}>
      <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
        <div className="sm:flex sm:items-start">
          <div className="mt-3 sm:ml-4 sm:mt-0">
            <Dialog.Title
              as="h2"
              className="text-center font-semibold leading-6  underline-offset-8 text-2xl f-exo-medium"
            >
              <p className="selection-text-background text-white">
                <InjectMassage id="kar.ra.bendaz.title" />
              </p>
            </Dialog.Title>

            <div className="py-4 my-4 overflow-y-scroll h-24">
              <ul
                className={`list-disc pr-5  ${
                  lang === "fa-IR"
                    ? "list-disc pr-7 text-base"
                    : "list-disc pl-7"
                }`}
              >
                <li className="text-sm selection-text-background text-gray-100 f-exo-medium px-2">
                  <InjectMassage id="kar.ra.bendaz.description1" />{" "}
                </li>
                <li className="mt-2 text-sm selection-text-background text-gray-100 f-exo-medium px-2">
                  <InjectMassage id="kar.ra.bendaz.description2" />{" "}
                </li>
                <li className="mt-2 text-sm selection-text-background text-gray-100 f-exo-medium px-2">
                  <InjectMassage id="kar.ra.bendaz.description3" />{" "}
                </li>
                <li className="mt-2 text-sm selection-text-background text-gray-100 f-exo-medium px-2">
                  <InjectMassage id="kar.ra.bendaz.description4" />{" "}
                </li>
              </ul>
            </div>

            <Dialog.Title
              as="h3"
              className="px-7 selection-text-background text-base font-semibold leading-6 text-gray-100 f-exo-medium"
            >
              <InjectMassage id="kar.ra.bendaz.modal.tab.title" />
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
                </Tab.List>
                <Tab.Panels className="">
                  <Tab.Panel
                    className={classNames(
                      "rounded-xl glassMorphism p-0 md:p-3",
                      "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                    )}
                  >
                    <div className="py-4 flex justify-around items-center flex-row">
                      <img
                        className="w-64"
                        alt="Kar Ra Bendaz Poster"
                        src="/portfolio/karRaBendaz/landing.png"
                      />
                      <img
                        className="w-28"
                        alt="Kar Ra Bendaz Poster"
                        src="/portfolio/karRaBendaz/logo512.png"
                      />
                    </div>
                  </Tab.Panel>

                  <Tab.Panel
                    className={classNames(
                      "rounded-xl glassMorphism p-0 md:p-3",
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

                    <div className="py-4">
                      <p className="text-sm text-black f-exo-medium selection-text-background">
                        <InjectMassage id="project.detail.box.notash.ticketing.description" />
                      </p>
                    </div>
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
