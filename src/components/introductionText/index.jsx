import React from 'react'
import Typewriter from "typewriter-effect";


const IntroductionText = () => {
  return (
	<Typewriter
		onInit={(typewriter) => {
	  typewriter

		.typeString("Hi every body")
		.pauseFor(1500)
		.deleteAll()

		.typeString("I Am Mahdi Robatjazi")
		.pauseFor(2500)
		.deleteAll()

		.typeString("I do web development")
		.pauseFor(1500)
		.deleteAll()

		.typeString("Stack : javascript 👍")
		.pauseFor(1500)
		.deleteAll()

		// .typeString("سلام به همگی")
		// .pauseFor(1500)
		// .deleteAll()

		// .typeString("من مهدی رباط جزی هستم")
		// .pauseFor(2500)
		// .deleteAll()

		// .typeString("توسعه وب کار من است")
		// .pauseFor(1500)
		// .deleteAll()

		// .typeString("دامنه فعالیت : جاوااسکریپت")
		// .pauseFor(1500)
		// .deleteAll()

		.start();
	}}
	options={{
	  autoStart: true,
	  loop: true,
	}}
  />
  )
}

export default IntroductionText