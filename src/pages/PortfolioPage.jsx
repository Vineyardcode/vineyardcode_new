
import { MeshPhysicalMaterial } from 'three';
//icons
import { FaGithub, FaCodepen, FaReact, FaJs, SiTypescript, FaPython, VscCode, SiVisualstudiocode, FaGit, FaGithubSquare, GiTBrick, DiGithubAlt, GoGithubAction, DiGithubBadge, RiGithubFill, DiGit, SiRedux, DiHtml5, DiCss3, SiPostgresql, DiGoogleCloudPlatform, DiFirebase, SiThreedotjs } from "react-icons/all"


export default function Portfolio() {

  return (
      <div className='projects'>
          <div className='mainPage'>
            <h3  className='flipLink'>Contact me</h3>
            <div className="projects-main">
              <div className="kanjiApp">
                <h5>
                  <a href="https://kanjapp-ts-vineyardcode.vercel.app/">Kanji App</a>
                </h5>
                  <p><b>Reviews kanji</b></p>
                  <p><b>Creates anki decks <br/> with animated <br/> stroke orders</b></p>
                  <p><b>and more...</b></p>
              </div>  
            </div>

            <div className="codeExamples">
              <h3>Code Examples</h3>
              <div className="codeExamples-icons">
                <div className="github">
                  <a href='https://github.com/Vineyardcode'><FaGithub size={20} color='rgb(79, 32, 171)'/></a>
                  <p>GitHub</p>
                </div>

                <div className='codePen'>    
                  <a href='https://codepen.io/vineyardcode'><FaCodepen size={20} color='rgb(79, 32, 171)'/></a>
                  <p>CodePen</p>
                </div>
              </div>
            </div>
            
          </div>  
      </div>              
  );
}