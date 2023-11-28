import React from 'react'
import Typewriter from "typewriter-effect";
import useScrollPosition from '../../utils/hooks/useScrollPosition';

export function IntroductionTextEnglish  () {


  return (
	<Typewriter
		onInit={(typewriter) => {
	  typewriter

		.typeString("Hi 🙌")
		.pauseFor(1500)
		.deleteAll()

		.typeString("I Am Mahdi Robatjazi")
		.pauseFor(2500)
		.deleteAll()

		.typeString("I do web development")
		.pauseFor(1500)
		.deleteAll()
		.start();
	}}
	options={{
	  autoStart: true,
	  loop: true,
	  cursorClassName:'d-none'

	}}
  />
  )
} 


export function IntroductionTextPersian (){

	return (
	  <Typewriter
		  onInit={(typewriter) => {
			typewriter
		  .typeString("سلام")
		  .pauseFor(1500)
		  .deleteAll()
  
		  .typeString("مهدی رباط جزی هستم")
		  .pauseFor(2500)
		  .deleteAll()
  
		  .typeString("طراح و توسعه دهنده وب")
		  .pauseFor(1500)
		  .deleteAll()
  
		  .start(); 
	  }}
	  options={{
		autoStart: true,
		loop: true,
	
		cursorClassName:'d-none'

	  }}
	/>
	)
  } 