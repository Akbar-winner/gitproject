import React from 'react'
import companies from '../assets/companies.svg'

const Section1 = () => {
    return (
        <>
            <section>
                <div className="container mx-auto max-w-full w-[85%]">
                    <img className='mt-[70px]' src={companies} alt="" />
                </div>
            </section>
        </>
    )
}

export default Section1