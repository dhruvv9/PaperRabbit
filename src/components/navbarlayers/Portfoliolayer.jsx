import React from 'react';
import portfolioimg from '../../assets/portfolio.jpg';
import img1 from '../../assets/1.jpg';
import sampleimg from '../../assets/sample1.jpg';
import clientpic from '../../assets/client pic.jpg';

function Portfoliolayer() {
    return (
        <div className='w-full h-[1500rem] flex flex-items-center relative bg-neutral-100'>


            <img className="w-[full]  lg:w-full  left-0 top-0 absolute" src={portfolioimg} alt='' ></img>

            <div className=' flex flex-col justify-center items-center h-[370rem] mac:w-[100%] lg:w-[70%] mt-[65rem]  w-screen lg:ml-[25rem] '>

                <div className='flex flex-row w-full mt-[20rem] h-[4.5%]'>

                    <div className=' w-[15%] h-[full] p-3 relative'>


                        <img className='relative rounded-[300px] ' src={img1} alt='' />

                        <div className=' text-black lg:text-2xl relative  font-bold font-[Inter] '>Company Name</div>
                        <div className=' text-black lg:text-2xl relative  font-bold font-[Inter] '>Domain</div>

                    </div>

                    <div className='lg:w-full  relative  text-black flex lg:flex-justify-center items-center sm:p-8 lg:text-2xl  font-bold font-[Inter]'> Perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde omnis undemns omnis undemns<br />perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde omnis undemns omnis undemns<br />perspiciatis unde omnis perspiciatis unde omnis perspiciatis unde omnis undemns omnis undemns </div>




                </div>


                <div className="  relative text-black mt-[10rem] font-bold  font-['Inter'] ">
                    Process(icons)</div>

                    <div className='flex  gap-3 flex-justify-center items-center relative '></div>
                <div className='w-[50%] h-[5%] flex flex-row mt-[2rem] relative '>
                    <div className='w-full h-full flex  flex-col items-center relative'>
                        <img className='relative rounded-[300px]' src={img1} alt='' />
                        <div className='mt-[1rem] text-black text-2xl relative  font-bold font-[Inter] '>Domain</div>
                    </div>

                    <div className='w-full h-full flex  flex-col items-center relative'>
                        <img className='relative rounded-[300px]' src={img1} alt='' />
                        <div className='mt-[1rem] text-black text-2xl relative  font-bold font-[Inter] '>Domain</div>
                    </div>

                    <div className='w-full h-full flex  flex-col items-center relative'>
                        <img className='relative rounded-[300px]' src={img1} alt='' />
                        <div className='mt-[1rem] text-black text-2xl relative  font-bold font-[Inter] '>Domain</div>
                    </div>

                  

                    <div className='w-full h-full flex  flex-col items-center relative'>
                        <img className='relative rounded-[300px]' src={img1} alt='' />
                        <div className='mt-[1rem] text-black text-2xl relative  font-bold font-[Inter] '>Domain</div>
                    </div>


                </div>


             


                <div className='w-full h-[full] flex flex-row-reverse sm:flex-col relative '>
                    <img className="lg:w-[21rem] sm:w-[21rem] sm:h-full  relative rounded-[20px]" src="https://via.placeholder.com/340x388" />

                    <div className="w-full h-full relative p-[1rem] text-black text-sm font-normal font-['Inter'] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. <br />Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. <br />Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. <br />Curabitur tortor. <br /><br /><br /><br /><br /></div>


                </div>


                <div className="  relative text-black mt-[10rem] font-bold  lg:text-[32px] font-['Inter'] ">
                    Packages</div>

                <div className="w-full h-[full] p-[2rem] relative">
                    <span className="text-black text-sm font-normal font-['Inter'] leading-normal">Lorem ipsum dolor sit amet, consectetur </span><span className="text-black text-base font-bold font-['Inter'] leading-normal">adipiscing </span>
                    <span className="text-black text-sm font-normal font-['Inter'] leading-normal">elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh </span><span className="text-black text-base font-bold font-['Inter'] leading-normal">elementum</span><span className="text-black text-sm font-normal font-['Inter'] leading-normal"> imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed </span><span className="text-black text-base font-bold font-['Inter'] leading-normal">augue</span><span className="text-black text-sm font-normal font-['Inter'] leading-normal"> semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. className </span><span className="text-black text-base font-bold font-['Inter'] leading-normal">aptent</span>
                    <span className="text-black text-sm font-normal font-['Inter'] leading-normal"> taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. </span>
                    <span className="text-black text-base font-bold font-['Inter'] leading-normal">Pellentesque</span><span className="text-black text-sm font-normal font-['Inter'] leading-normal"> nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed </span><span className="text-black text-base font-bold font-['Inter'] leading-normal">cursus</span><span className="text-black text-sm font-normal font-['Inter'] leading-normal"> ante dapibus diam. Sed nisi. Nulla quis sem at nibh </span><span className="text-black text-base font-bold font-['Inter'] leading-normal">elementum imperdiet</span>
                    <span className="text-black text-sm font-normal font-['Inter'] leading-normal">. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos</span><span className="text-black text-base font-bold font-['Inter'] leading-normal"> himenaeos</span><span className="text-black text-sm font-normal font-['Inter'] leading-normal">. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. </span><span className="text-black text-base font-bold font-['Inter'] leading-normal">Curabitur</span><span className="text-black text-sm font-normal font-['Inter'] leading-normal"> tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.</span><span className="text-black text-sm font-normal font-['Inter'] leading-normal"> </span></div>


                    <div className='w-full h-[full] flex flex-row sm:flex-col relative '>
                    <img className="lg:w-[21rem] sm:w-[21rem] h-[22rem]  relative rounded-[20px]" src="https://via.placeholder.com/340x388" />

                    <div className="w-full h-full relative p-[1rem] text-black text-sm font-normal font-['Inter'] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. <br />Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. <br />Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. <br />Curabitur tortor. <br /><br /><br /><br /><br /></div>


                </div>


                <div className='w-full h-[full] flex flex-row-reverse sm:flex-col relative '>
                    <img className="lg:w-[21rem] sm:w-[21rem] h-[22rem]  relative rounded-[20px]" src="https://via.placeholder.com/340x388" />

                    <div className="w-full h-full relative p-[1rem] text-black text-sm font-normal font-['Inter'] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. <br />Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. <br />Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. <br />Curabitur tortor. <br /><br /><br /><br /><br /></div>


                </div>


                <div className="  relative text-black mt-[10rem] font-bold  lg:text-[32px] font-['Inter'] ">
                    Mockups</div>

                <div className='w-full lg:h-[7%] h-[full] p-[4rem] flex gap-[2rem] lg:flex-row flex-col relative'>

                    <img className="w-[20%] h-[40%] mt-[10rem]  relative" src="" />

                    <img className="w-[40%] h-[80%]  relative" src="" />

                    <img className="w-[10%] h-[40%] mt-[10rem] relative" src="" />

                    <img className="w-[5%] h-[40%] mt-[10rem] relative" src="" />


                </div>



                <div className="  relative text-black mt-[10rem] font-bold  lg:text-[32px] font-['Inter'] ">
                    Client Testmony</div>


                <div className='w-full lg:h-[9%] h-full relative flex lg:flex-row flex-col p-[2rem] mt-[3rem] gap-[1rem] '>


                    <img className="lg:w-[30%] w-[50%] h-[full]   relative rounded-[20px]" src={clientpic} alt='' />

                
        <div className="lg:w-[30%] w-full h-full relative bg-gray-50 bg-opacity-70  rounded-[20px] p-[2rem] backdrop-blur-[20px] " >
<div className='relative w-full p-[1rem] flex flex-row'>
    <div className='text-black text-xs font-bold font-[Inter]'>Client Name - </div> <div className='text-black text-xs font-normal font-[Inter]'> Lorem ipsum</div></div>

    <div className='relative w-full p-[1rem] flex flex-row'>
    <div className='text-black text-xs font-bold font-[Inter]'>Client Name - </div> <div className='text-black text-xs font-normal font-[Inter]'> Lorem ipsum</div>
      
       </div>

        <div className="w-full  relative  text-black text-sm font-normal font-['Inter'] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.t nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad  Sed dignissim lacinia nunc Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. <br/></div>
</div>




<div className="lg:w-[40%] w-[20%] fullrelative">
<div className="w-full   relative bg-gray-50 bg-opacity-70 rounded-[20px] backdrop-blur-[20px]" >
<div className="left-[50px] top-[81.29px] absolute origin-top-left rotate-[-22.82deg]  text-black text-[32px] font-bold font-['Inter'] ">lorum1</div>
<div className="left-[258px] top-[154.72px] absolute  origin-top-left rotate-[-1.08deg]  text-black text-[32px] font-bold font-['Inter'] ">lorum2</div>
<div className="left-[419px] top-[284.72px] absolute  origin-top-left rotate-[-1.08deg] text-black text-[32px] font-bold font-['Inter'] ">lorum3</div>
<div className="left-[201px] top-[259.72px] absolute  origin-top-left rotate-[-1.08deg] text-black text-[32px] font-bold font-['Inter'] ">lorum4</div>
<div className="left-[67px] top-[146.72px] absolute  origin-top-left rotate-[-1.08deg]  text-black text-[32px] font-bold font-['Inter'] ">lorum5</div>
<div className="left-[498px] top-[167.72px] absolute  origin-top-left rotate-[-1.08deg]  text-black text-[32px] font-bold font-['Inter'] ">lorum6</div>
<div className="left-[219px] top-[59.72px] absolute  origin-top-left rotate-[-1.08deg]  text-black text-[32px] font-bold font-['Inter'] ">lorum7</div>
<div className="left-[338px] top-[215.72px] absolute  origin-top-left rotate-[-1.08deg] text-black text-[32px] font-bold font-['Inter'] ">lorum8</div>
<div className="left-[397.45px] top-[81px] absolute  origin-top-left rotate-[24.86deg] text-black text-[32px] font-bold font-['Inter'] ">lorum9</div>
<div className="left-[534.94px] top-[238.05px] absolute  origin-top-left rotate-[4.60deg]  text-black text-[32px] font-bold font-['Inter']">lorum19</div>
<div className="left-[506.18px] top-[43.73px] absolute  origin-top-left rotate-[18.96deg] text-black text-[32px] font-bold font-['Inter'] ">lorum11</div>
<div className="left-[81.45px] top-[212px] absolute  origin-top-left rotate-[24.86deg]  text-black text-[32px] font-bold font-['Inter'] ">lorum12</div>

</div>
</div>


   
                </div>

               















            </div>


        </div>








































    )
}

export default Portfoliolayer;