import React, { useContext } from "react";
import InjectMassage from "../../utils/intl";
import { Tab } from "@headlessui/react";
import { Dialog } from "@headlessui/react";
import MyModal from "../../utils/templates/modal";
import ReactPlayer from "react-player/youtube";
import { LanguageContext } from "../../utils/context/language";
import ThemeContext from "../../utils/context/theme";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NotashDetailModal = (props) => {
  const { open, setOpen } = props;
  const { lang } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  return (
    <MyModal open={open} setOpen={setOpen}>
      <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4 max-h-[85vh] h-fit overflow-y-auto">
        <div className="sm:flex sm:items-start">
          <div className="mt-3 sm:ml-4 sm:mt-0 w-full">
            <Dialog.Title
              as="h2"
              className="text-center font-semibold leading-6 w-full underline-offset-8 text-2xl f-exo-medium"
            >
              <a
                href="https://notash.net"
                target="_blank"
                className={`selection-text-background ${
                  theme === "light" ? "text-yellow-700" : "text-yellow-400"
                }`}
              >
                <InjectMassage id="path.notash.title" />
              </a>
            </Dialog.Title>

            {/* <Dialog.Title
              as="h3"
              className={`px-4 text-center selection-text-background text-base mt-2 font-semibold leading-6 ${
                theme === "dark" ? "text-gray-100" : ""
              } f-exo-medium`}
            >
              <InjectMassage id="project.detail.box.notash.description.subtitle" />
            </Dialog.Title> */}

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
                    <InjectMassage id="project.detail.box.notash.select.rulechain" />
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
                    <InjectMassage id="project.detail.box.notash.select.ticketing" />
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
                      "rounded-xl glassMorphism p-4 md:p-3",
                      "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                    )}
                  >
                    <div className="py-2">
                      <p className="text-sm selection-text-background text-gray-950 f-exo-medium px-2 max-h-44 overflow-y-scroll">
                        <InjectMassage id="project.detail.box.notash.description.section.1" />{" "}
                        <a
                          className={`
                          ${
                            theme === "light"
                              ? "text-yellow-700"
                              : "text-yellow-400"
                          }
                          selection-text-background underline`}
                          href="https://web.danialmoj.com/"
                          target="_blank"
                        >
                          <InjectMassage id="holding.danial.moj" />
                        </a>{" "}
                        <InjectMassage id="project.detail.box.notash.description.section.2" />
                      </p>
                    </div>
                  </Tab.Panel>

                  <Tab.Panel
                    className={classNames(
                      "rounded-xl glassMorphism p-4 md:p-3",
                      "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                    )}
                  >
                    <iframe
                      src="https://www.aparat.com/video/video/embed/videohash/fzwQO/vt/frame"
                      allowFullScreen="true"
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                      className="w-full h-56"
                    ></iframe>

                    {/* <ReactPlayer
                      width="100%"
                      height="180px"
                      url="https://youtu.be/HC0tddJodLg"
                    /> */}

                    <div className="py-4">
                      <p className="text-sm text-black f-exo-medium selection-text-background">
                        <InjectMassage id="project.detail.box.notash.rulechain.description" />
                      </p>
                    </div>
                  </Tab.Panel>

                  <Tab.Panel
                    className={classNames(
                      "rounded-xl glassMorphism p-4 md:p-3 w-full",
                      "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                    )}
                  >
                    <iframe
                      src="https://www.aparat.com/video/video/embed/videohash/5R743/vt/frame"
                      allowFullScreen="true"
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                      className="w-full h-56"
                    ></iframe>

                    {/* <ReactPlayer
                      width="100%"
                      height="180px"
                      url="https://youtu.be/NWGJAWrN49A"
                    /> */}
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
                      <li
                        className={`
                        ${
                          theme === "light"
                            ? "text-yellow-700"
                            : "text-yellow-400"
                        }
                      mt-5 f-exo-medium`}
                      >
                        <a
                          target="_blank"
                          href="https://www.aparat.com/v/fzwQO"
                        >
                          <InjectMassage id="project.detail.box.notash.select.rulechain" />{" "}
                          <InjectMassage id="kar.ra.bendaz.links.aparat" />
                        </a>
                      </li>
                      <li
                        className={`
                        ${
                          theme === "light"
                            ? "text-yellow-700"
                            : "text-yellow-400"
                        }
                      mt-5 f-exo-medium`}
                      >
                        <a target="_blank" href="https://youtu.be/HC0tddJodLg">
                          <InjectMassage id="project.detail.box.notash.select.rulechain" />{" "}
                          <InjectMassage id="kar.ra.bendaz.links.youtube" />
                        </a>
                      </li>

                      <li
                        className={`
                        ${
                          theme === "light"
                            ? "text-yellow-700"
                            : "text-yellow-400"
                        }
                      mt-5 f-exo-medium`}
                      >
                        <a
                          target="_blank"
                          href="https://www.aparat.com/v/5R743"
                        >
                          <InjectMassage id="project.detail.box.notash.select.ticketing" />{" "}
                          <InjectMassage id="kar.ra.bendaz.links.aparat" />
                        </a>
                      </li>
                      <li
                        className={`
                        ${
                          theme === "light"
                            ? "text-yellow-700"
                            : "text-yellow-400"
                        }
                      mt-5 f-exo-medium`}
                      >
                        <a target="_blank" href="https://youtu.be/NWGJAWrN49A">
                          <InjectMassage id="project.detail.box.notash.select.ticketing" />{" "}
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

export default NotashDetailModal;
