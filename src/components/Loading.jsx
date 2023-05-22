import { Html, useProgress } from '@react-three/drei';
import "../styles/loading.css"




export const Loading = () => {
  const {progress} = useProgress()
  return(
    
    
    <Html center
    className='loading'
    
    >
      
      {progress} % loaded
      
      
      
      </Html>
    
    
    )
}