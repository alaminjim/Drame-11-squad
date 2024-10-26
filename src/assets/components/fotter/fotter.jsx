import footerLogo from "../../image/logo-footer.png";

const Footer = () => {
  return (
    <div className="pt-36 ">
      <div className="">
        <div className="h-[590px] bg-[#06091A] rounded-2xl">
          <div className="pt-12 pl-[640px]">
            <img src={footerLogo} alt="" />
          </div>
          <div className="flex justify-evenly pt-20">
            <div>
              <h1 className="text-white text-lg font-bold pb-4">About Us</h1>
              <div className="text-[#ffffff56] pb-4">
                <a href="">We are a passionate team</a>
                <br></br>
                <a href="">dedicated to providing the best</a>
                <br></br>
                <a href=""> services to our customers.</a>
              </div>
            </div>
            <div>
              <h1 className="text-white text-lg font-bold pb-4">Quick Link</h1>
              <ol className="text-[#ffffff56]">
                <li className="pb-2">Home</li>
                <li className="pb-2">Service</li>
                <li className="pb-2">About</li>
                <li className="pb-2">Contact</li>
              </ol>
            </div>
            <div>
              <h1 className="text-white text-lg font-bold pb-4">Subscribe</h1>
              <p className="text-[#ffffff56]">
                Subscribe to our newsletter for the<br></br>latest updates.
              </p>
              <div className="pt-7">
                <input
                  className="w-[240px] h-[46px] rounded-lg pl-3"
                  type="text"
                  placeholder="Enter Your Email"
                />{" "}
                <button className="btn btn-warning w-[145px]">Subscribe</button>
              </div>
            </div>
          </div>
          <hr className="mt-12 text-[#ffffff56]"></hr>
          <p className="text-center mt-9 text-white">
            @2024 Your Company All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
