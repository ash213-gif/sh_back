import React from 'react'
import Logo1 from '../Components/Images/grandfather-removebg-preview.png'
import Logo2 from './Images/IMG-20241230-WA0005-removebg-preview.png'
import Logo3 from './Images/IMG-20241230-WA0003-removebg-preview.png'
import childLabour from '../Components/Images/india-child-labour.jpg'
import qrcode from './Images/qrcode.png'
// import Abdulkalam from './Images/new_abdul_kalam-removebg-preview.png'
import studyGirl from '../Components/Images/girld_study-removebg-preview.png'
import boy from './Images/cartoon-little-boy-studying-on-the-table-free-vector-removebg-preview.png'
import teacher from './Images/teacher2-removebg-preview.png'
import sibling from './Images/sibling-removebg-preview.png'

// cards
import card1 from './Images/ash2-removebg-preview.png'



export default function Nav() {
  return (
    <>
      <div className='lg:text-4xl  text-yellow-300  bg-red-600 font-semibold
      md:text-2xl  font-mono
        text-xl   text-center  '
      >Shravan Singh Society  </div>

      <div className='flex justify-between   lg:center  bg-red-600 ' >
        <img className='h-20 w-18  md:h-28 md:w-28  lg:h-32 lg:w-32  bg-white rounded-full ' src={Logo1} alt="logo" />
        <img className=' h-20  lg:h-36 md:h-24  ' src={Logo2} alt=" logo2" />
        <img className='h-20 w-18  md:h-28 md:w-28  lg:h-32 lg:w-32  bg-white rounded-full' src={Logo3} alt="logo3" />

      </div>

      <div>
        <ul className=' flex lg:p-2  lg:gap-64 font-mono  justify-center bg-red-600 text-white font-semibold
        md:gap-40  md:p-1
        gap-24  p-1
        
        '>
          <button className='  rounded-sm  ' >Home </button>
          <button>Donation  </button>

        </ul>

        <div class="lg:flex    lg:p-5
        md:flex  md:p-2
        p-3 
             ">
          <div class="   ">
            <p class=" lg:text-lg
              
            md:text-lg
          text-sm opacity-65 font-mono 
            
            ">
              "Education is the most powerful weapon we can use to change the world."
              This timeless quote from Nelson Mandela perfectly captures the transformative impact of education.
              Yet, for millions of children and adults around the globe, quality education remains out of reach due to
              financial constraints.
              Education donation is a powerful way to bridge this gap, offerindividuals the tools to build a brighter
              future,
              break the cycle of poverty, and contribute positively to society.
              By supporting educational initiatives, donors become catalysts for change, empowering students with
              knowledge,
              skills, and opportunities that ripple through families, communities, and generations.
              Every contribution, no matter the size, paves the way for someone’s path to success,
              unlocking potential and providing the foundation for a more just and equitable world.
            </p>
          </div>
          <img className=' lg:h-80 lg:w-80 lg:flex 
             md:hidden   ml-20
          ' src={qrcode} alt="qrcode sharavan " />

        </div>

      </div>

      {/*  chicld labour imaage  */}

      <div className='' >
        <img className='absolute    lg:h-[500px] lg:w-full  w-full h-[250px]  md:h-[400px] md:w-full ' src={childLabour} alt="" />

        <p className=' relative font-semibold lg:p-28 md:p-16 p-4 font-mono md:text-[100px] md:font-semibold text-6xl text-yellow-500    '>They Are Reason For Our Society</p>

      </div>

      {/* our member code  */}


      <div
        class="text-center font-mono  lg:mt-20 md:mt-2 mt-10 md:p-3  lg:m-5 rounded-md  lg:mr-72   bg-red-500 lg:ml-72 lg:text-4xl text-yellow-300    lg:p-4  font-bold text-2xl">
        OUR MEMBERS
      </div>


      <div class="max-w-full   mt-5 mb-5 p-6  rounded-lg   overflow-x-auto">
        <div class="flex flex-nowrap space-x-4  scrollbar-hide">
          {/* <!-- Card 1 --> */}
          <div class="   lg:h-80  lg:w-72  flex-shrink-0 bg-white rounded-lg shadow-md p-4 
                         md:h-72
                         h-72  w-60
                         ">
            <img className="w-full  h-40 lg:h-2/3 object-cover rounded-md" src={card1} alt='' />
            <h3 class="text-lg font-semibold mt-2">Ashok Taya & CO-Founder</h3>
            <p class="text-sm text-gray-600 mt-1">B.Pharmacy, M.Pharmacy P.hd Experience - 6 years</p>
          </div>

          {/* <!-- Card 2 --> */}
          <div class=" lg:h-80  lg:w-72 flex-shrink-0 bg-white rounded-lg shadow-md p-4 
                         md:h-72
                         h-72  w-60
                         ">
            <img className="w-full  h-40 lg:h-2/3 object-cover rounded-md" src={card1} alt='' />
            <h3 class="text-lg font-semibold mt-2">Person 2</h3>
            <p class="text-sm text-gray-600 mt-1">B.Pharmacy, MBA
              Experience - 8 years</p>
          </div>

          {/* <!-- Card 3 --> */}
          <div class="lg:h-80  lg:w-72 flex-shrink-0 bg-white rounded-lg shadow-md p-4 
                         md:h-72
                         h-72  w-60
                         ">
            <img className="w-full  h-40 lg:h-2/3 object-cover rounded-md" src={card1} alt='' />
            <h3 class="text-lg font-semibold mt-2">Person 3</h3>
            <p class="text-sm text-gray-600 mt-1">PhD in Biotech
              Experience - 10 years</p>
          </div>

          {/* <!-- Card 4 --> */}
          <div class="lg:h-80  lg:w-72 flex-shrink-0 bg-white rounded-lg shadow-md p-4 
                         md:h-72
                         h-62  w-60
                         ">
            <img className="w-full  h-40 lg:h-2/3 object-cover rounded-md" src={card1} alt='' />
            <h3 class="text-lg font-semibold mt-2">Person 4</h3>
            <p class="text-sm text-gray-600 mt-1">MSc Chemistry
              Experience - 5 years</p>
          </div>


          <div class="lg:h-80  lg:w-72 flex-shrink-0 bg-white rounded-lg shadow-md p-4 
                         md:h-72
                         h-72  w-60
                         ">
            <img className="w-full  h-40 lg:h-2/3 object-cover rounded-md" src={card1} alt='' />
            <h3 class="text-lg font-semibold mt-2">Person 5</h3>
            <p class="text-sm text-gray-600 mt-1">Data Scientist
              Experience - 7 years</p>
          </div>
        </div>
      </div>

      {/* nav bar section  */}
      <div
        class="  bg-red-600  rounded-md  text-white list-none  lg:text-xl     lg:gap-10     lg:p-3 
        md:text-base    md:gap-12  md:p-5
        flex   text-sm  p-1 gap-5  font-mono font-semibold  ">


        <li> <a href="page3.html" target="_blank"> Study Material </a></li>
        <li><a href="page3.html" target="_blank"> Scholarship </a></li>
        <li><a href="page3.html">Our Plans</a></li>
        <li> <a href="page3.html">Success Stories</a></li>


      </div>


      {/* abdul kalamkm section  */}
      {/* 
      <div
        class="  flex flex-col p-4 mt-3 lg:flex lg:m-10  bg-slate-300 to-white-300  lg:rounded-3xl text-white
        md:flex md:flex-row 
        rounded-lg  lg:p-5  lg:flex-row     ">

        <div>
          <h3 class="   text-yellow-800 lg:text-[60px] text-[40px] text-center  font-mono    md:mt-0   mt-52  ">
            A.P.J. Abdul Kalam   </h3>

          <p className='md:text-center md:text-[35px]  md:mt-10
              text-center text-red-800  text-[27px]
              lg:text-[45px] ' >

            The best way to
            predict the
            future is to create it</p>
        </div>


        <div>
          <img class="lg:h-[400px]  rounded-full   ml-24  -mt-[400px]  lg:mt-4  h-52  w-60
            md:h-80  md:w-[300px] md:mt-0  md:mr-32  md:flex  md:ml-0
            
            lg:w-[500px]"
            src={Abdulkalam} alt="abdul kalam " />
        </div>
      </div> */}


      {/* section is registere here */}


    
    {/* study girl image  */}

<div>
  <img className='lg:w-full lg:h-[450px] md:w-full md:h-[350px] ' src={studyGirl} alt="" />
</div>

      <div class="container mx-auto mt-3  bg-slate-300   max-w-screen-xl p-8 text-center ">
        <h2 class="  lg:text-4xl  text-3xl font-bold mb-8 text-yellow-300  bg-red-500 rounded-lg p-4">Upskill with community
          resources</h2>

        <div class="lg:flex md:flex  lg:justify-around  ">


          <div className='' >
            <div class="flex mb-5 lg:gap-36 lg:mb-12
                md:justify-around   justify-between   gap-10  ">
              <div class=" bg-red-500    relative -ml-[30px] md:h-10 md:w-32  lg:h-12 lg:w-36   h-10  w-[115px]  rounded-lg   ">
                <button
                  class=" bg-white absolute duration-500     md:-ml-[55px]  -ml-[50px]  md:h-10 md:w-32  lg:h-12 lg:w-36  lg:-ml-[68px]  hover:-translate-x-1  -mt-1  hover:translate-y-1   font-semibold h-10    w-[115px] rounded-lg    ">Registere
                  here
                </button>
              </div>


              <div class=" bg-red-500  relative  md:h-10 md:w-48 lg:h-12 lg:w-60 h-10        w-[180px] rounded-lg   ">
                <button
                  class=" bg-white absolute duration-500  md:h-10 md:w-48  md:-ml-[90px]   lg:h-12 lg:w-60  lg:-ml-[110px]  lg:mb-1 -ml-[85px]  hover:-translate-x-1  -mt-1  hover:translate-y-1   font-semibold h-10 w-[180px] rounded-lg    ">Apply
                  For
                  Councelling
                </button>
              </div>
            </div>

            <div class=" lg:flex lg:justify-around justify-between x lg:mt-7   lg:gap-10 
            md:flex 
           grid grid-cols-2 gap-7
            
            ">



              <div
                class="relative  lg:h-[140px]  lg:w-[210px] h-[136px] w-[136px] rounded bg-red-500 ">

                <div
                  class="absolute  text-yellow-900  mt-1 ml-1 lg:h-[130px]  lg:w-[200px] h-[128px]   w-[128px] p-2 bg-white     rounded     ">
                  <i class="fa-solid  fa-book-open-reader p-4  fa-beat" ></i>
                  <p class="text-xl font-bold">OUR 60+</p>
                  <p>Students</p>
                </div>

              </div>

              <div
                class="relative   lg:h-[140px]  lg:w-[210px] h-[136px] w-[136px] rounded  bg-red-500  ">

                <div
                  class="absolute text-yellow-900  lg:h-[130px]  lg:w-[200px]  mt-1 ml-1  h-[128px]   w-[128px] p-2 bg-white     rounded     ">
                  <i class="fa-solid  fa-book-open-reader p-4  fa-beat" ></i>
                  <p class="text-xl font-bold">OUR 6+</p>
                  <p>Teachers</p>
                </div>

              </div>

              <div
                class="relative   lg:h-[140px]  lg:w-[210px] h-[136px] w-[136px] rounded  bg-red-500
                lg:ml-0  md:ml-0 
                ml-28

              
                 ">

                <div
                  class="absolute text-yellow-900   lg:h-[130px]  lg:w-[200px]  mt-1 ml-1  h-[128px]   w-[128px] p-2 bg-white     rounded     ">
                  <i class="fa-solid  fa-book-open-reader p-4  fa-beat"></i>
                  <p class="text-xl font-bold">OUR 10+</p>
                  <p>Branches </p>
                </div>

              </div>

            </div>
          </div>
          <div className='  md:flex     hidden  lg:flex   ' >
            <img class="lg:h-72 lg:w-[340px]  md:h-62 md:w-[270px]   " src={boy} alt="" />
          </div>
        </div>
      </div >

      {/* not nav barr */}

      <div class="flex p-2 mt-5   text-sm lg:text-xl md:text-base font-mono  gap-6 rounded-md bg-gradient-to-r from-red-500 via-yellow-400 justify-around list-none lg:p-5 ">
        <li className='hidden md:flex  lg:flex ' >I TO X</li>
        <li>X TO XII</li>
        <li>Competitive Exam </li>
        <li>courses</li>
      </div>

      <div class=" flex list-none p-1 lg:p-2  lg:text-xl text-sm
        md:text-base  font-sans 
         justify-around  ">


        <div className=' md:grid hidden lg:grid'  >



          <li> MATH </li>
          <li> Science </li>
          <li> English</li>

          <li> S.st</li>
          <li> Hindi</li>
          <li> G.K</li>
          <li> Olympiad </li>




        </div>

        <div  >


          <li> Accountancy </li>
          <li> Business Studies</li>
          <li> Economics </li>

          <li> Maths</li>
          <li>Science </li>
          <li> English </li>
          <li> Olympiad Practise </li>


        </div>

        <div >


          <li> CUET </li>
          <li>CLAT </li>
          <li>IPM </li>



        </div>

        <div >

          <li> BBA </li>
          <li>BCA </li>
          <li> B.COM</li>

        </div>

      </div>


      <div class=" text-center text-2xl  md:mt-5 md:mx-44 lg:mx-52  m-4  mt-4  text-red-900 lg:text-3xl font-bold ">
        Work On Real Studies

        Nothing Beats Real Experience
      </div>
      <hr />

      <h1 class="text-center text-red-500  text-3xl font-mono  lg:text-4xl font-semibold ">
        Our Teachers
      </h1>


      {/* slogan section */}

      <div class="lg:flex md:flex  ">
        <div>
          <img class=" lg:h-[400px] md:h-[300px]  " src={teacher} alt=" teachers help " />
        </div>
        <div class="text-center lg:p-20 md:p-10    ">

          <h1 class="font-semibold  text-red-700   text-base   md:text-xl lg:text-4xl ">SHRAVAN ACADEMY </h1>
          <h3 class="list-none     duration-500  text-base opacity-75  lg:text-xl text-center">

            <li>Work on syllabus </li>
            <li>Do not waste time </li>
            <li>Work with techers </li>
            <li>Work with Experience techers </li>

            <hr />
          </h3>
        </div>

      </div>


      <hr />

      {/* new navbar section  */}

      <div class="flex justify-around mt-4 p-2 text-sm  lg:text-xl  md:text-base text-yellow-200  lg:p-5 bg-red-500 ">
        <div>
          Why choose us
        </div>
        <div>
          Roadmaps
        </div>
        <div class="lg:flex hidden">
          Courses
        </div>
        <div>
          Schedule a call
        </div>
      </div>


      <footer>

        <div class="flex  justify-around    text-[13px] lg:text-xl list-none p-3">
          <div >

            <li> Program Heighlt </li>
            <li> 100% Guranted Results</li>
            <li> Secure Year For future</li>

            <li> Limited Seats Available</li>


          </div>

          <div class="d">
            <label for="">
              <li> Best Career Choose </li>
              <li> Bunanpdge</li>
              <li> Bootcamps</li>

              <li> Company Tyupe</li>
              <li> Best Guidence</li>
            </label>
          </div>

          <div className=" lg:grid  hidden ">

            <li> Accountancy</li>
            <li>Business Studies </li>
            <li>Economics</li>
            <li> English</li>
            <li>Maths</li>
            <li> Science </li>
            <li> BBA </li>
            <li> BCA </li>
            <li> B.COM </li>
            <li> And More </li>
            <li> CUET </li>
            <li> CLAT </li>
            <li> IPM </li>

          </div>

          <div >

            <li> Shravan Academy </li>
            <li> Selected Batch </li>
            <li> G-mail</li>
            <li> Call </li>
            <li> And many more </li>



          </div>
        </div>
      </footer>


      <div class="font-bold text-center  md:text-2xl  lg:text-4xl  text-blue-700 text-xl">
        Apply Now
      </div>



      {/* 
    <!-- sign up form  Form --> */}
      <div
        class=" items-center md:gap-36 lg:flex p-4  justify-items-center  bg-gradient-to-r from-slate-300 via-blue-200 lg:rounded-xl md:flex  border-black lg:p-10  lg:m-10  ">

        <div
          class=" lg:max-w-max  lg:w-[400px] p-4 h-96 w-72     lg:mx-auto bg-white lg:p-6 rounded-md shadow-lg lg:mt-10">
          <h2 class="text-2xl font-bold mb-4 text-center">Sign Up</h2>

          <form id="signUpForm" class="space-y-4">
            <input type="text" id="fullName" placeholder="Full Name" class="w-full p-2 border rounded-md"
              required />
            <input type="email" id="email" placeholder="Email Address" class="w-full p-2 border rounded-md"
              required />
            <input type="tel" id="phone" placeholder="Phone Number" class="w-full p-2 border rounded-md" required />
            <input type="" id="password" placeholder="Address" class="w-full p-2 border rounded-md" required />


            <button type="button"
              class="bg-green-600 text-white font-semibold px-6 py-2 rounded-md shadow-md hover:bg-green-700 transition-colors w-full"
              onclick="sendSignUpDetails()">
              Sign Up
            </button>
          </form>
        </div>


        <div class=" hidden lg:flex md:flex md:mt-20  mt-40 w-72 h-72   ">
          <img className='lg:h-96 ' class="" src={sibling} alt="" />
        </div>
      </div>

      <hr />
      <div class="text-center font-bold   lg:text-4xl  text-2xl">
        <h2>
          OUR LOCATION
        </h2>
      </div>

    </>
  )
}
