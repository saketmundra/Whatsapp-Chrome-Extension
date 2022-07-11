import React, { useState, useEffect } from 'react';

function Messenger() {

    const [title, setTitle] = useState(null)
    let handleChange = (event) => {
        setTitle(event.target.value)
    }

    const [code, setCode] = useState("")

    useEffect(() => {
    }, [code])

    const AsDownload = () => {
        window.open(link, "_blank");
        setCode("Country Code")
    };

    const buttonChange = (event) => {
        if (event.currentTarget.id === "india") {
            event.currentTarget.className += "active"
            setCode(91)
        }
        else if (event.currentTarget.id === "usa") {
            event.currentTarget.className += "active"
            setCode(1)
        }
        else if (event.currentTarget.id === "england") {
            event.currentTarget.className += "active"
            setCode(44)
        }
    }




    let link = `https://wa.me/${code}${title}`



    return (
        <div className="">
            <div className="d-flex flex-column justify-content">
                <div className="btn dropstart  d-flex flex-row">

                    <button className="btn btn-light m-2" id="india" onClick={buttonChange} > 🇮🇳 +91 </button>
                    <button className="btn btn-light m-2" id="usa" onClick={buttonChange}> 🇺🇸 +1 </button>
                    <button className="btn btn-light m-2" id="england" onClick={buttonChange}> 🇬🇧 +44</button>

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