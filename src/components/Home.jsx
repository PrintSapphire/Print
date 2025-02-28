import React from 'react';

const Home = () => {
  return (
<div data-layer="Home" className="Home h-[5813px] bg-white flex-col justify-start items-end inline-flex">
  <div data-layer="Header" className="Header w-[1440px] h-[142px] relative bg-white  overflow-hidden">
    <img data-layer="Logo" className="Logo w-[210px] h-[60px] left-[120px] top-[41px] absolute" src="https://placehold.co/210x60" />
    <div data-layer="Navigation" className="Navigation left-[639px] top-[66px] absolute justify-start items-start gap-5 inline-flex">
      <div data-layer="Home" className="Home text-indigo-500 text-sm font-semibold font-['Sora'] leading-[14px] tracking-tight">Home</div>
      <div data-layer="About Us" className="AboutUs text-gray-700 text-sm font-semibold font-['Sora'] leading-[14px] tracking-tight">About Us</div>
      <div data-layer="Services" className="Services text-gray-700 text-sm font-semibold font-['Sora'] leading-[14px] tracking-tight">Services</div>
      <div data-layer="Projects" className="Projects text-gray-700 text-sm font-semibold font-['Sora'] leading-[14px] tracking-tight">Projects</div>
      <div data-layer="Pricing" className="Pricing text-gray-700 text-sm font-semibold font-['Sora'] leading-[14px] tracking-tight">Pricing</div>
      <div data-layer="Contact Us" className="ContactUs text-gray-700 text-sm font-semibold font-['Sora'] leading-[14px] tracking-tight">Contact Us</div>
    </div>
    <div data-layer="Button" className="Button px-[38px] py-5 left-[1160px] top-[46px] absolute bg-indigo-500 rounded-lg shadow-[0px_8px_24px_0px_rgba(108,93,212,0.25)] justify-center items-center gap-2.5 inline-flex">
      <div data-layer="Text Button" className="TextButton text-center text-violet-50 text-sm font-semibold font-['Sora'] leading-[14px]">Get Started</div>
    </div>
  </div>
  <div data-layer="1 Hero Section" className="HeroSection w-[1440px] h-[813px] relative bg-white border-t border-violet-50  overflow-hidden">
    <div data-layer="Icon Box" className="IconBox pb-11 left-[120px] top-[592px] absolute border-b border-indigo-100 justify-start items-start gap-5 inline-flex">
      <div data-layer="Icon Box 1" className="IconBox1 justify-start items-start gap-5 flex">
        <div data-svg-wrapper data-layer="Icon" className="Icon">
        <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="62" height="62" rx="8" fill="#F3F3FF"/>
        <path d="M26 30L30 21C30.7956 21 31.5587 21.3161 32.1213 21.8787C32.6839 22.4413 33 23.2044 33 24V28H38.66C38.9499 27.9967 39.2371 28.0565 39.5016 28.1752C39.7661 28.2939 40.0016 28.4687 40.1919 28.6875C40.3821 28.9063 40.5225 29.1638 40.6033 29.4423C40.6842 29.7207 40.7035 30.0134 40.66 30.3L39.28 39.3C39.2077 39.7769 38.9654 40.2116 38.5979 40.524C38.2304 40.8364 37.7623 41.0055 37.28 41H26M26 30V41M26 30H23C22.4696 30 21.9609 30.2107 21.5858 30.5858C21.2107 30.9609 21 31.4696 21 32V39C21 39.5304 21.2107 40.0391 21.5858 40.4142C21.9609 40.7893 22.4696 41 23 41H26" stroke="#8888FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
        <div data-layer="Title" className="Title flex-col justify-start items-start gap-2 inline-flex">
          <div data-layer="Heading" className="Heading w-[203px] text-gray-800 text-lg font-bold font-['Sora'] leading-[25.20px]">Best Quality</div>
          <div data-layer="Text" className="Text w-[203px] text-neutral-400 text-sm font-normal font-['DM Sans'] leading-normal">Elementum consectetur at aliquet turpis.</div>
        </div>
      </div>
      <div data-layer="Icon Box 2" className="IconBox2 justify-start items-start gap-5 flex">
        <div data-svg-wrapper data-layer="Icon" className="Icon">
        <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="62" height="62" rx="8" fill="#F3F3FF"/>
        <path d="M23 22H39C39.5304 22 40.0391 22.2107 40.4142 22.5858C40.7893 22.9609 41 23.4696 41 24V30C41 32.6522 39.9464 35.1957 38.0711 37.0711C36.1957 38.9464 33.6522 40 31 40C29.6868 40 28.3864 39.7413 27.1732 39.2388C25.9599 38.7362 24.8575 37.9997 23.9289 37.0711C22.0536 35.1957 21 32.6522 21 30V24C21 23.4696 21.2107 22.9609 21.5858 22.5858C21.9609 22.2107 22.4696 22 23 22Z" stroke="#8888FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M27 29L31 33L35 29" stroke="#8888FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
        <div data-layer="Title" className="Title flex-col justify-start items-start gap-2 inline-flex">
          <div data-layer="Heading" className="Heading w-[203px] text-gray-800 text-lg font-bold font-['Sora'] leading-[25.20px]">Secure Payment</div>
          <div data-layer="Text" className="Text w-[203px] text-neutral-400 text-sm font-normal font-['DM Sans'] leading-normal">Elementum consectetur at aliquet turpis.</div>
        </div>
      </div>
      <div data-layer="Icon Box 3" className="IconBox3 justify-start items-start gap-5 flex">
        <div data-svg-wrapper data-layer="Icon" className="Icon">
        <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="62" height="62" rx="8" fill="#F3F3FF"/>
        <g clip-path="url(#clip0_4_338)">
        <path d="M35.9277 39.6872V37.6872C35.9277 36.6263 35.5063 35.6089 34.7562 34.8588C34.006 34.1086 32.9886 33.6872 31.9277 33.6872H23.9277C22.8669 33.6872 21.8495 34.1086 21.0993 34.8588C20.3492 35.6089 19.9277 36.6263 19.9277 37.6872V39.6872" stroke="#8888FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M27.9277 29.6872C30.1369 29.6872 31.9277 27.8963 31.9277 25.6872C31.9277 23.4781 30.1369 21.6872 27.9277 21.6872C25.7186 21.6872 23.9277 23.4781 23.9277 25.6872C23.9277 27.8963 25.7186 29.6872 27.9277 29.6872Z" stroke="#8888FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M41.9277 39.6872V37.6872C41.9271 36.8009 41.6321 35.94 41.0891 35.2395C40.5461 34.5391 39.7859 34.0388 38.9277 33.8172" stroke="#8888FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M34.9277 21.8172C35.7881 22.0375 36.5508 22.5379 37.0954 23.2395C37.64 23.9411 37.9356 24.804 37.9356 25.6922C37.9356 26.5804 37.64 27.4433 37.0954 28.1449C36.5508 28.8465 35.7881 29.3469 34.9277 29.5672" stroke="#8888FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_4_338">
        <rect width="24" height="24" fill="white" transform="translate(18.9277 18.6872)"/>
        </clipPath>
        </defs>
        </svg>
        </div>
        <div data-layer="Title" className="Title flex-col justify-start items-start gap-2 inline-flex">
          <div data-layer="Heading" className="Heading w-[203px] text-gray-800 text-lg font-bold font-['Sora'] leading-[25.20px]">Professional</div>
          <div data-layer="Text" className="Text w-[203px] text-neutral-400 text-sm font-normal font-['DM Sans'] leading-normal">Elementum consectetur at aliquet turpis.</div>
        </div>
      </div>
      <div data-layer="Icon Box 4" className="IconBox4 justify-start items-start gap-5 flex">
        <div data-svg-wrapper data-layer="Icon" className="Icon">
        <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="62" height="62" rx="8" fill="#F3F3FF"/>
        <path d="M31 34C34.866 34 38 30.866 38 27C38 23.134 34.866 20 31 20C27.134 20 24 23.134 24 27C24 30.866 27.134 34 31 34Z" stroke="#8888FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M27.21 32.89L26 42L31 39L36 42L34.79 32.88" stroke="#8888FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
        <div data-layer="Title" className="Title flex-col justify-start items-start gap-2 inline-flex">
          <div data-layer="Heading" className="Heading w-[203px] text-gray-800 text-lg font-bold font-['Sora'] leading-[25.20px]">Competitive Pricing</div>
          <div data-layer="Text" className="Text w-[203px] text-neutral-400 text-sm font-normal font-['DM Sans'] leading-normal">Elementum consectetur at aliquet turpis.</div>
        </div>
      </div>
    </div>
    <div data-layer="Image Box" className="ImageBox left-[1035px] top-[97px] absolute flex-col justify-start items-start gap-5 inline-flex">
      <div data-layer="Image Box 1" className="ImageBox1 w-[285px] h-[205px] relative bg-gray-700 rounded-2xl  overflow-hidden">
        <div data-layer="Replace This" className="ReplaceThis w-[328px] h-[219px] left-[-21px] top-[-7px] absolute bg-gray-700" />
        <div data-layer="Label" className="Label px-3 py-2 left-[139px] top-[158px] absolute bg-violet-100 rounded-[100px] justify-start items-start gap-2.5 inline-flex">
          <div data-layer="PRINT ON DEMAND" className="PrintOnDemand text-indigo-400 text-[10px] font-semibold font-['Sora'] uppercase leading-[10px]">PRINT ON DEMAND</div>
        </div>
      </div>
      <div data-layer="Image Box 2" className="ImageBox2 w-[285px] h-[206px] relative bg-gray-700 rounded-2xl  overflow-hidden">
        <div data-layer="Replace This" className="ReplaceThis w-[915px] h-[610px] left-[-315px] top-[-202px] absolute bg-gray-700" />
        <div data-layer="Label" className="Label px-3 py-2 left-[155px] top-[159px] absolute bg-violet-100 rounded-[100px] justify-start items-start gap-2.5 inline-flex">
          <div data-layer="Business Card" className="BusinessCard text-indigo-400 text-[10px] font-semibold font-['Sora'] uppercase leading-[10px]">Business Card</div>
        </div>
      </div>
    </div>
    <div data-layer="Hero Content" className="HeroContent w-[895px] h-[432px] left-[120px] top-[96px] absolute bg-violet-50 rounded-2xl  overflow-hidden">
      <div data-layer="Ellipse BG 2" className="EllipseBg2 w-[433px] h-[433px] left-[628px] top-[-211px] absolute bg-red-300 rounded-full" />
      <div data-layer="Ellipse BG 1" className="EllipseBg1 w-[281px] h-[281px] left-[419px] top-[291px] absolute bg-indigo-200 rounded-full" />
      <div data-layer="Replace This" className="ReplaceThis w-[329px] h-[434px] left-[863px] top-[-2px] absolute origin-top-left rotate-180 bg-gray-700" />
      <div data-layer="Dot" className="Dot left-[69px] top-[30px] absolute origin-top-left rotate-90 flex-col justify-start items-start gap-[6.29px] inline-flex">
        <div data-layer="Dot 1" className="Dot1 justify-start items-start gap-[6.29px] inline-flex">
          <div data-layer="Ellipse 3" className="Ellipse3 w-[5.03px] h-[5.03px] bg-indigo-100 rounded-full" />
          <div data-layer="Ellipse 4" className="Ellipse4 w-[5.03px] h-[5.03px] bg-indigo-100 rounded-full" />
          <div data-layer="Ellipse 5" className="Ellipse5 w-[5.03px] h-[5.03px] bg-indigo-100 rounded-full" />
        </div>
        <div data-layer="Dot 2" className="Dot2 justify-start items-start gap-[6.29px] inline-flex">
          <div data-layer="Ellipse 6" className="Ellipse6 w-[5.03px] h-[5.03px] bg-indigo-100 rounded-full" />
          <div data-layer="Ellipse 7" className="Ellipse7 w-[5.03px] h-[5.03px] bg-indigo-100 rounded-full" />
          <div data-layer="Ellipse 8" className="Ellipse8 w-[5.03px] h-[5.03px] bg-indigo-100 rounded-full" />
        </div>
        <div data-layer="Dot 3" className="Dot3 justify-start items-start gap-[6.29px] inline-flex">
          <div data-layer="Ellipse 6" className="Ellipse6 w-[5.03px] h-[5.03px] bg-indigo-100 rounded-full" />
          <div data-layer="Ellipse 7" className="Ellipse7 w-[5.03px] h-[5.03px] bg-indigo-100 rounded-full" />
          <div data-layer="Ellipse 8" className="Ellipse8 w-[5.03px] h-[5.03px] bg-indigo-100 rounded-full" />
        </div>
        <div data-layer="Dot 4" className="Dot4 justify-start items-start gap-[6.29px] inline-flex">
          <div data-layer="Ellipse 6" className="Ellipse6 w-[5.03px] h-[5.03px] bg-indigo-100 rounded-full" />
          <div data-layer="Ellipse 7" className="Ellipse7 w-[5.03px] h-[5.03px] bg-indigo-100 rounded-full" />
          <div data-layer="Ellipse 8" className="Ellipse8 w-[5.03px] h-[5.03px] bg-indigo-100 rounded-full" />
        </div>
      </div>
      <div data-layer="Button" className="Button px-[38px] py-5 left-[82px] top-[311px] absolute bg-indigo-500 rounded-lg shadow-[0px_8px_24px_0px_rgba(108,93,212,0.25)] justify-center items-center gap-2.5 inline-flex">
        <div data-layer="Text Button" className="TextButton text-center text-violet-50 text-sm font-semibold font-['Sora'] leading-[14px]">Get Started</div>
      </div>
      <div data-layer="Button" className="Button px-[38px] py-5 left-[265px] top-[311px] absolute rounded-lg border border-indigo-500 justify-center items-center gap-2.5 inline-flex">
        <div data-layer="Text Button" className="TextButton text-center text-indigo-500 text-sm font-semibold font-['Sora'] leading-[14px]">Read More</div>
      </div>
      <div data-layer="Title" className="Title left-[82px] top-[71px] absolute flex-col justify-start items-start gap-6 inline-flex">
        <div data-layer="Heading" className="Heading flex-col justify-start items-start gap-5 flex">
          <div data-layer="Sub Heading" className="SubHeading text-pink-300 text-sm font-semibold font-['Sora'] uppercase leading-[14px] tracking-widest">Printing Service Company</div>
          <div data-layer="Heading" className="Heading w-[452px] text-gray-800 text-[40px] font-bold font-['Sora'] leading-[56px]">Show Up, Stand Out!</div>
          <div data-layer="Text" className="Text w-[452px] text-gray-700 text-lg font-bold font-['Sora'] leading-[25.20px]">Bring Your Ideas to Life with High-Quality Prints</div>
        </div>
        <div data-layer="Text" className="Text w-[452px] text-gray-700 text-base font-normal font-['DM Sans'] leading-relaxed">Elementum consectetur at aliquet turpis ultricies felis egestas aliquam porta. Amet vitae.</div>
      </div>
    </div>
  </div>
  <div data-layer="2 Cards" className="Cards w-[1440px] h-[372px] px-[120px] bg-white justify-center items-start gap-10 inline-flex overflow-hidden">
    <div data-layer="Card 1" className="Card1 w-[580px] h-[372px] relative bg-pink-50 rounded-2xl flex-col justify-start items-start flex overflow-hidden">
      <div data-layer="Ellipse BG 2" className="EllipseBg2 w-[196px] h-[196px] origin-top-left rotate-180 bg-rose-100 rounded-full" />
      <div data-layer="Title" className="Title flex-col justify-start items-start gap-3 inline-flex">
        <div data-layer="Heading" className="Heading text-gray-800 text-2xl font-bold font-['Sora'] leading-[33.60px]">Popular in 2023</div>
        <div data-layer="Text" className="Text w-[452px] text-neutral-400 text-base font-normal font-['DM Sans'] leading-relaxed">Elementum consectetur at aliquet turpis ultricies felis egestas aliquam porta. Amet vitae.</div>
      </div>
      <div data-layer="Image" className="Image w-44 h-[152px] bg-violet-50 rounded-lg justify-center items-center inline-flex overflow-hidden">
        <div data-layer="image 6" className="Image6 w-[255px] h-[170px] bg-gray-700" />
      </div>
      <div data-layer="Text Box" className="TextBox flex-col justify-start items-start gap-[18px] inline-flex">
        <div data-layer="Text Box 1" className="TextBox1 w-[258px] justify-between items-center inline-flex">
          <div data-layer="Tote Bags" className="ToteBags text-gray-700 text-lg font-bold font-['Sora'] leading-[25.20px]">Tote Bags</div>
          <div data-svg-wrapper data-layer="Arrow 1" className="Arrow1">
          <svg width="27" height="9" viewBox="0 0 27 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.3536 4.85355C26.5488 4.65829 26.5488 4.34171 26.3536 4.14645L23.1716 0.964466C22.9763 0.769204 22.6597 0.769204 22.4645 0.964466C22.2692 1.15973 22.2692 1.47631 22.4645 1.67157L25.2929 4.5L22.4645 7.32843C22.2692 7.52369 22.2692 7.84027 22.4645 8.03553C22.6597 8.2308 22.9763 8.2308 23.1716 8.03553L26.3536 4.85355ZM0 5H26V4H0V5Z" fill="#6C5DD4"/>
          </svg>
          </div>
        </div>
        <div data-layer="Line 1" className="Line1 w-[258px] h-[0px] border border-rose-100"></div>
        <div data-layer="Text Box 3" className="TextBox3 w-[258px] justify-between items-center inline-flex">
          <div data-layer="Business Cards" className="BusinessCards text-gray-700 text-lg font-bold font-['Sora'] leading-[25.20px]">Business Cards</div>
          <div data-svg-wrapper data-layer="Arrow 1" className="Arrow1">
          <svg width="27" height="9" viewBox="0 0 27 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.3536 4.85355C26.5488 4.65829 26.5488 4.34171 26.3536 4.14645L23.1716 0.964466C22.9763 0.769204 22.6597 0.769204 22.4645 0.964466C22.2692 1.15973 22.2692 1.47631 22.4645 1.67157L25.2929 4.5L22.4645 7.32843C22.2692 7.52369 22.2692 7.84027 22.4645 8.03553C22.6597 8.2308 22.9763 8.2308 23.1716 8.03553L26.3536 4.85355ZM0 5H26V4H0V5Z" fill="#6C5DD4"/>
          </svg>
          </div>
        </div>
        <div data-layer="Line 2" className="Line2 w-[258px] h-[0px] border border-rose-100"></div>
        <div data-layer="Text Box 2" className="TextBox2 w-[258px] justify-between items-center inline-flex">
          <div data-layer="T-shirts" className="TShirts text-gray-700 text-lg font-bold font-['Sora'] leading-[25.20px]">T-shirts</div>
          <div data-svg-wrapper data-layer="Arrow 1" className="Arrow1">
          <svg width="27" height="9" viewBox="0 0 27 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.3536 4.85355C26.5488 4.65829 26.5488 4.34171 26.3536 4.14645L23.1716 0.964466C22.9763 0.769204 22.6597 0.769204 22.4645 0.964466C22.2692 1.15973 22.2692 1.47631 22.4645 1.67157L25.2929 4.5L22.4645 7.32843C22.2692 7.52369 22.2692 7.84027 22.4645 8.03553C22.6597 8.2308 22.9763 8.2308 23.1716 8.03553L26.3536 4.85355ZM0 5H26V4H0V5Z" fill="#6C5DD4"/>
          </svg>
          </div>
        </div>
      </div>
      <div data-layer="Ellipse BG 3" className="EllipseBg3 w-[324px] h-[324px] origin-top-left rotate-180 bg-rose-100 rounded-full" />
    </div>
    <div data-layer="Card 2" className="Card2 w-[580px] h-[372px] relative bg-neutral-50 rounded-2xl flex-col justify-start items-start flex overflow-hidden">
      <div data-layer="Ellipse BG 2" className="EllipseBg2 w-[298px] h-[298px] bg-pink-50 rounded-full" />
      <div data-layer="Title" className="Title flex-col justify-start items-start gap-3 inline-flex">
        <div data-layer="Heading" className="Heading text-gray-800 text-2xl font-bold font-['Sora'] leading-[33.60px]">Top Rated by Customers</div>
        <div data-layer="Text" className="Text w-[452px] text-neutral-400 text-base font-normal font-['DM Sans'] leading-relaxed">Elementum consectetur at aliquet turpis ultricies felis egestas aliquam porta. Amet vitae.</div>
      </div>
      <div data-layer="Image" className="Image h-[152px] bg-violet-50 rounded-lg justify-end items-center inline-flex overflow-hidden">
        <div data-layer="image 5" className="Image5 w-[280px] h-[187px] bg-gray-700" />
      </div>
      <div data-layer="Text Box" className="TextBox flex-col justify-start items-start gap-[18px] inline-flex">
        <div data-layer="Text Box 1" className="TextBox1 w-[258px] justify-between items-center inline-flex">
          <div data-layer="Brochures" className="Brochures text-gray-700 text-lg font-bold font-['Sora'] leading-[25.20px]">Brochures</div>
          <div data-svg-wrapper data-layer="Arrow 1" className="Arrow1">
          <svg width="27" height="9" viewBox="0 0 27 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.3536 4.85355C26.5488 4.65829 26.5488 4.34171 26.3536 4.14645L23.1716 0.964466C22.9763 0.769204 22.6597 0.769204 22.4645 0.964466C22.2692 1.15973 22.2692 1.47631 22.4645 1.67157L25.2929 4.5L22.4645 7.32843C22.2692 7.52369 22.2692 7.84027 22.4645 8.03553C22.6597 8.2308 22.9763 8.2308 23.1716 8.03553L26.3536 4.85355ZM0 5H26V4H0V5Z" fill="#6C5DD4"/>
          </svg>
          </div>
        </div>
        <div data-layer="Line 1" className="Line1 w-[258px] h-[0px] border border-pink-50"></div>
        <div data-layer="Text Box 3" className="TextBox3 w-[258px] justify-between items-center inline-flex">
          <div data-layer="Photo Books" className="PhotoBooks text-gray-700 text-lg font-bold font-['Sora'] leading-[25.20px]">Photo Books</div>
          <div data-svg-wrapper data-layer="Arrow 1" className="Arrow1">
          <svg width="27" height="9" viewBox="0 0 27 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.3536 4.85355C26.5488 4.65829 26.5488 4.34171 26.3536 4.14645L23.1716 0.964466C22.9763 0.769204 22.6597 0.769204 22.4645 0.964466C22.2692 1.15973 22.2692 1.47631 22.4645 1.67157L25.2929 4.5L22.4645 7.32843C22.2692 7.52369 22.2692 7.84027 22.4645 8.03553C22.6597 8.2308 22.9763 8.2308 23.1716 8.03553L26.3536 4.85355ZM0 5H26V4H0V5Z" fill="#6C5DD4"/>
          </svg>
          </div>
        </div>
        <div data-layer="Line 2" className="Line2 w-[258px] h-[0px] border border-pink-50"></div>
        <div data-layer="Text Box 2" className="TextBox2 w-[258px] justify-between items-center inline-flex">
          <div data-layer="Mouse Pads" className="MousePads text-gray-700 text-lg font-bold font-['Sora'] leading-[25.20px]">Mouse Pads</div>
          <div data-svg-wrapper data-layer="Arrow 1" className="Arrow1">
          <svg width="27" height="9" viewBox="0 0 27 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.3536 4.85355C26.5488 4.65829 26.5488 4.34171 26.3536 4.14645L23.1716 0.964466C22.9763 0.769204 22.6597 0.769204 22.4645 0.964466C22.2692 1.15973 22.2692 1.47631 22.4645 1.67157L25.2929 4.5L22.4645 7.32843C22.2692 7.52369 22.2692 7.84027 22.4645 8.03553C22.6597 8.2308 22.9763 8.2308 23.1716 8.03553L26.3536 4.85355ZM0 5H26V4H0V5Z" fill="#6C5DD4"/>
          </svg>
          </div>
        </div>
      </div>
      <div data-layer="Ellipse BG 4" className="EllipseBg4 w-[324px] h-[324px] origin-top-left rotate-180 bg-pink-50 rounded-full" />
    </div>
  </div>
  <div data-layer="3 About Us" className="AboutUs w-[1440px] h-[834px] relative bg-white  overflow-hidden">
    <div data-layer="Image Box" className="ImageBox left-[120px] top-[324px] absolute justify-start items-start gap-[66px] inline-flex">
      <div data-layer="Image Box 1" className="ImageBox1 flex-col justify-start items-start gap-5 inline-flex">
        <div data-layer="Image" className="Image w-[356px] bg-violet-50 rounded-xl justify-center items-center inline-flex overflow-hidden">
          <div data-layer="Replace This" className="ReplaceThis w-[400px] h-[300px] bg-gray-700" />
        </div>
        <div data-layer="Content" className="Content flex-col justify-start items-start gap-5 flex">
          <div data-layer="Title" className="Title flex-col justify-start items-start gap-2.5 flex">
            <div data-layer="High-Quality Printing" className="HighQualityPrinting text-gray-800 text-2xl font-bold font-['Sora'] leading-[33.60px]">High-Quality Printing</div>
            <div data-layer="Text" className="Text w-[356px] text-neutral-400 text-base font-normal font-['DM Sans'] leading-relaxed">Imperdiet turpis ut quis quis scelerisque ullamcorper eu tellus.</div>
          </div>
          <div data-layer="Text Button" className="TextButton justify-start items-center gap-5 inline-flex">
            <div data-layer="Learn More" className="LearnMore text-indigo-500 text-sm font-semibold font-['Sora'] leading-[14px]">Learn More</div>
            <div data-svg-wrapper data-layer="Arrow 1" className="Arrow1">
            <svg width="27" height="8" viewBox="0 0 27 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.3536 4.35355C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464466C22.9763 0.269204 22.6597 0.269204 22.4645 0.464466C22.2692 0.659728 22.2692 0.976311 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53553C22.6597 7.7308 22.9763 7.7308 23.1716 7.53553L26.3536 4.35355ZM0 4.5H26V3.5H0V4.5Z" fill="#6C5DD4"/>
            </svg>
            </div>
          </div>
        </div>
      </div>
      <div data-layer="Image Box 2" className="ImageBox2 flex-col justify-start items-start gap-5 inline-flex">
        <div data-layer="Image" className="Image w-[356px] h-[268px] bg-violet-50 rounded-xl justify-center items-center inline-flex overflow-hidden">
          <div data-layer="Replace This" className="ReplaceThis w-[386px] h-[290px] bg-gray-700" />
        </div>
        <div data-layer="Content" className="Content flex-col justify-start items-start gap-5 flex">
          <div data-layer="Title" className="Title flex-col justify-start items-start gap-2.5 flex">
            <div data-layer="Customization Options" className="CustomizationOptions text-gray-800 text-2xl font-bold font-['Sora'] leading-[33.60px]">Customization Options</div>
            <div data-layer="Text" className="Text w-[356px] text-neutral-400 text-base font-normal font-['DM Sans'] leading-relaxed">Imperdiet turpis ut quis quis scelerisque ullamcorper eu tellus.</div>
          </div>
          <div data-layer="Text Button" className="TextButton justify-start items-center gap-5 inline-flex">
            <div data-layer="Learn More" className="LearnMore text-indigo-500 text-sm font-semibold font-['Sora'] leading-[14px]">Learn More</div>
            <div data-svg-wrapper data-layer="Arrow 1" className="Arrow1">
            <svg width="27" height="8" viewBox="0 0 27 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.3536 4.35355C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464466C22.9763 0.269204 22.6597 0.269204 22.4645 0.464466C22.2692 0.659728 22.2692 0.976311 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53553C22.6597 7.7308 22.9763 7.7308 23.1716 7.53553L26.3536 4.35355ZM0 4.5H26V3.5H0V4.5Z" fill="#6C5DD4"/>
            </svg>
            </div>
          </div>
        </div>
      </div>
      <div data-layer="Image Box 3" className="ImageBox3 flex-col justify-start items-start gap-5 inline-flex">
        <div data-layer="Image" className="Image w-[356px] h-[268px] bg-violet-50 rounded-xl justify-center items-center inline-flex overflow-hidden">
          <div data-layer="Replace This" className="ReplaceThis w-[374px] h-[280px] bg-gray-700" />
        </div>
        <div data-layer="Content" className="Content flex-col justify-start items-start gap-5 flex">
          <div data-layer="Title" className="Title flex-col justify-start items-start gap-2.5 flex">
            <div data-layer="Quick Turnaround Time" className="QuickTurnaroundTime text-gray-800 text-2xl font-bold font-['Sora'] leading-[33.60px]">Quick Turnaround Time</div>
            <div data-layer="Text" className="Text w-[356px] text-neutral-400 text-base font-normal font-['DM Sans'] leading-relaxed">Imperdiet turpis ut quis quis scelerisque ullamcorper eu tellus.</div>
          </div>
          <div data-layer="Text Button" className="TextButton justify-start items-center gap-5 inline-flex">
            <div data-layer="Learn More" className="LearnMore text-indigo-500 text-sm font-semibold font-['Sora'] leading-[14px]">Learn More</div>
            <div data-svg-wrapper data-layer="Arrow 1" className="Arrow1">
            <svg width="27" height="8" viewBox="0 0 27 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.3536 4.35355C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464466C22.9763 0.269204 22.6597 0.269204 22.4645 0.464466C22.2692 0.659728 22.2692 0.976311 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53553C22.6597 7.7308 22.9763 7.7308 23.1716 7.53553L26.3536 4.35355ZM0 4.5H26V3.5H0V4.5Z" fill="#6C5DD4"/>
            </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-layer="CTA" className="Cta left-[934px] top-[138px] absolute flex-col justify-start items-end gap-5 inline-flex">
      <div data-layer="Text" className="Text w-[386px] text-right text-neutral-400 text-base font-normal font-['DM Sans'] leading-relaxed">Imperdiet turpis ut quis quis scelerisque ullamcorper eu tellus.</div>
      <div data-layer="Button" className="Button px-[38px] py-5 bg-indigo-500 rounded-lg shadow-[0px_8px_24px_0px_rgba(108,93,212,0.25)] justify-center items-center gap-2.5 inline-flex">
        <div data-layer="Text Button" className="TextButton text-center text-violet-50 text-sm font-semibold font-['Sora'] leading-[14px]">Learn More</div>
      </div>
    </div>
    <div data-layer="Title" className="Title left-[120px] top-[96px] absolute flex-col justify-start items-start gap-5 inline-flex">
      <div data-layer="Sub Heading" className="SubHeading text-pink-300 text-sm font-semibold font-['Sora'] uppercase leading-[14px] tracking-widest">About Us</div>
      <div data-layer="Heading" className="Heading w-[720px] text-gray-800 text-5xl font-bold font-['Sora'] leading-[67.20px]">Your Trusted Partner for Superior Printing Services</div>
    </div>
  </div>
  <div data-layer="4 Why Us" className="WhyUs w-[1440px] h-[844px] relative bg-violet-50  overflow-hidden">
    <div data-layer="Image Box" className="ImageBox w-[488px] h-[652px] left-[832px] top-[96px] absolute bg-indigo-200 rounded-2xl  overflow-hidden">
      <div data-layer="Ellipse 9" className="Ellipse9 w-[746px] h-[746px] left-[-372px] top-[-373px] absolute bg-indigo-500 rounded-full" />
      <div data-layer="Ellipse 10" className="Ellipse10 w-[362px] h-[362px] left-[307px] top-[441px] absolute bg-red-300 rounded-full" />
      <div data-layer="Replaca this" className="ReplacaThis w-[348px] h-[530px] left-[440px] top-[122px] absolute origin-top-left rotate-180 bg-gray-700" />
      <div data-layer="Icon List" className="IconList left-[44px] top-[44px] absolute justify-start items-center gap-3 inline-flex">
        <div data-svg-wrapper data-layer="Icon" className="Icon">
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="54" height="54" rx="27" fill="white"/>
        <path d="M33 27L24 32.1962L24 21.8038L33 27Z" fill="#6C5DD4"/>
        </svg>
        </div>
        <div data-layer="Our Process" className="OurProcess text-white text-xl font-bold font-['Sora'] leading-7">Our Process</div>
      </div>
    </div>
    <div data-layer="Icon Box" className="IconBox left-[120px] top-[396px] absolute flex-col justify-start items-start gap-8 inline-flex">
      <div data-layer="Icon Box 1" className="IconBox1 justify-start items-start gap-[22px] inline-flex">
        <div data-svg-wrapper data-layer="Icon" className="Icon">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="80" rx="8" fill="white"/>
        <path d="M35 39L39 30C39.7956 30 40.5587 30.3161 41.1213 30.8787C41.6839 31.4413 42 32.2044 42 33V37H47.66C47.9499 36.9967 48.2371 37.0565 48.5016 37.1752C48.7661 37.2939 49.0016 37.4687 49.1919 37.6875C49.3821 37.9063 49.5225 38.1638 49.6033 38.4423C49.6842 38.7207 49.7035 39.0134 49.66 39.3L48.28 48.3C48.2077 48.7769 47.9654 49.2116 47.5979 49.524C47.2304 49.8364 46.7623 50.0055 46.28 50H35M35 39V50M35 39H32C31.4696 39 30.9609 39.2107 30.5858 39.5858C30.2107 39.9609 30 40.4696 30 41V48C30 48.5304 30.2107 49.0391 30.5858 49.4142C30.9609 49.7893 31.4696 50 32 50H35" stroke="#8888FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
        <div data-layer="Title" className="Title flex-col justify-start items-start gap-2.5 inline-flex">
          <div data-layer="Uncompromising Quality" className="UncompromisingQuality text-gray-800 text-2xl font-bold font-['Sora'] leading-[33.60px]">Uncompromising Quality</div>
          <div data-layer="Text" className="Text w-[487px] text-neutral-400 text-base font-normal font-['DM Sans'] leading-relaxed">Netus feugiat vitae enim enim in viverra. Id at sagittis cras pretium dictum nec netus. Ante dolor quis convallis.</div>
        </div>
      </div>
      <div data-layer="Icon Box 2" className="IconBox2 justify-start items-start gap-[22px] inline-flex">
        <div data-svg-wrapper data-layer="Icon" className="Icon">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="80" rx="8" fill="white"/>
        <path d="M35 39L39 30C39.7956 30 40.5587 30.3161 41.1213 30.8787C41.6839 31.4413 42 32.2044 42 33V37H47.66C47.9499 36.9967 48.2371 37.0565 48.5016 37.1752C48.7661 37.2939 49.0016 37.4687 49.1919 37.6875C49.3821 37.9063 49.5225 38.1638 49.6033 38.4423C49.6842 38.7207 49.7035 39.0134 49.66 39.3L48.28 48.3C48.2077 48.7769 47.9654 49.2116 47.5979 49.524C47.2304 49.8364 46.7623 50.0055 46.28 50H35M35 39V50M35 39H32C31.4696 39 30.9609 39.2107 30.5858 39.5858C30.2107 39.9609 30 40.4696 30 41V48C30 48.5304 30.2107 49.0391 30.5858 49.4142C30.9609 49.7893 31.4696 50 32 50H35" stroke="#8888FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
        <div data-layer="Title" className="Title flex-col justify-start items-start gap-2.5 inline-flex">
          <div data-layer="Extensive Range of Services" className="ExtensiveRangeOfServices text-gray-800 text-2xl font-bold font-['Sora'] leading-[33.60px]">Extensive Range of Services</div>
          <div data-layer="Text" className="Text w-[487px] text-neutral-400 text-base font-normal font-['DM Sans'] leading-relaxed">Netus feugiat vitae enim enim in viverra. Id at sagittis cras pretium dictum nec netus. Ante dolor quis convallis.</div>
        </div>
      </div>
      <div data-layer="Icon Box 3" className="IconBox3 justify-start items-start gap-[22px] inline-flex">
        <div data-svg-wrapper data-layer="Icon" className="Icon">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="80" rx="8" fill="white"/>
        <path d="M35 39L39 30C39.7956 30 40.5587 30.3161 41.1213 30.8787C41.6839 31.4413 42 32.2044 42 33V37H47.66C47.9499 36.9967 48.2371 37.0565 48.5016 37.1752C48.7661 37.2939 49.0016 37.4687 49.1919 37.6875C49.3821 37.9063 49.5225 38.1638 49.6033 38.4423C49.6842 38.7207 49.7035 39.0134 49.66 39.3L48.28 48.3C48.2077 48.7769 47.9654 49.2116 47.5979 49.524C47.2304 49.8364 46.7623 50.0055 46.28 50H35M35 39V50M35 39H32C31.4696 39 30.9609 39.2107 30.5858 39.5858C30.2107 39.9609 30 40.4696 30 41V48C30 48.5304 30.2107 49.0391 30.5858 49.4142C30.9609 49.7893 31.4696 50 32 50H35" stroke="#8888FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
        <div data-layer="Title" className="Title flex-col justify-start items-start gap-2.5 inline-flex">
          <div data-layer="Personalized Approach" className="PersonalizedApproach text-gray-800 text-2xl font-bold font-['Sora'] leading-[33.60px]">Personalized Approach</div>
          <div data-layer="Text" className="Text w-[487px] text-neutral-400 text-base font-normal font-['DM Sans'] leading-relaxed">Netus feugiat vitae enim enim in viverra. Id at sagittis cras pretium dictum nec netus. Ante dolor quis convallis.</div>
        </div>
      </div>
    </div>
    <div data-layer="Title" className="Title left-[120px] top-[96px] absolute flex-col justify-start items-start gap-5 inline-flex">
      <div data-layer="Sub Heading" className="SubHeading text-pink-300 text-sm font-semibold font-['Sora'] uppercase leading-[14px] tracking-widest">Why Choose Us</div>
      <div data-layer="Heading" className="Heading w-[590px] text-gray-800 text-5xl font-bold font-['Sora'] leading-[67.20px]">Experience Excellence Service</div>
      <div data-layer="Text" className="Text w-[487px] text-neutral-400 text-base font-normal font-['DM Sans'] leading-relaxed">Netus feugiat vitae enim enim in viverra. Id at sagittis cras pretium dictum nec netus. Ante dolor quis convallis.</div>
    </div>
  </div>
  <div data-layer="5 Our Services" className="OurServices px-[120px] py-24 bg-white flex-col justify-center items-center gap-16 flex overflow-hidden">
    <div data-layer="Title" className="Title self-stretch flex-col justify-start items-center gap-5 inline-flex">
      <div data-layer="Sub Heading" className="SubHeading text-pink-300 text-sm font-semibold font-['Sora'] uppercase leading-[14px] tracking-widest">Our Services</div>
      <div data-layer="Heading" className="Heading w-[544px] text-center text-gray-800 text-5xl font-bold font-['Sora'] leading-[67.20px]">Printing Solutions for All Your Needs</div>
      <div data-layer="Text" className="Text w-[544px] text-center text-neutral-400 text-base font-normal font-['DM Sans'] leading-relaxed">Netus feugiat vitae enim enim in viverra. Id at sagittis cras pretium dictum nec netus. Ante dolor quis convallis.</div>
    </div>
    <div data-layer="Icon Box" className="IconBox self-stretch flex-col justify-start items-start gap-16 inline-flex">
      <div data-layer="Icon Box Row 1" className="IconBoxRow1 justify-start items-start gap-[66px] inline-flex">
        <div data-layer="Icon Box 1" className="IconBox1 p-10 bg-slate-50 rounded-xl flex-col justify-start items-start gap-5 inline-flex overflow-hidden">
          <div data-svg-wrapper data-layer="Icon" className="Icon">
          <svg width="83" height="79" viewBox="0 0 83 79" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="83" height="79" rx="8" fill="white"/>
          <path d="M33.5 35.7499V25.8333H50.5V35.7499" stroke="#8888FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M33.4999 48.5H30.6666C29.9151 48.5 29.1945 48.2015 28.6631 47.6701C28.1318 47.1388 27.8333 46.4181 27.8333 45.6667V38.5833C27.8333 37.8319 28.1318 37.1112 28.6631 36.5799C29.1945 36.0485 29.9151 35.75 30.6666 35.75H53.3333C54.0847 35.75 54.8054 36.0485 55.3367 36.5799C55.8681 37.1112 56.1666 37.8319 56.1666 38.5833V45.6667C56.1666 46.4181 55.8681 47.1388 55.3367 47.6701C54.8054 48.2015 54.0847 48.5 53.3333 48.5H50.4999" stroke="#8888FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M50.5 42.8333H33.5V54.1666H50.5V42.8333Z" stroke="#8888FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
          <div data-layer="Content" className="Content flex-col justify-start items-start gap-5 flex">
            <div data-layer="Title" className="Title flex-col justify-start items-start gap-2.5 flex">
              <div data-layer="Digital Print" className="DigitalPrint text-gray-800 text-2xl font-bold font-['Sora'] leading-[33.60px]">Digital Print</div>
              <div data-layer="Text" className="Text w-[276px] text-neutral-400 text-base font-normal font-['DM Sans'] leading-relaxed">Mi donec risus commodo auctor phasellus adipiscing. Faucibus magna cursus sed sodales amet. Nunc.</div>
            </div>
            <div data-layer="Text Button" className="TextButton justify-start items-center gap-5 inline-flex">
              <div data-layer="Learn More" className="LearnMore text-indigo-500 text-sm font-semibold font-['Sora'] leading-[14px]">Learn More</div>
              <div data-svg-wrapper data-layer="Arrow 1" className="Arrow1">
              <svg width="27" height="8" viewBox="0 0 27 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.3536 4.35355C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464466C22.9763 0.269204 22.6597 0.269204 22.4645 0.464466C22.2692 0.659728 22.2692 0.976311 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53553C22.6597 7.7308 22.9763 7.7308 23.1716 7.53553L26.3536 4.35355ZM0 4.5H26V3.5H0V4.5Z" fill="#6C5DD4"/>
              </svg>
              </div>
            </div>
          </div>
        </div>
        <div data-layer="Icon Box 2" className="IconBox2 p-10 bg-slate-50 rounded-xl flex-col justify-start items-start gap-5 inline-flex overflow-hidden">
          <div data-svg-wrapper data-layer="Icon" className="Icon">
          <svg width="83" height="79" viewBox="0 0 83 79" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="83" height="79" rx="8" fill="white"/>
          <path d="M53.3334 52.75V49.9167C53.3334 48.4138 52.7364 46.9724 51.6737 45.9097C50.611 44.847 49.1696 44.25 47.6667 44.25H36.3334C34.8305 44.25 33.3892 44.847 32.3265 45.9097C31.2638 46.9724 30.6667 48.4138 30.6667 49.9167V52.75" stroke="#8888FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M41.9999 38.5833C45.1295 38.5833 47.6666 36.0463 47.6666 32.9167C47.6666 29.7871 45.1295 27.25 41.9999 27.25C38.8703 27.25 36.3333 29.7871 36.3333 32.9167C36.3333 36.0463 38.8703 38.5833 41.9999 38.5833Z" stroke="#8888FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
          <div data-layer="Content" className="Content flex-col justify-start items-start gap-5 flex">
            <div data-layer="Title" className="Title flex-col justify-start items-start gap-2.5 flex">
              <div data-layer="Shirt Print" className="ShirtPrint text-gray-800 text-2xl font-bold font-['Sora'] leading-[33.60px]">Shirt Print</div>
              <div data-layer="Text" className="Text w-[276px] text-neutral-400 text-base font-normal font-['DM Sans'] leading-relaxed">Mi donec risus commodo auctor phasellus adipiscing. Faucibus magna cursus sed sodales amet. Nunc.</div>
            </div>
            <div data-layer="Text Button" className="TextButton justify-start items-center gap-5 inline-flex">
              <div data-layer="Learn More" className="LearnMore text-indigo-500 text-sm font-semibold font-['Sora'] leading-[14px]">Learn More</div>
              <div data-svg-wrapper data-layer="Arrow 1" className="Arrow1">
              <svg width="27" height="8" viewBox="0 0 27 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.3536 4.35355C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464466C22.9763 0.269204 22.6597 0.269204 22.4645 0.464466C22.2692 0.659728 22.2692 0.976311 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53553C22.6597 7.7308 22.9763 7.7308 23.1716 7.53553L26.3536 4.35355ZM0 4.5H26V3.5H0V4.5Z" fill="#6C5DD4"/>
              </svg>
              </div>
            </div>
          </div>
        </div>
        <div data-layer="Icon Box 3" className="IconBox3 p-10 bg-slate-50 rounded-xl flex-col justify-start items-start gap-5 inline-flex overflow-hidden">
          <div data-svg-wrapper data-layer="Icon" className="Icon">
          <svg width="83" height="79" viewBox="0 0 83 79" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="83" height="79" rx="8" fill="white"/>
          <path d="M51.9167 27.25H32.0833C30.5185 27.25 29.25 28.5185 29.25 30.0833V49.9167C29.25 51.4815 30.5185 52.75 32.0833 52.75H51.9167C53.4815 52.75 54.75 51.4815 54.75 49.9167V30.0833C54.75 28.5185 53.4815 27.25 51.9167 27.25Z" stroke="#8888FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M37.0417 37.1667C38.2154 37.1667 39.1667 36.2154 39.1667 35.0417C39.1667 33.8681 38.2154 32.9167 37.0417 32.9167C35.8681 32.9167 34.9167 33.8681 34.9167 35.0417C34.9167 36.2154 35.8681 37.1667 37.0417 37.1667Z" stroke="#8888FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M54.7499 44.2501L47.6666 37.1667L32.0833 52.7501" stroke="#8888FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
          <div data-layer="Content" className="Content flex-col justify-start items-start gap-5 flex">
            <div data-layer="Title" className="Title flex-col justify-start items-start gap-2.5 flex">
              <div data-layer="Photo Print" className="PhotoPrint text-gray-800 text-2xl font-bold font-['Sora'] leading-[33.60px]">Photo Print</div>
              <div data-layer="Text" className="Text w-[276px] text-neutral-400 text-base font-normal font-['DM Sans'] leading-relaxed">Mi donec risus commodo auctor phasellus adipiscing. Faucibus magna cursus sed sodales amet. Nunc.</div>
            </div>
            <div data-layer="Text Button" className="TextButton justify-start items-center gap-5 inline-flex">
              <div data-layer="Learn More" className="LearnMore text-indigo-500 text-sm font-semibold font-['Sora'] leading-[14px]">Learn More</div>
              <div data-svg-wrapper data-layer="Arrow 1" className="Arrow1">
              <svg width="27" height="8" viewBox="0 0 27 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.3536 4.35355C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464466C22.9763 0.269204 22.6597 0.269204 22.4645 0.464466C22.2692 0.659728 22.2692 0.976311 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53553C22.6597 7.7308 22.9763 7.7308 23.1716 7.53553L26.3536 4.35355ZM0 4.5H26V3.5H0V4.5Z" fill="#6C5DD4"/>
              </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-layer="Icon Box Row 2" className="IconBoxRow2 justify-start items-start gap-[66px] inline-flex">
        <div data-layer="Icon Box 1" className="IconBox1 p-10 bg-slate-50 rounded-xl flex-col justify-start items-start gap-5 inline-flex overflow-hidden">
          <div data-svg-wrapper data-layer="Icon" className="Icon">
          <svg width="83" height="79" viewBox="0 0 83 79" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="83" height="79" rx="8" fill="white"/>
          <path d="M51.9167 27.25H32.0833C30.5185 27.25 29.25 28.5185 29.25 30.0833V49.9167C29.25 51.4815 30.5185 52.75 32.0833 52.75H51.9167C53.4815 52.75 54.75 51.4815 54.75 49.9167V30.0833C54.75 28.5185 53.4815 27.25 51.9167 27.25Z" stroke="#8888FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M29.25 35.75H54.75" stroke="#8888FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M37.75 52.75V35.75" stroke="#8888FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
          <div data-layer="Content" className="Content flex-col justify-start items-start gap-5 flex">
            <div data-layer="Title" className="Title flex-col justify-start items-start gap-2.5 flex">
              <div data-layer="Stationery Print" className="StationeryPrint text-gray-800 text-2xl font-bold font-['Sora'] leading-[33.60px]">Stationery Print</div>
              <div data-layer="Text" className="Text w-[276px] text-neutral-400 text-base font-normal font-['DM Sans'] leading-relaxed">Mi donec risus commodo auctor phasellus adipiscing. Faucibus magna cursus sed sodales amet. Nunc.</div>
            </div>
            <div data-layer="Text Button" className="TextButton justify-start items-center gap-5 inline-flex">
              <div data-layer="Learn More" className="LearnMore text-indigo-500 text-sm font-semibold font-['Sora'] leading-[14px]">Learn More</div>
              <div data-svg-wrapper data-layer="Arrow 1" className="Arrow1">
              <svg width="27" height="8" viewBox="0 0 27 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.3536 4.35355C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464466C22.9763 0.269204 22.6597 0.269204 22.4645 0.464466C22.2692 0.659728 22.2692 0.976311 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53553C22.6597 7.7308 22.9763 7.7308 23.1716 7.53553L26.3536 4.35355ZM0 4.5H26V3.5H0V4.5Z" fill="#6C5DD4"/>
              </svg>
              </div>
            </div>
          </div>
        </div>
        <div data-layer="Icon Box 2" className="IconBox2 p-10 bg-slate-50 rounded-xl flex-col justify-start items-start gap-5 inline-flex overflow-hidden">
          <div data-svg-wrapper data-layer="Icon" className="Icon">
          <svg width="83" height="79" viewBox="0 0 83 79" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="83" height="79" rx="8" fill="white"/>
          <path d="M44.8334 25.8333H33.5001C32.7486 25.8333 32.028 26.1318 31.4966 26.6631C30.9653 27.1945 30.6667 27.9151 30.6667 28.6666V51.3333C30.6667 52.0847 30.9653 52.8054 31.4966 53.3367C32.028 53.8681 32.7486 54.1666 33.5001 54.1666H50.5001C51.2515 54.1666 51.9722 53.8681 52.5035 53.3367C53.0349 52.8054 53.3334 52.0847 53.3334 51.3333V34.3333L44.8334 25.8333Z" stroke="#8888FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M44.8333 25.8333V34.3333H53.3333" stroke="#8888FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M47.6666 41.4167H36.3333" stroke="#8888FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M47.6666 47.0833H36.3333" stroke="#8888FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M39.1666 35.75H37.7499H36.3333" stroke="#8888FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
          <div data-layer="Content" className="Content flex-col justify-start items-start gap-5 flex">
            <div data-layer="Title" className="Title flex-col justify-start items-start gap-2.5 flex">
              <div data-layer="Document Print" className="DocumentPrint text-gray-800 text-2xl font-bold font-['Sora'] leading-[33.60px]">Document Print</div>
              <div data-layer="Text" className="Text w-[276px] text-neutral-400 text-base font-normal font-['DM Sans'] leading-relaxed">Mi donec risus commodo auctor phasellus adipiscing. Faucibus magna cursus sed sodales amet. Nunc.</div>
            </div>
            <div data-layer="Text Button" className="TextButton justify-start items-center gap-5 inline-flex">
              <div data-layer="Learn More" className="LearnMore text-indigo-500 text-sm font-semibold font-['Sora'] leading-[14px]">Learn More</div>
              <div data-svg-wrapper data-layer="Arrow 1" className="Arrow1">
              <svg width="27" height="8" viewBox="0 0 27 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.3536 4.35355C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464466C22.9763 0.269204 22.6597 0.269204 22.4645 0.464466C22.2692 0.659728 22.2692 0.976311 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53553C22.6597 7.7308 22.9763 7.7308 23.1716 7.53553L26.3536 4.35355ZM0 4.5H26V3.5H0V4.5Z" fill="#6C5DD4"/>
              </svg>
              </div>
            </div>
          </div>
        </div>
        <div data-layer="Icon Box 3" className="IconBox3 p-10 bg-slate-50 rounded-xl flex-col justify-start items-start gap-5 inline-flex overflow-hidden">
          <div data-svg-wrapper data-layer="Icon" className="Icon">
          <svg width="83" height="79" viewBox="0 0 83 79" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="83" height="79" rx="8" fill="white"/>
          <path d="M48.375 36.3166L35.625 28.9641" stroke="#8888FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M54.75 45.6666V34.3333C54.7495 33.8364 54.6183 33.3484 54.3697 32.9183C54.121 32.4881 53.7636 32.1309 53.3333 31.8824L43.4167 26.2158C42.9859 25.9671 42.4974 25.8362 42 25.8362C41.5026 25.8362 41.0141 25.9671 40.5833 26.2158L30.6667 31.8824C30.2364 32.1309 29.879 32.4881 29.6303 32.9183C29.3817 33.3484 29.2505 33.8364 29.25 34.3333V45.6666C29.2505 46.1635 29.3817 46.6515 29.6303 47.0816C29.879 47.5118 30.2364 47.869 30.6667 48.1174L40.5833 53.7841C41.0141 54.0328 41.5026 54.1637 42 54.1637C42.4974 54.1637 42.9859 54.0328 43.4167 53.7841L53.3333 48.1174C53.7636 47.869 54.121 47.5118 54.3697 47.0816C54.6183 46.6515 54.7495 46.1635 54.75 45.6666Z" stroke="#8888FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M29.6326 32.8601L42.0001 40.0143L54.3676 32.8601" stroke="#8888FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M42 54.28V40" stroke="#8888FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
          <div data-layer="Content" className="Content flex-col justify-start items-start gap-5 flex">
            <div data-layer="Title" className="Title flex-col justify-start items-start gap-2.5 flex">
              <div data-layer="Packaging Print" className="PackagingPrint text-gray-800 text-2xl font-bold font-['Sora'] leading-[33.60px]">Packaging Print</div>
              <div data-layer="Text" className="Text w-[276px] text-neutral-400 text-base font-normal font-['DM Sans'] leading-relaxed">Mi donec risus commodo auctor phasellus adipiscing. Faucibus magna cursus sed sodales amet. Nunc.</div>
            </div>
            <div data-layer="Text Button" className="TextButton justify-start items-center gap-5 inline-flex">
              <div data-layer="Learn More" className="LearnMore text-indigo-500 text-sm font-semibold font-['Sora'] leading-[14px]">Learn More</div>
              <div data-svg-wrapper data-layer="Arrow 1" className="Arrow1">
              <svg width="27" height="8" viewBox="0 0 27 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.3536 4.35355C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464466C22.9763 0.269204 22.6597 0.269204 22.4645 0.464466C22.2692 0.659728 22.2692 0.976311 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53553C22.6597 7.7308 22.9763 7.7308 23.1716 7.53553L26.3536 4.35355ZM0 4.5H26V3.5H0V4.5Z" fill="#6C5DD4"/>
              </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="6 Social Proof" className="SocialProof w-[1440px] px-[180px] py-24 bg-gray-800 justify-center items-center inline-flex overflow-hidden">
    <div data-layer="Fun fact" className="FunFact grow shrink basis-0 self-stretch justify-between items-center inline-flex">
      <div data-layer="Fun Fact 1" className="FunFact1 flex-col justify-start items-center inline-flex">
        <div data-layer="22 +" className="text-center text-white text-[64px] font-bold font-['Sora'] leading-[89.60px]">22 +</div>
        <div data-layer="Years Experience" className="YearsExperience text-center text-violet-50 text-base font-normal font-['DM Sans'] leading-relaxed">Years Experience</div>
      </div>
      <div data-layer="Fun Fact 2" className="FunFact2 flex-col justify-start items-center inline-flex">
        <div data-layer="142 +" className="text-center text-white text-[64px] font-bold font-['Sora'] leading-[89.60px]">142 +</div>
        <div data-layer="Completed Projects" className="CompletedProjects text-center text-violet-50 text-base font-normal font-['DM Sans'] leading-relaxed">Completed Projects</div>
      </div>
      <div data-layer="Fun Fact 3" className="FunFact3 flex-col justify-start items-center inline-flex">
        <div data-layer="362 +" className="text-center text-white text-[64px] font-bold font-['Sora'] leading-[89.60px]">362 +</div>
        <div data-layer="Professional Team" className="ProfessionalTeam text-center text-violet-50 text-base font-normal font-['DM Sans'] leading-relaxed">Professional Team</div>
      </div>
      <div data-layer="Fun Fact 4" className="FunFact4 flex-col justify-start items-center inline-flex">
        <div data-layer="99 %" className="text-center text-white text-[64px] font-bold font-['Sora'] leading-[89.60px]">99 %</div>
        <div data-layer="Satisfied Clients" className="SatisfiedClients text-center text-violet-50 text-base font-normal font-['DM Sans'] leading-relaxed">Satisfied Clients</div>
      </div>
    </div>
  </div>
  <div data-layer="7 Testimonial" className="Testimonial w-[1440px] h-[672px] relative bg-white  overflow-hidden">
    <div data-layer="Line 3" className="Line3 w-[1200px] h-[0px] left-[120px] top-[636px] absolute border border-indigo-100"></div>
    <div data-layer="Image" className="Image left-[708px] top-[465px] absolute justify-start items-center gap-5 inline-flex">
      <div data-layer="Image 1" className="Image1 w-20 h-20 relative">
        <div data-svg-wrapper data-layer="Border" className="Border left-0 top-0 absolute">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="78" height="78" rx="39" stroke="#8888FF" stroke-width="2"/>
        </svg>
        </div>
        <div data-layer="Image" className="Image w-16 left-[8px] top-[8px] absolute bg-gray-700 rounded-[100px] justify-center items-center inline-flex overflow-hidden">
          <div data-layer="Replace This" className="ReplaceThis w-[135px] h-[90px] bg-gray-700" />
        </div>
      </div>
      <div data-layer="Image 2" className="Image2 w-16 bg-gray-700 rounded-[100px] justify-end items-center flex overflow-hidden">
        <div data-layer="Replace This" className="ReplaceThis w-[130px] h-[89px] bg-gray-700" />
      </div>
      <div data-layer="Image 3" className="Image3 bg-gray-700 rounded-[100px] justify-start items-center flex overflow-hidden">
        <div data-layer="Replace This" className="ReplaceThis w-[130px] h-[87px] bg-gray-700" />
      </div>
    </div>
    <div data-layer="Testimonial" className="Testimonial left-[708px] top-[248px] absolute flex-col justify-start items-start gap-8 inline-flex">
      <div data-layer="Title" className="Title flex-col justify-start items-start gap-5 flex">
        <div data-layer="High-Quality Prints" className="HighQualityPrints text-gray-800 text-lg font-bold font-['Sora'] leading-[25.20px]">High-Quality Prints</div>
        <div data-layer="The printing services provided by this company delivered high-quality prints that exceeded my expectations. The colors were vibrant, and the details were sharp. I highly recommend their services." className="ThePrintingServicesProvidedByThisCompanyDeliveredHighQualityPrintsThatExceededMyExpectationsTheColorsWereVibrantAndTheDetailsWereSharpIHighlyRecommendTheirServices w-[551px] text-gray-700 text-base font-normal font-['DM Sans'] leading-relaxed">The printing services provided by this company delivered high-quality prints that exceeded my expectations. The colors were vibrant, and the details were sharp. I highly recommend their services.</div>
      </div>
      <div data-layer="Emily Johnson, Graphic Designer" className="EmilyJohnsonGraphicDesigner"><span class="text-gray-800 text-base font-normal font-['DM Sans'] leading-relaxed">Emily Johnson,</span><span class="text-black text-base font-normal font-['DM Sans'] leading-relaxed"> </span><span class="text-pink-300 text-base font-normal font-['DM Sans'] leading-relaxed">Graphic Designer</span></div>
    </div>
    <div data-svg-wrapper data-layer="“" className="left-[1233px] top-[114px] absolute">
    <svg width="87" height="70" viewBox="0 0 87 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M87 70H53.5777C50.176 59.6296 48.4751 48.9136 48.4751 37.8519C48.4751 26.7901 51.4516 17.7161 57.4047 10.6296C63.5279 3.54321 72.4575 0 84.1936 0V16.8519C75.349 16.8519 70.9267 22.5556 70.9267 33.963V38.1111H87V70ZM38.5249 70H5.10264C1.70088 59.6296 0 48.9136 0 37.8519C0 26.7901 2.97654 17.7161 8.92962 10.6296C15.0528 3.54321 23.9824 0 35.7185 0V16.8519C26.8739 16.8519 22.4516 22.5556 22.4516 33.963V38.1111H38.5249V70Z" fill="#6C5DD4"/>
    </svg>
    </div>
    <div data-layer="Heading" className="Heading left-[708px] top-[96px] absolute text-gray-800 text-5xl font-bold font-['Sora'] leading-[67.20px]">Testimonial</div>
    <div data-layer="Image Box" className="ImageBox w-[488px] h-[476px] left-[120px] top-[96px] absolute bg-violet-50 rounded-2xl  overflow-hidden">
      <div data-layer="Ellipse 9" className="Ellipse9 w-[484px] h-[484px] left-[-215px] top-[-246px] absolute bg-indigo-400 rounded-full" />
      <div data-layer="Ellipse 10" className="Ellipse10 w-[362px] h-[362px] left-[307px] top-[265px] absolute bg-red-300 rounded-full" />
      <div data-layer="image 7" className="Image7 w-[372px] h-[451px] left-[434px] top-[25px] absolute origin-top-left rotate-180 bg-gray-700" />
      <div data-layer="Frame 8" className="Frame8 px-[22px] py-3.5 left-[40px] top-[382px] absolute bg-white rounded-xl shadow-[0px_8px_24px_0px_rgba(0,0,0,0.10)] justify-center items-center inline-flex overflow-hidden">
        <div data-layer="Rating" className="Rating self-stretch justify-start items-center gap-5 inline-flex">
          <div data-svg-wrapper data-layer="Star" className="Star">
          <svg width="128" height="24" viewBox="0 0 128 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FFA8A4"/>
          <path d="M38 0L40.6942 8.2918H49.4127L42.3593 13.4164L45.0534 21.7082L38 16.5836L30.9466 21.7082L33.6407 13.4164L26.5873 8.2918H35.3058L38 0Z" fill="#FFA8A4"/>
          <path d="M64 0L66.6942 8.2918H75.4127L68.3593 13.4164L71.0534 21.7082L64 16.5836L56.9466 21.7082L59.6407 13.4164L52.5873 8.2918H61.3058L64 0Z" fill="#FFA8A4"/>
          <path d="M90 0L92.6942 8.2918H101.413L94.3593 13.4164L97.0534 21.7082L90 16.5836L82.9466 21.7082L85.6407 13.4164L78.5873 8.2918H87.3058L90 0Z" fill="#FFA8A4"/>
          <path d="M116 0L118.694 8.2918H127.413L120.359 13.4164L123.053 21.7082L116 16.5836L108.947 21.7082L111.641 13.4164L104.587 8.2918H113.306L116 0Z" fill="#FFA8A4"/>
          </svg>
          </div>
          <div data-layer="Text" className="Text justify-start items-center gap-3 flex">
            <div data-layer="4.4/5" className="45 text-gray-800 text-base font-normal font-['DM Sans'] leading-relaxed">4.4/5</div>
            <div data-layer="Ellipse 2" className="Ellipse2 w-1 h-1 bg-gray-700 rounded-full" />
            <div data-layer="3,841 Reviews" className="841Reviews text-gray-800 text-base font-normal font-['DM Sans'] leading-relaxed">3,841 Reviews</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-layer="Footer" className="Footer w-[1440px] h-[610px] relative bg-zinc-900  overflow-hidden">
    <div data-layer="Copyright" className="Copyright w-[1200px] left-[120px] top-[542px] absolute justify-between items-center inline-flex">
      <div data-layer="© 2023 Printey. All rights reserved." className="2023PrinteyAllRightsReserved text-violet-50 text-sm font-normal font-['DM Sans'] leading-normal">© 2023 Printey. All rights reserved.</div>
      <div data-layer="Designed by TokoTema" className="DesignedByTokotema text-right text-violet-50 text-sm font-normal font-['DM Sans'] leading-normal">Designed by TokoTema</div>
    </div>
    <div data-layer="Line 5" className="Line5 w-[1200px] h-[0px] left-[120px] top-[510px] absolute border border-gray-700"></div>
    <div data-layer="Help" className="Help left-[1174px] top-[260px] absolute flex-col justify-start items-start gap-6 inline-flex">
      <div data-layer="Heading" className="Heading text-white text-xl font-bold font-['Sora'] leading-7">Help</div>
      <div data-layer="Navigation" className="Navigation flex-col justify-start items-start gap-2.5 flex">
        <div data-layer="Customer Support" className="CustomerSupport text-white text-base font-normal font-['DM Sans'] leading-relaxed">Customer Support</div>
        <div data-layer="Delivery Details" className="DeliveryDetails text-white text-base font-normal font-['DM Sans'] leading-relaxed">Delivery Details</div>
        <div data-layer="Terms & Conditions" className="TermsConditions text-white text-base font-normal font-['DM Sans'] leading-relaxed">Terms & Conditions</div>
        <div data-layer="Privacy Policy" className="PrivacyPolicy text-white text-base font-normal font-['DM Sans'] leading-relaxed">Privacy Policy</div>
      </div>
    </div>
    <div data-layer="Resources" className="Resources left-[991px] top-[260px] absolute flex-col justify-start items-start gap-6 inline-flex">
      <div data-layer="Heading" className="Heading text-white text-xl font-bold font-['Sora'] leading-7">Resources</div>
      <div data-layer="Navigation" className="Navigation flex-col justify-start items-start gap-2.5 flex">
        <div data-layer="Gift Cards" className="GiftCards text-white text-base font-normal font-['DM Sans'] leading-relaxed">Gift Cards</div>
        <div data-layer="Design Tutorial" className="DesignTutorial text-white text-base font-normal font-['DM Sans'] leading-relaxed">Design Tutorial</div>
        <div data-layer="How to - Blog" className="HowToBlog text-white text-base font-normal font-['DM Sans'] leading-relaxed">How to - Blog</div>
        <div data-layer="Spotify Podcast" className="SpotifyPodcast text-white text-base font-normal font-['DM Sans'] leading-relaxed">Spotify Podcast</div>
      </div>
    </div>
    <div data-layer="Company" className="Company left-[825px] top-[260px] absolute flex-col justify-start items-start gap-6 inline-flex">
      <div data-layer="Heading" className="Heading text-white text-xl font-bold font-['Sora'] leading-7">Company</div>
      <div data-layer="Navigation" className="Navigation flex-col justify-start items-start gap-2.5 flex">
        <div data-layer="About Us" className="AboutUs text-white text-base font-normal font-['DM Sans'] leading-relaxed">About Us</div>
        <div data-layer="Services" className="Services text-white text-base font-normal font-['DM Sans'] leading-relaxed">Services</div>
        <div data-layer="Our Projects" className="OurProjects text-white text-base font-normal font-['DM Sans'] leading-relaxed">Our Projects</div>
        <div data-layer="Pricing" className="Pricing text-white text-base font-normal font-['DM Sans'] leading-relaxed">Pricing</div>
      </div>
    </div>
    <div data-layer="Image Box" className="ImageBox left-[120px] top-[260px] absolute flex-col justify-start items-start gap-6 inline-flex">
      <img data-layer="Logo" className="Logo w-[210px] h-[60px]" src="https://placehold.co/210x60" />
      <div data-layer="Text" className="Text w-[387px] text-white text-base font-normal font-['DM Sans'] leading-relaxed">Netus feugiat vitae enim enim in viverra. Id at sagittis cras pretium dictum nec netus. Ante dolor quis convallis.</div>
    </div>
    <div data-layer="Container" className="Container px-[120px] py-16 left-0 top-0 absolute bg-gray-800 flex-col justify-start items-start gap-2.5 inline-flex overflow-hidden">
      <div data-layer="Subscribe Content" className="SubscribeContent justify-start items-center gap-[383px] inline-flex">
        <div data-layer="Heading" className="Heading w-[327px] text-white text-2xl font-bold font-['Sora'] leading-[33.60px]">Join Our Newsletter to Keep Up To Date With Us!</div>
        <div data-layer="Subscribe Form" className="SubscribeForm justify-start items-center gap-4 flex">
          <div data-layer="Form 1" className="Form1 w-[324px] h-[50px] px-8 py-2.5 bg-white rounded-lg justify-start items-center gap-2.5 flex">
            <div data-layer="Text Field" className="TextField text-neutral-400 text-sm font-normal font-['DM Sans'] leading-normal">Enter your Email</div>
          </div>
          <div data-layer="Button" className="Button px-[38px] py-5 bg-indigo-500 rounded-lg justify-center items-center gap-2.5 flex">
            <div data-layer="Text Button" className="TextButton text-center text-violet-50 text-sm font-semibold font-['Sora'] leading-[14px]">Subscribe</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Home;