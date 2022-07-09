import React, { useState, useEffect } from 'react';

function Messenger() {

    const [title, setTitle] = useState(null)
    let handleChange = (event) => {
        setTitle(event.target.value)
    }

    const [code, setCode] = useState("Country Code")

    useEffect(() => {
    }, [code])

    const AsDownload=()=>{
        window.open(link, "_blank");
        setCode("Country Code")
      };

    const buttonChange = (event) => {
        if (event.currentTarget.id === "india") {
            setCode(91)
        }
        else if (event.currentTarget.id === "usa") {
            setCode(21)
        }
        else if (event.currentTarget.id === "england") {
            setCode(92)
        }
    }




    let link = `https://wa.me/${code}${title}`



    return (
        <div className="">
            <h1>Now, Chat Without Saving Phone Number</h1>
            <div className="d-flex justify-content">
                <div className="dropdown m-2">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {code}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><button className="dropdown-item" id="india" onClick={buttonChange} > 🇮🇳 +91 </button></li>
                        <li><button className="dropdown-item" id="usa" onClick={buttonChange}> 🇺🇸 +1 </button></li>
                        <li><button className="dropdown-item" id="england" onClick={buttonChange}> 🇬🇧 +44</button></li>
                    </ul>
                </div>
                <div className="form-group m-2">
                    {/* <label htmlFor="exampleFormControlInput1"></label> */}
                    <input type="tel" className="form-control" onChange={handleChange} id="phoneno" maxLength="10" placeholder="Enter your Phone Number" />
                </div>
                <button onClick={AsDownload} className="btn btn-success m-2">Go..! </button>
            </div>

        </div>
    )
}

export default Messenger