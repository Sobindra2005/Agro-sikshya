import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <>
    <div className='flex items-center justify-between p-2 fixed top-0 left-10'>
        <div className='flex justify-start items-center '>
        <svg width="40" height="43" viewBox="0 0 40 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.6144 23.8404C25.4724 11.1837 9.33565 2.29999 9.33565 2.29999C9.33565 2.29999 -0.262843 18.1947 3.24238 30.7408C3.24238 30.7592 3.24238 30.7869 3.25146 30.8053C3.26054 30.8514 3.27871 30.8884 3.29686 30.9345C3.34227 31.0913 3.37859 31.2389 3.424 31.3957H3.44216C5.55801 38.1484 12.5321 42.0968 19.3428 40.2425C26.1534 38.3883 30.258 31.4234 28.7597 24.5046H28.7778C28.7415 24.3478 28.7052 24.191 28.6598 24.0341C28.6507 23.988 28.6416 23.9419 28.6326 23.905C28.6326 23.8865 28.6144 23.8681 28.6144 23.8404Z" fill="#FFD317"/>
<path d="M37.1363 30.7408C40.6415 18.1947 31.043 2.29999 31.043 2.29999C31.043 2.29999 14.9063 11.1837 11.7643 23.8404C11.7643 23.8589 11.7461 23.8773 11.7461 23.905C11.737 23.9511 11.7279 23.9972 11.7189 24.0341C11.6825 24.191 11.6371 24.3386 11.6008 24.4954H11.619C10.1206 31.4234 14.2252 38.3883 21.0359 40.2425C27.8465 42.0968 34.8297 38.1484 36.9365 31.3957H36.9547C37 31.2481 37.0364 31.0913 37.0818 30.9437C37.0908 30.8976 37.109 30.8607 37.1272 30.8145C37.1272 30.7961 37.1272 30.7685 37.1363 30.75V30.7408Z" fill="#62CD14"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.187 10.4423C23.859 14.0198 27.364 18.5972 28.6595 23.816C28.6595 23.8312 28.665 23.8437 28.67 23.8549C28.674 23.864 28.6777 23.8723 28.6777 23.8806C28.6868 23.9175 28.6958 23.9636 28.7049 24.0097C28.7503 24.1666 28.7866 24.3234 28.823 24.4802L28.8048 24.4802C30.2436 31.124 26.516 37.8104 20.187 39.9732C13.8579 37.8103 10.1303 31.1236 11.5691 24.471H11.5509C11.5691 24.3926 11.5895 24.3165 11.61 24.2404C11.6304 24.1643 11.6508 24.0882 11.669 24.0097C11.6781 23.9728 11.6872 23.9267 11.6962 23.8806C11.6962 23.8654 11.7018 23.8529 11.7067 23.8417C11.7107 23.8326 11.7144 23.8243 11.7144 23.816C13.01 18.5972 16.5149 14.0198 20.187 10.4423Z" fill="#6D31ED" fill-opacity="0.2"/>
</svg>
<p className='font-bold text-xl text-white'>Agro-sikshya</p>
        </div>
        <div>
             <ul className='space-x-24 fixed top-2 right-10  p-2  ml-10'>
                <Link to='/' className='text-primary hover:text-accent'> Home</Link>
                <Link to='/' className='text-primary hover:text-accent'> Service</Link>
                <Link to='/' className='text-primary hover:text-accent'> About Us</Link>
                <Link to='/' className='text-primary hover:text-accent'> Contact</Link>
                <Link to='/login'  className='text-primary hover:text-accent'> Login</Link>
            </ul> 
        </div>
    </div>
    </>
  )
}
