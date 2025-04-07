import React from 'react'
import phoneIcon from "/src/images/phone-icon.png"

export default function Entry(props) {
    console.log(props)
  return (
    <article className="contact-card">
        <img
            src={props.img}
            alt={`Photo of ${props.name}`}
        />
        <h3>{props.name}</h3>
        <div className="info-group">
            <img
                src={phoneIcon}
                alt="phone icon"
            />
            <p>{props.phone}</p>
        </div>
        <div className="info-group">
            <img
                src="./src/images/mail-icon.png"
                alt="mail icon"
            />
            <p>{props.email}</p>
        </div>
    </article>
  )
}
