import React from 'react'
import footerlogo from "../../assets/footer_assets/paperrabbitlogo.png";
import linkedin from '../../assets/footer_assets/linkedin.svg';
import instagram from '../../assets/footer_assets/instagram.svg';
import facebook from '../../assets/footer_assets/facebook.svg';
import pintrist  from '../../assets/footer_assets/pintrist.svg';
import twitter from "../../assets/footer_assets/twitter.svg";
import youtube from "../../assets/footer_assets/youtube.svg";

function Footer() {
  return (
    <div className="w-full h-[550px] relative bg-neutral-100 backdrop-blur-[20px] text-center">
    <img  className='w-250 h-250 flex-shrink-0' src={footerlogo} alt=''/>
 
  <div className="w-[98px] h-[190px] left-[359px] top-[86px] absolute">
      <div className="left-0 top-0 absolute text-black text-[32px] font-normal font-['Katibeh'] leading-loose">Company   </div>
      <div className="left-[7px] top-[54px] absolute text-black text-sm font-normal font-['Inter'] leading-none">About Us</div>
      <div className="left-[7px] top-[84px] absolute text-black text-sm font-normal font-['Inter'] leading-none">Career</div>
      <div className="left-[7px] top-[114px] absolute text-black text-sm font-normal font-['Inter'] leading-none">Team</div>
      <div className="left-[7px] top-[144px] absolute text-black text-sm font-normal font-['Inter'] leading-none">Resources</div>
      <div className="left-[7px] top-[174px] absolute text-black text-sm font-normal font-['Inter'] leading-none">FAQ</div>
  </div>
  <div className="w-[117px] h-[190px] left-[599px] top-[86px] absolute">
      <div className="left-0 top-0 absolute text-black text-[32px] font-normal font-['Katibeh'] leading-loose">Policies </div>
      <div className="left-0 top-[54px] absolute text-black text-sm font-normal font-['Inter'] leading-none">Support</div>
      <div className="left-0 top-[84px] absolute text-black text-sm font-normal font-['Inter'] leading-none">Privacy Policies</div>
      <div className="left-0 top-[114px] absolute text-black text-sm font-normal font-['Inter'] leading-none">Service Policies</div>
      <div className="left-0 top-[144px] absolute text-black text-sm font-normal font-['Inter'] leading-none">Affiliation Policies</div>
      <div className="left-0 top-[174px] absolute text-black text-sm font-normal font-['Inter'] leading-none">T&C</div>
  </div>
  <div className="w-[101px] h-[190px] left-[837px] top-[86px] absolute">
      <div className="left-0 top-0 absolute text-black text-[32px] font-normal font-['Katibeh'] leading-loose">Explore</div>
      <div className="left-0 top-[54px] absolute text-black text-sm font-normal font-['Inter'] leading-none">Blog</div>
      <div className="left-0 top-[84px] absolute text-black text-sm font-normal font-['Inter'] leading-none">Brand Glossary</div>
      <div className="left-0 top-[114px] absolute text-black text-sm font-normal font-['Inter'] leading-none">Case Study</div>
      <div className="left-0 top-[144px] absolute text-black text-sm font-normal font-['Inter'] leading-none">Portfolio</div>
      <div className="left-0 top-[174px] absolute text-black text-sm font-normal font-['Inter'] leading-none">Podcaste</div>
  </div>
  <div className="w-[341px] h-[168px] left-[1079px] top-[86px] absolute">
      <div className="w-[340px] h-[50px] pl-[17px] pr-[117px] py-[17px] left-[1px] top-[54px] absolute bg-gray-50 bg-opacity-20 rounded-[10px] border border-black backdrop-blur-[20px] justify-start items-center inline-flex">
          <div className="w-[206px] text-stone-400 text-sm font-normal font-['Inter'] leading-none">Enter your Email to Subscribe</div>
      </div>
      <div className="w-[340px] h-10 left-[1px] top-[128px] absolute bg-zinc-950 rounded-[10px]" />
      <div className="left-0 top-0 absolute text-black text-[32px] font-normal font-['Katibeh'] leading-loose">News Letter</div>
      <div className="left-[136px] top-[133px] absolute text-white text-sm font-bold font-['Inter'] leading-[30px]">Subscribe</div>
  </div>
  <div className="absolute w-[274px] h-[30px] top-[350px] left-[573px]">
      <img className="!absolute !w-[30px] !h-[30px] !top-0 !left-0" src={linkedin} alt='linkedin'/>
      <img className="!absolute !w-[30px] !h-[30px] !top-0 !left-[50px]" src={instagram} alt='instagram'/>
      <img className="!absolute !w-[30px] !h-[30px] !top-0 !left-[100px]" src={pintrist} alt='pintrist'/>
      <img className="!absolute !w-[30px] !h-[30px] !top-0 !left-[150px]" src={facebook} alt='facebook'/>
      <img className="!absolute !w-[24px] !h-[24px] !top-[3px] !left-[200px]" src={twitter} alt='twitter'/>
      <img className="!absolute !w-[30px] !h-[30px] !top-0 !left-[244px]" src={youtube} alt='youtube'/>
    </div>
  <div className="left-[611px] top-[400px] absolute text-black text-sm font-semibold font-['Inter'] leading-none">© </div>
  <div className="left-[638px] top-[400px] absolute text-black text-sm font-semibold font-['Inter'] leading-none">All Right Reserved ; 2023</div>
  <div className="w-[220px] h-[220px] left-0 top-[62px] absolute">
      <div className="w-[220px] h-[220px] left-0 top-0 absolute">
          <div className="w-[142.58px] h-[179.56px] left-[38.71px] top-[20.22px] absolute">
              <div className="w-[83.93px] h-[135.49px] left-[29.32px] top-0 absolute">
              </div>
              <div className="w-[17.19px] h-[21.82px] left-[41.07px] top-[39.18px] absolute">
                  <div className="w-[13.60px] h-[19.68px] left-[3.59px] top-[2.14px] absolute">
                  </div>
              </div>
              <div className="w-[17.18px] h-[21.82px] left-[84.38px] top-[39.17px] absolute">
                  <div className="w-[13.60px] h-[19.67px] left-0 top-[2.14px] absolute">
                  </div>
              </div>
          </div>
      </div>
  </div>
  </div>

  )
}

export default Footer;