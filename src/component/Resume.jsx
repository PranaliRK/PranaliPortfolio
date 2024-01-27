import './Resume.css'
const Resume=()=>{
    return(
        <div className='Navbar'>
            <nav>
                <div>PK</div>
                <div>About</div>
                <div>Home</div>
                <div>Contact</div>
                <div>Projects</div>
            </nav>
            <section className='profileimage'>
                <h1>Pranali Kale</h1>
                <div><img src="https://media.istockphoto.com/id/1209220375/photo/woman-in-rustic-dress-gathering-poppy-and-wildflowers-in-sunset-light-walking-in-summer.jpg?s=1024x1024&w=is&k=20&c=dPoOCVLWis2ewIIXAVM7ld3GlRJDf3SlZ7bjiE4Y4jg=" alt="" /></div>
            </section>
            <main id='main'>
                <div className='main1'>About Me</div>
                <div className='main1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur laborum ex, vel fugiat facere ducimus aperiam cupiditate. Doloribus velit nihil mollitia in. Et velit dolor vel aliquam quidem, voluptatibus cumque?</div>
                <div className='main1'><button>Download Resume</button></div>
            </main>
            <section id='sec2'>
                <h1>Skill</h1>
                    <div id='div1'>
                    <div className='sec2div'>HTML⭐⭐⭐</div>
                <div className='sec2div'>CSS⭐⭐⭐</div>
                <div className='sec2div'>JAVASCRIPT⭐⭐⭐</div>
                <div className='sec2div'>BOOTSTRAP⭐⭐⭐</div>
                <div className='sec2div'>FIREBASE⭐⭐⭐</div>
                <div className='sec2div'>REACT⭐⭐⭐</div>
                </div>
            </section>
            <footer id='footer'>
                <div className='main2'><h1>GET IN TOUch</h1>
                <p>pranalikale3040@gmail.com</p>
                <p>+9172964081</p></div>
                <div className='main2' id='main2'>
                    <button className='button1'>movie website</button>
                    <button className='button1'>ECOM website</button>
                    <button className='button1'>Whether website</button>
                    <button className='button1'>BDay website</button>
                </div>
                <div className='main2'>
                    <div><i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i></div>
                    <p>@copywrite</p>
                </div>
            </footer>

        </div>
    )
}
export default Resume