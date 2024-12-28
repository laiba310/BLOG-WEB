import Image from "next/image";
import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";


const Contact = () => {
    return (
        <div>
            <Header />
            <div className="container max-w-[600px] mx-[auto] my-32 p-0 rounded-[10px]">
                <h1 className="title text-center text-[2rem] mb-8">Contact us.....</h1>
                <form className="form flex flex-col gap-[15px] mb-16">
                    <div className="te-in flex gap-[30px] w-full">
                        <input type="text" className="input border-none [border-bottom:1px_solid_#000] outline-[none] w-full mb-12 " placeholder="Name" required />
                        <input type="email" className="input border-none [border-bottom:1px_solid_#000] outline-[none] w-full mb-12" placeholder="Email" required />
                    </div>
                    <div className="te-in">
                        <input type="text" className="input border-none [border-bottom:1px_solid_#000] outline-[none] w-full mb-12" placeholder="Subject" required />
                        <input type="text" className="input border-none [border-bottom:1px_solid_#000] outline-[none] w-full mb-12" placeholder="Phone" required />
                    </div>
                    <textarea className="textarea border-none [border-bottom:1px_solid_#000] outline-[none] w-full mb-12" placeholder="Message" required></textarea>
                    <div className="but">
                        <button type="submit" className="butt px-[30px] py-[15px] bg-[#100000] text-[#faf7f7] border-none rounded-[18px] cursor-pointer [transition:transform_0.2s_ease] w-[220.14px] ml-[auto] mr-[auto] my-[0] text-center hover:transform scale-105  ">Send Now</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Contact; // Ensure this is the default export