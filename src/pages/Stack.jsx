

//icons
import { FaGithub, FaCodepen, FaReact, FaJs, SiTypescript, FaPython, VscCode, SiVisualstudiocode, FaGit, FaGithubSquare, GiTBrick, DiGithubAlt, GoGithubAction, DiGithubBadge, RiGithubFill, DiGit, SiRedux, DiHtml5, DiCss3, SiPostgresql, DiGoogleCloudPlatform, DiFirebase, SiThreedotjs } from "react-icons/all"


export default function Stack() {

  return (
      <div className="stack">
        <h3>What I like <br/> to work with</h3>
        <div className="icons">

          <div>
            <SiTypescript size={20} color='rgb(79, 32, 171)' title='TypeScript'/>
            <p>TS</p>
          </div>

          <div>                 
            <FaJs size={20} color='rgb(79, 32, 171)' title='JavaScript'/>
            <p>JS</p>
          </div>

          <div>              
            <FaReact size={20} color='rgb(79, 32, 171)' title='React'/>
            <p>React</p>
          </div>

          <div>            
            <FaPython size={20} color='rgb(79, 32, 171)' title='Python'/>
            <p>Python</p>
          </div> 

          <div>   
            <SiVisualstudiocode size={20} color='rgb(79, 32, 171)' title='VS Code'/>
            <p>VSCode</p>
          </div>

          <div>                
            <DiGit size={20} color='rgb(79, 32, 171)' title='Git'/>
            <p>Git</p>
          </div>

          <div>              
            <SiRedux size={20} color='rgb(79, 32, 171)' title='Redux'/>
            <p>Redux</p>
          </div>

          <div>              
            <DiHtml5 size={20} color='rgb(79, 32, 171)' title='HTML5'/>
            <p>HTML5</p>
          </div>

          <div>               
            <DiCss3 size={20} color='rgb(79, 32, 171)' title='CSS'/>
            <p>CSS</p>
          </div>

          <div>           
            <DiFirebase size={20} color='rgb(79, 32, 171)' title='Firebase'/>
            <p>Firebase</p>
          </div>

          <div>           
            <SiThreedotjs size={20} color='rgb(79, 32, 171)' title='Three.js'/>
            <p>Three.js</p>
          </div>

        </div>
      </div>
         
  );
}