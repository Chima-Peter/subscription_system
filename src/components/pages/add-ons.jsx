import { useEffect, useState } from 'react';
import { Next, Prev } from '../utils/buttons';
import Desktop from '../utils/desktop_bar';
import AddOnBlock from '../utils/addonblock';
import { useNavigate } from 'react-router-dom';
import MediaQuery from 'react-responsive';

function AddOn() {
   const navigate = useNavigate()
  const [plan, setPlan] = useState('');
  const [error, setError] = useState(false)
  const [checkBox, setCheckBox] = useState({
    val1: false,
    val2: false,
    val3: false,
  });
  const [priceBox, setPriceBox] = useState({
    val1: '',
    val2: '',
    val3: '',
  });

  useEffect(() => {
   //  const storedCheckBox = JSON.parse(sessionStorage.getItem('addOn'));
   //  if (storedCheckBox) {
   //    setCheckBox(storedCheckBox);
   //  }
   if (JSON.parse(sessionStorage.getItem('planText')))
   {
      const newData = JSON.parse(sessionStorage.getItem('planText')).split(' ')[3];
      setPlan(newData);
   }
    
  }, []);

  const handleChange = (event) => {
   const { value } = event.target;
   setError(false)
   const newData = priceBox
   !checkBox[value] ? priceBox[event.target.value] = event.target.placeholder: priceBox[event.target.value] = ''
   setPriceBox(newData)
   setCheckBox({ ...checkBox, [value]: !checkBox[value] }); 
  };

  const handleAddOn = (event) => {
    event.preventDefault();
    if (!checkBox.val1 && !checkBox.val2 && !checkBox.val3) {
      setError(true)
    } else {
      setError(false)
      sessionStorage.setItem('addOn', JSON.stringify(priceBox));
      navigate('/summary')
    }
  };

  return (
    <MediaQuery minWidth={900}>
      <main className='main font-body'>
         <section className='section'>
         <Desktop link3={true} />
         <div className="mx-auto mt-7 text-[rgb(2,41,90)]">
            <div>
               <h1 className="mb-1  font-extrabold text-3xl">
                  Pick add-ons
               </h1>
               <p className="text-sm">
                  Add-ons help enhance your gaming experience
               </p>
            </div>
            <div className='mt-10 flex flex-col'>
               <form onSubmit={handleAddOn} noValidate autoComplete='on' className='flex flex-col gap-3'>
               {Object.keys(checkBox).map((key) => (
                  <div
                     key={key}
                     className={`flex gap-4 cursor-pointer items-center rounded-lg text-[hsl(213,96%,18%)] font-body w-full p-4 border hover:border-[hsl(243,100%,62%)] ${
                     checkBox[key] ? 'border border-[hsl(243,100%,62%)] bg-[hsl(206,94%,87%)] rounded-lg bg-clip-padding' : error ? 'border-red-500' : 'border-[hsl(229,24%,87%)]'
                     }`}
                  >
                     <input
                     defaultChecked={checkBox[key]}
                     onChange={handleChange}
                     value={key}
                     type="checkbox"
                     name={key}
                     placeholder={
                           plan === 'mo' ? 
                              key === 'val1'
                                 ? `1`
                              : key === 'val2'
                                 ? `2`
                                 : `2`
                           : 
                              key === 'val1'
                                 ? `10`
                              : key === 'val2'
                                 ? `20`
                                 : `20`
                        }
                     id={key}
                     className='cursor-pointer'
                     />
                     <label className='cursor-pointer' htmlFor={key}>
                     <AddOnBlock
                        header={key === 'val1' ? 'Online service' : key === 'val2' ? 'Larger storage' : 'Customisable profile'}
                        paragraph={
                           key === 'val1'
                           ? 'Access to multiplayer games'
                           : key === 'val2'
                              ? 'Extra 1TB of cloud save'
                              : 'Customise theme on your profile'
                        }
                        pricing={
                           plan === 'mo' ?
                              key === 'val1'
                              ? `+$1/${plan}`
                              : key === 'val2'
                                 ? `+$2/${plan}`
                                 : `+$2/${plan}`
                           : 
                              key === 'val1'
                              ? `+$10/${plan}`
                              : key === 'val2'
                                 ? `+$20/${plan}`
                                 : `+$20/${plan}`
                        }
                     />
                     </label>
                  </div>
               ))}
               <div className='mt-[1.8rem] flex justify-between'>
                  <Prev back={'/plan'}/>
                  <Next />
               </div>
               </form>
            </div>
         </div>
         </section>
      </main>
    </MediaQuery>
  );
}

export default AddOn;
