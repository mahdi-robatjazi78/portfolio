import React from 'react'
import Typewriter from "typewriter-effect";


export function IntroductionTextEnglish  () {
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
		.start();
	}}
	options={{
	  autoStart: true,
	  loop: true,
	}}
  />
  )
} 


export function IntroductionTextPersian (){
	return (
	  <Typewriter
		  onInit={(typewriter) => {
		typewriter
  
		  .typeString("سلام به همگی")
		  .pauseFor(1500)
		  .deleteAll()
  
		  .typeString("من مهدی رباط جزی هستم")
		  .pauseFor(2500)
		  .deleteAll()
  
		  .typeString("من توسعه وب را انجام می دهم")
		  .pauseFor(1500)
		  .deleteAll()
  
		  .typeString("ناحیه : جاوااسکریپت 👍")
		  .pauseFor(1500)
		  .deleteAll() 
		  .start();
	  }}
	  options={{

		autoStart: true,
		loop: true,
	  }}
	/>
	)
  } 