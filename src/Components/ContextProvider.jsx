import React, {createContext, useContext, useState} from 'react'


const ToggleProvider = createContext(null)

const ContextProvider = ({children}) => {
	const [toggle, setToggle] = useState(false);


  return (
<ToggleProvider.Provider value={{toggle,setToggle}}>
{children}
</ToggleProvider.Provider>
)
}

const useToggle = ()=>{
	return useContext(ToggleProvider)
}

export  {ContextProvider,useToggle}