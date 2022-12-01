import React from 'react';
import pic1 from '../Assets/hero-image.png';
import pic2 from '../Assets/cropped.png';
import pic3 from '../Assets/last.png';
import pic4 from '../Assets/last1.png';
import pic5 from '../Assets/last2.png';
import pic6 from '../Assets/last3.png';

import './Home.css';
import Part from './cards/Part';



const Home = () => {
  return (
    <div className='main-wrapper'>
        <section className='hero-section'>
            <div className='left-leaf'>
                <div className="header">
                    <h1>Your Own Personal Teacher</h1>
                    <h1>Live, Online classNamees</h1>
                </div>
                <div className="book-now-cta">
                    <div className="headline">Book your FREE className</div>
                    <div className="sub-heading">
                        <div>For Kids</div>
                        {/* Add toggle btn */}
                        <div>For Adults (18+)</div>
                        <div className='ex'>Select your child's grade/className in school</div>
                        <div className="table-responsive">
                        <table className="table table-bordered border-primary">
                        <tr>
                                                      <th scope="row"></th>
                                                         <td>
                                                            <a href="">className 1 <br />1</a>
                                                         </td>
                                                         <td>
                                                         <a href="">className 2 <br />2</a>
                                                         </td>
                                                         <td>
                                                         <a href="">className 3 <br />3</a>
                                                         </td>
                                                         <td>
                                                         <a href="">className 4 <br />4</a>
                                                         </td>
                                                         <td>
                                                         <a href="">className 5<br />5</a>
                                                         </td>
                                                         <td>
                                                         <a href="">className 6 <br />6</a>
                                                         </td>
                                                 </tr>
                                                 <tr>
                                                         <th scope="row"></th>
                                                         <td>
                                                         <a href="">className 7 <br />7</a>
                                                         </td>
                                                         <td>
                                                         <a href="">className 8 <br />8</a>
                                                         </td>
                                                         <td>
                                                         <a href="">className 9  <br />9</a>
                                                         </td>
                                                         <td>
                                                         <a href="">className 10 <br />10</a>
                                                         </td>
                                                         <td>
                                                         <a href="">className 11 <br />11</a>
                                                         </td>
                                                         <td>
                                                         <a href="">className 12 <br />12</a>
                                                         </td>
                                                         
                                                </tr>
                                                

                            </table>
                                                
                                                
                                            
                                        </div>

                        
                      <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website"><button type="button" className='btn'> <b>Schedule A Free class</b></button></a>
                    </div>
                    <div className="className-selector"></div>
                    <div className="cta"></div>
                </div>
            </div>
            
            <div className='right-leaf'>
                <div className='image-container'>
                    <img src={pic1} alt="Image Container" className='hero-img' />
                </div>
            </div>
        </section>
        <section >
                    {/* <div className='fir'>
                        <a href="https://www.youtube.com/@WhitehatJr/videos"> <img className='edit' src="https://www.author.thinkwithniche.com/allimages/project/thumb_ed021microsoft-and-whitehat-jr-offering-minecraft-game-based-learning.jpg" alt="" /></a>
                    </div>
                        
                    <div className='firr'>
                        <h1>WhiteHat Jr is more than just coding, math and music!</h1>
                        <p>Our proprietary, activity-based curriculum with live, real-time instruction generates: Problem Solving. Creative Thinking. Grit. Confidence. Communication.</p>
                        <h3>🎉 🎉 And it's a lot of fun, too!</h3>
                        <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website"><button type="button" className='btn'> <b>Schedule A Free Trial</b></button></a>

                    </div> */}
                    <div className='divisor'>
                        <div></div>
                        <div>
                        <img src={pic6} alt="Image Container" className='last3-img' />
                        </div>
                        <div className='the'><h1>WhiteHat Jr is more than just coding, math and music!</h1>
                        <p>Our proprietary, activity-based curriculum with live, real-time instruction generates: Problem Solving. Creative Thinking. Grit. Confidence. Communication.</p>
                        <h3>🎉 🎉 And it's a lot of fun, too!</h3>
                        <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website"><button type="button" className='btn'> <b>Schedule A Free Trial</b></button></a>
                        </div>
                        <div></div>
                    </div>

        </section>
        <section className='third'>
<h1>OUR COURSES</h1>
 <div className="card-group">
<div className="card">
     <img src="https://s3-cdnwhjr.whjr.online/website/desktop/card1-user.png" className="card-img-top" alt="image" />
    <div className="card-body">
    <h5 className="card-title">Learn Coding</h5>

     <p className="card-text">FOR Grade 1-12</p>
     <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website"><button type="button" className='btn'> <b>Book a Free Coding Class</b></button></a>

</div>
</div>
<div className="card">
     <img src="https://s3-cdnwhjr.whjr.online/website/desktop/card2-user.png" className="card-img-top" alt="image" />
    <div className="card-body">
    <h5 className="card-title">Learn Math</h5>

     <p className="card-text">FOR Grade 1-8</p>
     <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website"><button type="button" className='btn'> <b>Book a Free Math Class</b></button></a>

</div>
</div>
<div className="card">
     <img src="https://s3-cdnwhjr.whjr.online/website/mobile/home-page/card3-user.png" className="card-img-top" alt="image" />
    <div className="card-body">
    <h5 className="card-title">Learn Music</h5>

     <p className="card-text">FOR Grade 1-12</p>
     <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website"><button type="button" className='btn'> <b>Book a Free Music Class</b></button></a>

</div>
</div>
<div className="card">
     <img src="https://s3-cdnwhjr.whjr.online/website/mobile/home-page/music_for_adults.png" className="card-img-top" alt="image" />
    <div className="card-body">
    <h5 className="card-title">Music For Adults</h5>

     <p className="card-text">FOR 18+</p>
     <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website"><button type="button" className='btn'> <b>Book a Free Music Class</b></button></a>

</div>
</div>
<div className="card">
     <img src="https://s3-cdnwhjr.whjr.online/website/art_landing/desktop/art-course.png" className="card-img-top" alt="image" />
    <div className="card-body">
    <h5 className="card-title">Learn Art, Animation & Video</h5>

     <p className="card-text">For Grade 3-7</p>
     <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website"><button type="button" className='btn'> <b>Book a Free Art,Animation & Video Class</b></button></a>

        </div>
         </div>


</div>

</section>
       
        <section className='four'>
            <div>
                <img className='ab' src="https://st.depositphotos.com/1007989/2330/i/950/depositphotos_23303934-stock-photo-kids-using-laptop-to-study.jpg" alt="" />
            </div>
            <div>
                <h1><b>CODE WITH MINECRAFT TODAY</b></h1>
                <h3>Register For The Perfect Introduction to Coding and Gaming Design</h3>
                <a href="https://code.whitehatjr.com/coding/minecraft/trial/register?utm_medium=website&utm_source=website&utm_content=website"><button type="button" className="btn btn-secondary btn-lg">Book A Free Trail</button></a>
                <a href="https://www.whitehatjr.com/minecraft"><button type="button" className="btn btn-secondary btn-lg">Learn More</button></a>
                <br />
                <br />
                <p>Code with minecraft is availabel for kids age 6-14.
                    this is not official minecraft product and is not approved by or associated with majong</p>           
                           
                           
                            </div>


        </section>
        <section className='five'>
            <h1> <b>
            Join 1 million+ students worldwide, <br />
            certified by WhiteHat Jr</b></h1>
            <br /> <br />
            <a href="https://code.whitehatjr.com/coding/minecraft/trial/register?utm_medium=website&utm_source=website&utm_content=website"><button type="button" className="btn btn-secondary btn-lg">Book A Free Trail</button></a>
        </section>
        <br />
        <br />

        <h1 className='dd'> <b>Why Coding for kids</b></h1>
            <br />
            <br />

        <section className='seven'>
            
            <div></div>
            <div className='kk'>
              <h1>CREATIVITY SCORES AT GENIUS LEVEL</h1>
              <img src={pic2} alt="Image Container" className='cropped' />
              


            </div>
            <div className='lefts'>
            <h4>Your kids can learn logic, structure, sequence and creative expression</h4>
            <br />
            <br />
            <h3 className='gg'>George Land & Beth Jarman's landmark NASA study identified that kids
                    peak in creativity at age 6, followed by a gradual decline as they
                grow up.
                    <br />
                The real promise of coding is not that kids will become computer engineers.
                Coding is a fun tool for kids to exercise their desire to build,
                    curiosity to question, imagination to explore - the traits that will serve any child
                    well in nearly any career, in every hobby, and in life.</h3>
                    <br />
                    <br />
                    <br />
                    <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website"> <button type="button" className="btn btn-secondary btn-lg">Book A Free Trail</button></a>
            </div>
            <div></div>
        </section>
        <br />
        <br />
        <br />
        <section className='eight'>

            <div></div>
            <div className='mid'>
                <h1>Your Child Will Learn</h1>
                <br />
                <div className='midlogo'>
                    <div>
                    <img className='logo' src="https://t4.ftcdn.net/jpg/01/58/29/29/360_F_158292937_Z6azf0Bp9ja0nSPn96nXDINpw0RNto1J.jpg" alt="" />
                    <br />
                    <br />
                    <h4>logic</h4>
                    </div>
                    <div>
                    <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuJALCfY2iv4DDdFcOe5OMC0Si2o5PsQjZHtgbHS4lr5MmsnVcv2cbYj9tq3w8LEXyOXA&usqp=CAU" alt="" />
                    <br />
                    <br />
                    <h5>Structure</h5>
                    </div>
                    <div>
                    <img className='logo' src="https://png.pngtree.com/png-clipart/20200508/ourmid/pngtree-hand-drawn-cartoon-thinking-light-bulb-gradient-illustration-png-image_2199282.jpg" alt="" />
                    <br />
                    <br />
                    <h5>Creative Thinking</h5>
                    </div>
                    <div>
                    <img className='logo' src="https://e7.pngegg.com/pngimages/359/251/png-clipart-innovation-problem-solving-design-thinking-others-purple-logo.png" alt="" />
                    <br />
                    <br />
                    <h5>sequencing</h5>
                    </div>
                    <div>
                    <img className='logo' src="https://letstalkscience.ca/sites/default/files/2020-10/decomposition_.png" alt="" />
                    <br />
                    <br />
                    <h5>Algorithm Thinking</h5>
                    </div>
                </div>
            </div>
            <div></div>
        </section>
        <br />
        <br />
       <section className='nine'>
       <Part/>
       </section>
       
        
                           
          

        
        



<section className='ten'>
    <div className='twos'>
        <img className='slide' src="https://s3-cdnwhjr.whjr.online/website/desktop/whjr-champions-desktop/mae-1x.png" alt="" />
        {/* <video src="https://www.youtube.com/@WhitehatJr/videos"> <img className='slide' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkLZxmFgfhI6QU6nzJ6rrUG8Gh1H_od4boQ&usqp=CAU" alt="" /></video> */}
    </div>
                <div className='ones'>
                    <br />
                    <br />
                     <h2>
                    
                Saira’s video, Age 9, <br />
                WhiteHat Jr Coder</h2>
                        <br />
                    <br />
                        <br />
                    <p>Watch how coding with WhiteHat Jr helped Saira get better at Math.</p>
                    <br /><br />
                    <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website"> <button type="button" className="btn btn-secondary btn-lg">Book A Free Trail</button></a>


            </div>
</section>
<br />
<br />
<h1>5.5 Million Student Projects & Counting</h1>
<section className='eleven'>

<div className='part'>
<div>
<img className='fit' src="https://s3-cdnwhjr.whjr.online/website/desktop/projects/pet-1x.png" alt="" />
    </div>
    <div>
        <h3>Advanced</h3>
        <br />

<h1>Pat a Pet App</h1>
<p>The app connects fellow pet lovers to take care of each other's pets.</p>

<h3>shubham raj</h3>

    </div>
</div>
<div className='part'>
<div>
    <img className='fit' src="https://s3-cdnwhjr.whjr.online/website/desktop/projects/escape-1x.png" alt="" />
</div>
<div>
<h3>Professional</h3>
        <br />

<h1>The Escape Game</h1>
<p>An engaging strategy and survival game which is based on a dramatic army engagement in India..</p>

<h3>shubham raj</h3>
</div>

</div>
<div className='part'>
    <div>
        <img className='fit' src="https://s3-cdnwhjr.whjr.online/website/desktop/projects/ambulance-1x.png" alt="" />
    </div>
    <div>
    <h3>Begineer</h3>
        <br />

<h1>Ambulance Whizz</h1>
<p>An engaging strategy and survival game which is based on a dramatic army engagement in India.</p>

<h3>Aaran ghost</h3>
    </div>

</div>
<div className='part'>
<div>
    <img className='fit' src="https://s3-cdnwhjr.whjr.online/website/desktop/projects/school-chatt-app-1x.png" alt="" />
</div>
<div>
<h3>Intermediate</h3>
        <br />

<h1>DYSXA App</h1>
<p>The app helps children to learn letters, numbers and colors with a guided and engaging flow.</p>

<h3>kandy singh</h3>
</div>
</div>
</section>



<section className='twelve'>
    <div> <h2>Want to learn how to create such awesome projects?</h2> </div>
    <div> <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website"> <button type="button" className="btn btn-secondary btn-lg">Book A Free Trail</button></a>
 </div>
</section>
<br />
<br />
<h1><b>Our Expert Coding Educators</b></h1>
<section className='thirteen'>

    <div>
        <img className='edit' src="https://s3-cdnwhjr.whjr.online/website/desktop/teacher-process-2x.png" alt="" />
    </div>
    <div>
        <h1>Top 1% teachers selected by an industry-leading 4-step teacher assessment process by top 1% of early childhood coding experts</h1>
        <br />
        <p>WhiteHat Jr follows a rigorous 4-Step Selection Process for confirming teacher candidates so your children are taught by the Top Early Childhood Coding Experts.</p>
        <br /><br />
        <a href="https://www.whitehatjr.com/live-teacher-dashboard"> <button type="button" className="btn btn-secondary btn-lg">View Live Comment</button></a>
        <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website"> <button type="button" className="btn btn-secondary btn-lg">Book A Free Trail</button></a>
    
    </div>

</section>
<section className='forteen'>
   <div>
   <h5>World’s first of its kind learning pedagogy</h5>
  
   <h1>Private Batch vs Solo Class</h1>
   <img src={pic3} alt="Image Container" className='last' />

   </div>
</section>
<br />
<br />
<section className='fifteen'>
<button type="button" className="btn btn-secondary btn-lg">Private Batch<br /> <p>(1 teacher and upto 6 students)</p></button>
<button type="button" className="btn btn-secondary btn-lg">Solo Class <p>1Teacher & 1Student</p></button>
<br />
<br />

<button type="button" className="btn btn-secondary btn-lg">Coding Curriculum</button>
<br />
<br />
<button type="button" className="btn btn-secondary btn-lg">Begineer</button>
<button type="button" className="btn btn-secondary btn-lg">Intermediate</button>
<button type="button" className="btn btn-secondary btn-lg">Advanced</button>
<button type="button" className="btn btn-secondary btn-lg">Professional</button>
<div className='distribute'>
<div className='start'></div>
<div className='second'>
<h4>Introduction to Coding</h4>  <br />
<p>8 classes</p>
<br />
<h4>Curriculum Includes</h4> <br />
<p>Sequence, Fundamentals Coding Blocks, Loops</p> <br />
<p>View Detailed curriculum</p>
<br /> <br />
<h3>₹ 9,599</h3> <br />
<a href="https://code.whitehatjr.com/checkout/68c41f60-bf9f-4ea2-958f-a52454d5c124"><button type="button" className="btn btn-secondary btn-lg">Buy Now</button></a>



</div>
<div className='second'>
<h4>App Developer Certificate</h4>  <br />
<p>48 classes</p>
<br />
<h4>Curriculum Includes</h4> <br />
<p>Introduction to Coding</p> <br />
<p>Events / UI,Conditionals, Complex Loop,
    <br /> Logic Structures, Turtle Coding</p>

<br /> 
<p>view detailed curriculum</p> <br /> <br />
<h3>₹ 49,999</h3> <br />
<a href="https://code.whitehatjr.com/checkout/68c41f60-bf9f-4ea2-958f-a52454d5c124"><button type="button" className="btn btn-secondary btn-lg">Buy Now</button></a>


</div>
<div className='second'>
<h4>Artificial Intelligence & Code a Satellite</h4>  <br />
<p>144 classes</p>
<br />
<h4>Curriculum Includes</h4> <br />
<p>Introduction to Coding
App Developer Certificate</p> <br />
<p>Extended UI/UX, Rich GUI app, Space Tech simulation Arrays, Databases, APIs, Code satellite sensors.</p> <br />
<p>View Detailed curriculum</p>
<br /> <br />
<h3>₹ 135,999</h3> <br />
<a href="https://code.whitehatjr.com/checkout/68c41f60-bf9f-4ea2-958f-a52454d5c124"><button type="button" className="btn btn-secondary btn-lg">Buy Now</button></a>


</div>

<div className='start'></div>

</div>



   
</section>
<section className='sixteen'>
<a href="https://code.whitehatjr.com/coding/minecraft/trial/register?utm_medium=website&utm_source=website&utm_content=website"><button type="button" className="btn btn-secondary btn-lg">Book A Free Trail</button></a>
</section>


<br />
<br />

<section className='eighteen'>
    <h1><b>Meet our IIT and IB-trained Curriculum Creators</b></h1>
    <div className='jkl'>
        <div></div>
        <div><img className='lkj' src="https://s3-cdnwhjr.whjr.online/website/desktop/our-curriculum/profile/farida.png" alt="" />
        <h6>Dr. Farida Khan</h6> <br />
        <p>PHD IITB, Gold Medalist</p>
        </div>
        <div> <img className='lkj' src="https://s3-cdnwhjr.whjr.online/website/desktop/our-curriculum/profile/rajeev.png" alt="" />
        <h6>Rajeev Jha</h6> <br />
        <p>Advanced Game Designer, TFI Fellow.</p>
        </div>
        <div> <img className='lkj' src="https://s3-cdnwhjr.whjr.online/website/desktop/our-curriculum/profile/abhijit.png" alt="" />
        <h6>Abhijeet Gawande</h6> <br />
        <p>IB Educational Technologist, AI Expert</p>
        </div>
        <div> <img className='lkj' src="https://s3-cdnwhjr.whjr.online/website/desktop/our-curriculum/profile/gauri.png" alt="" />
        <h6>Gauri Parulkar</h6> <br />
        <p>Computer Scientist, Entrepreneur, Science Quotient</p>
        </div>
        <div></div>
        </div>
       </section>
       <br />
       <br />
       <br />
       <br />

        <section className='nineteen'>
            <h2 ><b>Create With Math helps your child build remarkable things and
                <br /> become future ready!</b> </h2> <br />
                <a href="https://www.whitehatjr.com/live-teacher-dashboard"> <button type="button" className="btn btn-secondary btn-lg">View Live Comment</button></a>
        <a href="https://code.whitehatjr.com/all/trial/register?utm_source=website&utm_content=website&utm_medium=website"> <button type="button" className="btn btn-secondary btn-lg">Book A Free Math Trail</button></a>
            
        </section>
        <br />
        <br />
        <br />
        <br />

        <section className="twenty">
            <h1><b>Join the WhiteHat Jr Revolution</b></h1>
            <img src={pic5} alt="Image Container" className='last2' />

            
            </section>
            <br /><br />
            <section className='twentyone'>
                <h1><b>WhiteHat Jr has been Featured In</b></h1>
                <a href="https://www.business-standard.com/article/pti-stories/whitehat-jr-aims-to-teach-indian-school-goers-coding-119041601283_1.html"> 
                <img className='ton' src="https://pbs.twimg.com/media/EWhIIFVXsAAYwL6.png" alt="" />
                </a>
                <a href="https://techcrunch.com/2020/08/05/indias-byjus-acquires-whitehat-jr-for-300-million/">
                <img className='ton' src="https://www.vectorlogo.zone/logos/techcrunch/techcrunch-ar21.png" alt="" />
               </a>
               <a href="https://yourstory.com/2020/06/edtech-startup-whitehat-jr-kids-ai-coding-skills"> 
                <img className='ton' src="https://en-media.thebetterindia.com/uploads/2019/04/yourstory-logo-e1556169971152.png?compress=true&quality=80&w=360&dpr=2.6" alt="" />
                </a>
                <a href="https://www.cnbctv18.com/business/ed-tech-start-up-whitehat-jr-to-rope-in-2000-online-teachers-on-its-learning-platform-6136181.htm">
                <img className='ton' src="https://www.adgully.com/img/800/201907/cnbc-tv18.jpg" alt="" />
               </a>
            </section>
        
    </div>



   

   
  )
}

export default Home;

