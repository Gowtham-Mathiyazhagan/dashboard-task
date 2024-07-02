import React from 'react'
import '../assets/css/viewresource.css'
import { useToggle } from './ContextProvider';
const ViweResource = () => {
	const toggleVal = useToggle();
  return (
	<div className="viewresource-container"
	style={
        toggleVal.toggle
          ? { width: "calc(100% - 14rem)", float: "right" }
          : null
      }
	>
<div className="table">
	<div className="input-group">
		<input type="text" placeholder='Text' />
		<input type="text" placeholder='Text' />
		<input type="text" placeholder='Text' />
		<input type="text" placeholder='Text' />
	</div>
	<div className="t-head">
		<div className="head"><h4>emp</h4></div>
		<div className="head"><h4>name</h4></div>
		<div className="head"><h4>app</h4></div>
		<div className="head"><h4>rk</h4></div>
		<div className="head"><h4>rt</h4></div>
		<div className="head"><h4>as</h4></div>
		<div className="head"><h4>ab</h4></div>
		<div className="head"><h4>cr</h4></div>
		<div className="head"><h4>m</h4></div>
		<div className="head"><h4>mv</h4></div>
		<div className="head"><h4>view</h4></div>
		<div className="head"><h4>rewrite</h4></div>
	</div>
	<div className="t-data">
		<div className="data">asdad</div>
		<div className="data">adad</div>
		<div className="data">adad</div>
		<div className="data">adad</div>
		<div className="data">adad</div>
		<div className="data">adad</div>
		<div className="data">ada</div>
		<div className="data">ada</div>
		<div className="data">ada</div>
		<div className="data">ada</div>
		<div className="data"><i className='bi bi-eye'></i></div>
		<div className="data"><i className='bi bi-pen'></i></div>
	</div>
	<div className="t-data">
		<div className="data">asdad</div>
		<div className="data">adad</div>
		<div className="data">adad</div>
		<div className="data">adad</div>
		<div className="data">adad</div>
		<div className="data">adad</div>
		<div className="data">ada</div>
		<div className="data">ada</div>
		<div className="data">ada</div>
		<div className="data">ada</div>
		<div className="data"><i className='bi bi-eye'></i></div>
		<div className="data"><i className='bi bi-pen'></i></div>
	</div>
	<div className="t-data">
		<div className="data">asdad</div>
		<div className="data">adad</div>
		<div className="data">adad</div>
		<div className="data">adad</div>
		<div className="data">adad</div>
		<div className="data">adad</div>
		<div className="data">ada</div>
		<div className="data">ada</div>
		<div className="data">ada</div>
		<div className="data">ada</div>
		<div className="data"><i className='bi bi-eye'></i></div>
		<div className="data"><i className='bi bi-pen'></i></div>
	</div>
	<div className="t-data">
		<div className="data">asdad</div>
		<div className="data">adad</div>
		<div className="data">adad</div>
		<div className="data">adad</div>
		<div className="data">adad</div>
		<div className="data">adad</div>
		<div className="data">ada</div>
		<div className="data">ada</div>
		<div className="data">ada</div>
		<div className="data">ada</div>
		<div className="data"><i className='bi bi-eye'></i></div>
		<div className="data"><i className='bi bi-pen'></i></div>
	</div>
</div>
	</div>
  )
}

export default ViweResource