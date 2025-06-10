import React from 'react'

const Education = () => {
  return (
    <div className='w-[80vw] md:w-[70vw] mx-auto '>
        <div className='text-[30px] md:text-[60px] font-bold py-8'>
            Education
        </div>
        <div className='border-l flex flex-col gap-8 relative'>
            <div className='h-[130px] w-[260px] md:w-[350px] border-1 border-gray-900 bg-gray-700 rounded-xl ml-10 p-3 md:p-4  flex flex-col md:gap-1 transition-all duration-300  hover:shadow-xl hover:shadow-blue-600/40 hover:border-gray-600'>
                <div className='text-md md:text-xl text-gray-400'>2023-2027</div>
                <div className='text-[19px] md:text-2xl'>Bachelor of Technology (CSE)</div>
                <div>CGPA:8.28(till 3rd Sem)</div>
            </div>
            <div className='h-[130px] w-[260px] md:w-[350px] border border-gray-900 bg-gray-700 rounded-xl ml-10 p-4  flex flex-col md:gap-1 transition-all duration-300  hover:shadow-xl hover:shadow-blue-600/40 hover:border-gray-600'>
                <div className='text-md md:text-xl text-gray-400'>2020-2022</div>
                <div className='text-[22px] md:text-2xl'>Higher Secondary</div>
                <div>Percentage:86</div>
            </div>
            <div className='h-[130px] w-[260px] md:w-[350px] border border-gray-900 bg-gray-700 rounded-xl ml-10 p-4  flex flex-col md:gap-1 transition-all duration-300  hover:shadow-xl hover:shadow-blue-600/40 hover:border-gray-600'>
                <div className='text-md md:text-xl text-gray-400'>2020</div>
                <div className='text-[22px] md:text-2xl'>Metriculation</div>
                <div>Percentage:89.33</div>
            </div>
            <div className='h-4 w-4 rounded-full bg-white absolute top-0 -left-2'></div>
            <div className='h-4 w-4 rounded-full bg-white absolute top-40 -left-2'></div>
            <div className='h-4 w-4 rounded-full bg-white absolute top-81 -left-2'></div>
        </div>
    </div>
  )
}

export default Education