import React from 'react';
const  List =({people})=>{
    return (
    <>
    {people.map( (pe)=>{
const[id,name,study,age,living,img]=pe;
        return(
            <>
            <div key={id} className="person"></div>
            <img src={img} alt={img}></img>
            <div>
                <h2>{name}</h2>
                <p><strong>{study}</strong>
                <it>{living}</it>
                <bl>{age}</bl>
                </p>
            </div>
            </>
        )
            })}
    </>) 
}
export default List;