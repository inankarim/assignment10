import React from 'react';

const Footer = () => {
    return (
        <div className='mt-40'>
            <footer className="footer bg-neutral text-neutral-content p-9">
                <div className='text-center mx-auto'>
                <h1 className='text-4xl ml-20'>Gadget Haven</h1>
                <p className='text-xl'>Leading the way in cutting edge technology</p>

                </div>
            </footer>
            <footer className="footer bg-neutral text-neutral-content p-10">
            <hr class="border-t border-grey-400 w-full my-1"/>
            </footer>
            <footer className="footer bg-neutral text-neutral-content p-10 ">
                <nav className='ml-7'>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className='ml-7'>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className='ml-7'>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer></div>
    );
};

export default Footer;