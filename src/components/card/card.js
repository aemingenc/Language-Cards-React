import React ,{useState} from 'react';
import "./card.css"





const Card = ({name,img,options}) => {
    const [isVisible, setİsVisible] = useState(true);
   
     


    return (
        
            <div className="card" onClick={()=>setİsVisible(!isVisible)}>
        {isVisible ? 
        (<Frontcard isim={name} resim={img}/>):

        (<İnfo seçenek={options}/>)
        }
    
            
            </div>
        
    )
}



const Frontcard =({resim,isim})=>{
    return(
        <div>
        <img src={resim} alt=""/>
        <h3>{isim}</h3>
        </div>
    )
}


 function İnfo({seçenek}) {
    return (
        <div>
            {seçenek.map((item,index)=>(
                <li key={index}>{item}</li>
            ))
            
            }            
        </div>
    )
}


export default Card;
