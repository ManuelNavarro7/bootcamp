 
 export const Note=({id,content,date,categories=[]})=>{

    return <ol key={id} style={{fontWeight: 300, textAlign:'center'}}>
    <li>
        <p><strong>{id}</strong></p>
        <p><strong>{content}</strong></p>
        <p><strong>{date}</strong></p>
        <div>{categories.map((category)=>{
    return<div key={category}>{category} </div>
})}</div>
</li>
</ol>
  }

 