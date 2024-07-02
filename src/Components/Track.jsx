import React from 'react'
import { useToggle } from './ContextProvider';

const Track = () => {
	const toggleVal = useToggle();
  return (
	<div className="track-container"
	style={
		toggleVal.toggle
	  ? { width: "calc(100% - 14rem)", float: "right" }
	: null
  }
	>

	</div>
  )
}

export default Track