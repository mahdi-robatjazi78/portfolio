import React, { useRef, useContext } from "react";
import { HiOutlineEye } from "react-icons/hi2";
import { GoCopy } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import { GoDownload } from "react-icons/go";
import InjectMassage from "../../utils/intl";
import { LanguageContext } from "../../utils/context/language";
import Pdf from "../../cv/word-cv.pdf";
import { truncateText } from "../../utils/helpers";
import useWindowSize from "../../utils/hooks/useWindowSize";

const ContactMe = (props) => {
  const { openContactMeBox, setOpenContactMeBox } = props;
  const { size } = useWindowSize();
  const LinkedinRef = useRef(null);
  const GmailRef = useRef(null);
  const TelegramRef = useRef(null);
  const GithubRef = useRef(null);
  const mobileRef = useRef(null);

  function copyOperation(el, txt) {
    let timeoutId;
    if (el === "linkedin") {
      LinkedinRef.current.classList.add("success-box");
      timeoutId = setTimeout(() => {
        LinkedinRef.current.classList.remove("success-box");
      }, 3000);
    }
    if (el === "gmail") {
      GmailRef.current.classList.add("success-box");
      timeoutId = setTimeout(() => {
        GmailRef.current.classList.remove("success-box");
      }, 3000);
    }
    if (el === "telegram") {
      TelegramRef.current.classList.add("success-box");
      timeoutId = setTimeout(() => {
        TelegramRef.current.classList.remove("success-box");
      }, 3000);
    }
    if (el === "github") {
      GithubRef.current.classList.add("success-box");
      timeoutId = setTimeout(() => {
        GithubRef.current.classList.remove("success-box");
      }, 3000);
    }

    if (el === "mobile") {
      mobileRef.current.classList.add("success-box");
      timeoutId = setTimeout(() => {
        mobileRef.current.classList.remove("success-box");
      }, 3000);
    }
    navigator.clipboard.writeText(txt);
    clearTimeout(timeoutId);
  }

  const closeIconStyles = {
    position: "absolute",

    right: "12px",
    cursor: "pointer",
  };

  const { lang } = useContext(LanguageContext);

  function onResumeClick() {
    window.open(Pdf);
  }

  return (
    <div className="fixed left-4 sm:left-1/2 translate-x-0 sm:-translate-x-1/2 w-[94%] sm:w-4/5 h-42 px-4 pt-12 pb-6 md:py-9 bg-[var(--primarycolor)] contact-box-animation z-30">
      <div className="relative lg:flex">
        <span
          style={closeIconStyles}
          className="bg-white rotate-animation top-[-40px] lg:top-[-30px]"
          onClick={() => {
            setOpenContactMeBox(false);
          }}
        >
          <IoCloseOutline className="text-3xl scale-animation" />
        </span>
        <section className="w-full md:mt-2">
          <div className="flex w-full mb-2">
            <img src="/contactme-logos/linkedin.png" width={36} height={36} />
            <div
              ref={LinkedinRef}
              className="flex flex-nowrap w-full bg-white mx-3 px-3 justify-between items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <p className="selection-text-background f-dosis-medium tracking-wider space-2">
                {size[0] < 480
                  ? truncateText("linkedin.com/in/mehdirobatjazi", 20)
                  : "linkedin.com/in/mehdirobatjazi"}
              </p>
              <div className="flex pt-1">
                <span
                  className="iconBox"
                  onClick={() => {
                    copyOperation(
                      "linkedin",
                      "www.linkedin.com/in/mehdirobatjazi"
                    );
                  }}
                >
                  <GoCopy />
                </span>
                <span className="iconBox">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/mehdirobatjazi"
                  >
                    <HiOutlineEye />
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="flex w-full mb-2">
            <img src="/contactme-logos/gmail.png" width={36} height={36} />
            <div
              ref={GmailRef}
              className="flex flex-nowrap w-full bg-white mx-3 px-3 justify-between items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <p className="selection-text-background f-dosis-medium tracking-wider   space-2">
                {size[0] < 480
                  ? truncateText("mahdi.robatjazi78@gmail.com", 20)
                  : "mahdi.robatjazi78@gmail.com"}
              </p>

              <div className="flex  pt-1">
                <span
                  className="iconBox"
                  onClick={() => {
                    copyOperation("gmail", "mahdi.robatjazi78@gmail.com");
                  }}
                >
                  <GoCopy />
                </span>
                <span className="iconBox">
                  <a target="_blank" href="mailto:mahdi.robatjazi78@gmail.com">
                    <HiOutlineEye />
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="flex w-full mb-2">
            <img src="/contactme-logos/telegram.png" width={36} height={36} />
            <div
              ref={TelegramRef}
              className="flex flex-nowrap w-full bg-white mx-3 px-3 justify-between items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <p className="selection-text-background f-dosis-medium tracking-wider space-2">
                {size[0] < 480
                  ? truncateText("https://t.me/Mahdi_Robatjazi", 20)
                  : "https://t.me/Mahdi_Robatjazi"}
              </p>

              <div className="flex pt-1">
                <span
                  className="iconBox"
                  onClick={() => {
                    copyOperation("telegram", "https://t.me/Mahdi_Robatjazi");
                  }}
                >
                  <GoCopy />
                </span>
                <span className="iconBox">
                  <a target="_blank" href="https://t.me/Mahdi_Robatjazi">
                    <HiOutlineEye />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full md:mt-2">
          <div className="flex w-full mb-2">
            <img src="/contactme-logos/github2.png" width={36} height={36} />
            <div
              ref={GithubRef}
              className="flex flex-nowrap w-full bg-white mx-3 px-3 justify-between items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <p className="selection-text-background f-dosis-medium tracking-wider space-2">
                {size[0] < 480
                  ? truncateText("https://github.com/mahdi-robatjazi78", 20)
                  : "https://github.com/mahdi-robatjazi78"}
              </p>
              <div className="flex  pt-1">
                <span
                  className="iconBox"
                  data-tooltip-target="copy-tooltip-box"
                  onClick={() => {
                    copyOperation(
                      "github",
                      "https://github.com/mahdi-robatjazi78"
                    );
                  }}
                >
                  <GoCopy />
                </span>

                <span
                  className="iconBox"
                  data-tooltip-target="open-tooltip-box"
                >
                  <a
                    target="_blank"
                    href="https://github.com/mahdi-robatjazi78"
                  >
                    <HiOutlineEye />
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="flex w-full mb-2">
            <img src="/contactme-logos/mobile.jpg" width={36} height={36} />
            <div
              ref={mobileRef}
              className="flex flex-nowrap w-full bg-white mx-3 px-3 justify-between items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <p
                className={`selection-text-background f-dosis-medium tracking-wider space-2 ${
                  lang === "fa-IR" ? "text-md text-right pr-2" : ""
                }  `}
              >
                09190868386
              </p>
              <div className="flex px-4 pt-1">
                <span
                  className="iconBox"
                  data-tooltip-target="copy-tooltip-box"
                  onClick={() => {
                    copyOperation("mobile", "09190868386");
                  }}
                >
                  <GoCopy />
                </span>

                <div
                  data-tooltip-target="copy-tooltip-box"
                  className="h-1 w-4"
                ></div>
              </div>
            </div>
          </div>

          <div className="flex w-full mb-2">
            <img src="/contactme-logos/cv.png" width={36} height={36} />
            <div
              ref={GithubRef}
              className="flex flex-nowrap w-full bg-white mx-3 px-3 justify-between items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <p
                className={`selection-text-background f-dosis-medium tracking-wider space-2 ${
                  lang === "fa-IR" ? "text-xs text-right pr-2" : ""
                }  `}
              >
                <InjectMassage id="resume.title" />
              </p>
              <div className="flex px-4 pt-1">
                <span
                  className="iconBox"
                  data-tooltip-target="open-tooltip-box"
                >
                  <a target="_blank" href={Pdf} download>
                    <GoDownload />
                  </a>
                </span>

                <div
                  data-tooltip-target="copy-tooltip-box"
                  className="h-1 w-4"
                ></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactMe;
