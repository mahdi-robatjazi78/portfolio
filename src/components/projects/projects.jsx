import React, { useRef} from "react";
import { Element } from "react-scroll";
import InjectMassage from "../../utils/intl";
import RtlMaker from "../../utils/helpers/rtlMaker";


const Projects = () => {
  
  return (
    <Element
      name="project-section"
      id="projects-section" 
      className={`relative w-screen  h:fit md:h-screen projects-gradient`}
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
                <div className="p-4 f-dosis-bold overflow-y-auto max-h-36	">
                  <h2>
                    <InjectMassage id="path.shahab.danesh.title" />
                  </h2>
                  <br />
                  <p className="">
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
                  <h2>
                    <InjectMassage id="path.mapsa.title" />
                  </h2>
                  <br />
                  <p>
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
            <div className="glassMorphism w-full md:w-3/5 h-52 flex justify-between items-center">
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
                  <h2>
                    <InjectMassage id="path.notash.title" />
                  </h2>
                  <br />
                  <p>
                    <InjectMassage id="path.notash.description" />
                  </p>
                </div>
              </RtlMaker>
            </div>

            <div className="glassMorphism w-full md:w-3/5 h-52 flex justify-between items-center">
              <img
                src="/project-logos/todo-512.jpg"
                className="w-14 h-14 rounded-lg mx-5"
              />
              <RtlMaker>
                <div className="p-4 f-dosis-bold overflow-y-auto max-h-36	">
                  <h2>
                    <InjectMassage id="path.kar.title" />
                  </h2>
                  <br />
                  <p>
                    <InjectMassage id="path.kar.description" />
                  </p>
                </div>
              </RtlMaker>
            </div>
          </div>
        </RtlMaker>
        </div>
      </div>





    </Element>
  );
};

export default Projects;
