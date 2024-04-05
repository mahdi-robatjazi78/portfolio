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
    // Get the text field
    let timeoutId;

    // Select the text field
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

    // copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(txt);
    clearTimeout(timeoutId);
  }

  const closeIconStyles = {
    position: "absolute",
    top: "-40px",
    right: "-1px",
    cursor: "pointer",
  };

  const { lang } = useContext(LanguageContext);

  function onResumeClick() {
    window.open(Pdf);
  }

  return (
    <div className="fixed left-4 sm:left-1/2 translate-x-0 sm:-translate-x-1/2  w-[94%] sm:w-3/5 h-42 px-4 pt-12 pb-6 md:py-3 glassMorphism contact-box-animation">
      <div className="relative flex flex-col xl:flex-row">
        <span
          style={closeIconStyles}
          className="glassMorphism rotate-animation"
          onClick={() => {
            setOpenContactMeBox(false);
          }}
        >
          <IoCloseOutline className="text-3xl scale-animation" />
        </span>
        <section className="w-full xl:w-1/2 md:mt-2">
          <div className="flex w-[100%] mb-2">
            <img src="/contactme-logos/linkedin.png" width={40} height={40} />
            <div
              ref={LinkedinRef}
              className="flex flex-nowrap w-full glassMorphism mx-3 px-3 rounded-md justify-between items-center"
            >
              <p className="selection-text-background f-dosis-medium tracking-wider  space-2">
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

          <div className="flex w-[100%] mb-2">
            <img src="/contactme-logos/gmail.png" width={40} height={40} />
            <div
              ref={GmailRef}
              className="flex flex-nowrap w-full glassMorphism mx-3 px-3 rounded-md justify-between items-center"
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

          <div className="flex w-[100%] mb-2">
            <img src="/contactme-logos/telegram.png" width={40} height={40} />
            <div
              ref={TelegramRef}
              className="flex flex-nowrap w-full glassMorphism mx-3 px-3 rounded-md justify-between items-center"
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

        <section className="w-full xl:w-1/2 md:mt-2">
          <div className="flex w-[100%] mb-2">
            <img src="/contactme-logos/github2.png" width={40} height={40} />
            <div
              ref={GithubRef}
              className="flex flex-nowrap w-full glassMorphism mx-3 px-3 rounded-md justify-between items-center"
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

          <div className="flex w-[100%] mb-2">
            <img src="/contactme-logos/mobile.jpg" width={40} height={40} />
            <div
              ref={mobileRef}
              className="flex flex-nowrap w-full glassMorphism mx-3 px-3 rounded-md justify-between items-center"
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

          <div className="flex w-[100%] mb-2">
            <img src="/contactme-logos/cv.png" width={40} height={40} />
            <div
              ref={GithubRef}
              className="flex flex-nowrap w-full glassMorphism mx-3 px-3 rounded-md justify-between items-center"
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
                  <a target="_blank" href={Pdf}>
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
