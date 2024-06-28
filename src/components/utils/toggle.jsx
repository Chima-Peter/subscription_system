import Icon from '@mdi/react';
import { mdiToggleSwitch } from '@mdi/js';
import { mdiToggleSwitchOff } from '@mdi/js';
import { useContext, useState } from 'react';
import { toggleBar } from '../pages/plan';

function Toggle() {
   const [toggle, setToggle] = useState(true)
   const {setShowToggle, showToggle} = useContext(toggleBar)

   const changeToggle = () => {
      setToggle(!toggle)
      setShowToggle(!showToggle)
   }
  return (
    <div className='mt-8 rounded-md flex w-full bg-[hsl(229,24%,87%)] text-[13px] font-extrabold p-2 justify-center items-center gap-2 '>
      <p className={`${toggle ? 'text-[hsl(213,96%,18%)]' : 'text-[hsl(231,11%,63%)]'}`}>
         Monthly
      </p>
      {
         toggle && <Icon path={mdiToggleSwitchOff} size={1.5} onClick={changeToggle} className='cursor-pointer' />
      }
      {
         !toggle && <Icon path={mdiToggleSwitch} size={1.5} onClick={changeToggle} className='cursor-pointer' />
      }
      <p className={`${toggle ? 'text-[hsl(231,11%,63%)]' : 'text-[hsl(213,96%,18%)]'}`}>
         Yearly
      </p>
    </div>
  )
}

export default Toggle
