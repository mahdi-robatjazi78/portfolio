import React from 'react'
import Typewriter from "typewriter-effect";
import useScrollPosition from '../../utils/hooks/useScrollPosition';

export function IntroductionTextEnglish  () {

	const scrollPosition = useScrollPosition()

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
	//   wrapperClassName: scrollPosition <= 370 ?"Typewriter__wrapper": "Typewriter__wrapper",
	  cursorClassName:'d-none'

	}}
  />
  )
} 


export function IntroductionTextPersian (){
	
	const scrollPosition = useScrollPosition()
	return (
	  <Typewriter
		  onInit={(typewriter) => {
		typewriter
  
		  .typeString("سلام به همگی")
		  .pauseFor(1500)
		  .deleteAll()
  
		  .typeString("مهدی رباط جزی هستم")
		  .pauseFor(2500)
		  .deleteAll()
  
		  .typeString("طراح و توسعه دهنده وب")
		  .pauseFor(1500)
		  .deleteAll()
  
		  .typeString("فرانت اند سطح متوسط")
		  .pauseFor(1500)
		  .deleteAll() 
		  .start();
	  }}
	  options={{
		autoStart: true,
		loop: true,
		wrapperClassName: scrollPosition <= 370 ? "Typewriter__wrapper wrapper-type-writer-persian" : "Typewriter__wrapper",
		cursorClassName:'d-none'

	  }}
	/>
	)
  } 