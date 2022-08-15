import React from 'react'

export const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 '>
                    <p className='text-4xl font-bold inline border-b-4 border-green-600'>About</p>
                </div>
                <div>

                </div>
                
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div>
                        <p className='sm:text-right text-4xl font-bold'>
                            Hi. I'm Jobair, nice to meet you. Please take a look around.
                        </p>
                    </div>
                    <div>
                        <p >
                            I am passionate about learning and building good software which improves my surrounding.
                            I can get things done. Interested in blockchain and smart contract. Love to travel. How about a discussion about your software needs over a tea.
                            I would like to hear and tell some stories. 
                        </p>
                    </div>

            </div>
        </div>
    </div>
  )
}
