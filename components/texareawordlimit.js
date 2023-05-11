import React,{useState} from 'react'

export default function TextAreaWordLimit() {
    
  return (
    <div>
       <Example/>
    </div>
  )
}

function Example(){
    const [firstName, setFirstName] = useState('');

  const handleNameChange = e => {
    const limit = 10;
    // 👇️ only take first N characters
    setFirstName(e.target.value.slice(0,limit));
  };
    return(
        <>
         <h2>Very long string</h2>
      <input
        id="first_name"
        name="first_name"
        value={firstName}
        onChange={handleNameChange}
      />
        </>
    )
}

// function Example(){
//     const [message, setMessage] = useState('');

//   const handleMessageChange = event => {
//     setMessage(event.target.value);
//   };
//     return(
//         <>
//          <h2>Very long string</h2>
//       <textarea
//         maxLength={5}
//         id="message"
//         name="message"
//         value={message}
//         onChange={handleMessageChange}
//       />
//         </>
//     )
// }

// function Example(){
//     const [firstName, setFirstName] = useState('');

//     const handleNameChange = event => {
//         setFirstName(event.target.value);
//       };
//     return(
//         <>
        
//  <input
//  maxLength={5}
//         type="text"
//         id="first_name"
//         name="first_name"
//         value={firstName}
//         className="full_height_Width"
//         onChange={handleNameChange}
//       />
//         </>
//     )
// }


// function Example(){
//     const [count, setCount] = useState(0);

//     const handleCount= (e)=>{
//         setCount(e.target.value.length)
//     }
//     return(
//         <>
//  <textarea
//         type="text"
//         rows={5}
//         className="full_height_Width"
//         onChange={handleCount}
//       />
//       <p>{count}</p>
//         </>
//     )
// }
