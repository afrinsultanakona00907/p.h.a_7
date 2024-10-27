import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black h-full w-full mt-5'>
         <div className='pt-20 flex flex-col items-center justify-center text-center'>
         <img src="https://i.ibb.co.com/WFBg9kj/logo-footer.png" alt="" className='outline-dashed p-4' />
         </div>
         <div className='ml-10 mt-20 pb-6 flex justify-between mr-10 items-center'>
            <div>
            <h3 className='text-white font-semibold text-lg'>About Us</h3>
            <p className='text-white opacity-[50%] text-base'>We are a passionate teams <br /> dedicate to providing the good <br /> services to our customer.</p>
            </div>
            <div>
                <h3 className='text-white font-semibold text-lg'> Links</h3>
                <ul className='grid grid-cols-1 text-white opacity-[50%] text-base'>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contacts</li>
                 
                </ul>
            </div>
            <div>
                <h3 className='text-white font-semibold text-lg'>Subscribe</h3>
                <p className=' text-white opacity-[50%] text-base'>Subscribe to our newsletter for the <br /> latest updates.</p>
                <form className="flex justify-center items-center gap-4 mt-3">
                    <input
                        type="email"
                        placeholder="Enter your mail"
                        className="w-full max-w-xs p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-gradient-to-r from-yellow-300 to-orange-400 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition">
                        Subscribe
                    </button>
                    </form>
            </div>
         </div>
         <hr className="border-gray-800" />
			<p className="text-gray-500 text-center py-6">
				Copyright © {new Date().getFullYear()} - All right reserved by{' '}
				<span className="font-bold text-lime-400">afrin sultana kona</span>
			</p>

        </div>
    );
};

export default Footer;