import './About.css';
import dandan from '../../Assets/dandan.png';

function About(){
    return(
        <div>
            <div>
                <h1>A Little About Myself</h1>
            </div>
            <div className='content'>
                <p className='bio'>
                    Hello, welcome to my page! My name is Tsung-Ti (Daniel) Lee. I'm a student at Georgia State University studying computer science.

                </p>
                <p>
                    <img id="dan-selfie" src={dandan} alt="dandan's selfie" />
                    <div className='bio'>
                    I'm a web developer with a passion for crafting immersive online experiences. My expertise lies in HTML, CSS, and JavaScript, complemented by a bachelor's degree in Computer Science from Georgia State University. With over two years of programming experience and a focus on web development for more than a year, I possess a diverse skill set that includes proficiency in Java, PHP, C, Python, and Flutter.
                    </div>
                    <div className='bio'>
                    Originally from Taiwan, I made the exciting decision to relocate to Atlanta, Georgia several years ago. Growing up in a family that highly valued academic achievements, I developed a different perspective. To me, success means embracing critical thinking and nurturing creativity. It's about living the lifestyle I've dreamed of and passionately pursuing my goals. I believe that true success comes from continually setting new goals and relentlessly pursuing my dreams.
                    </div>
                    <div className='bio'>
                    Throughout my journey, I've acquired valuable experience working part-time as a cashier and barista at Tea Top in Doraville. These roles have taught me adaptability in fast-paced environments, as well as the importance of customer service and teamwork.
                    </div>
                    <div className='bio'>
                    Driven by self-motivation, I find joy in web and application development, as well as mobile app creation. Building innovative solutions that leave a lasting impact is what fuels my passion. When I'm not immersed in coding, you'll likely find me exploring the great outdoors through activities like hiking, playing frisbee, or simply enjoying quality time with friends.
                    </div>
                    <div className='bio'>
                    Thank you for visiting my website. I look forward to connecting and exploring opportunities to collaborate on your next web project or application development endeavor.
                    </div>
                </p>
            </div>
        </div>
    );
}

export default About;