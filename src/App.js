
import './App.css';
import {app} from './base';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import background from "./img/intro-bg.jpg";
function App() {
  const onChange = (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef= storageRef.child(file.name);
    fileRef.put(file).then(() =>{
      console.log("file uploaded!")
    } ) 


  }



  return (
    <div  style={{
      display: 'flex',
      margin: 'auto',
      width: 1300,
      height : 900,
      flexWrap: 'wrap',
      backgroundImage: `url(${background})`
    }}>
   <label   htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture"
        component="span">
          <PhotoCamera />
        </IconButton>
      </label>   
    <input type= "file" onChange= {onChange}/>
    
    </div>
      );
}

export default App;
