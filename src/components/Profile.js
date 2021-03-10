import React from 'react'
import '../styles/profile.css'

const Profile = () => {
    return (
        <div id ="profile" className="profile__container section">

            <div className="profile__section">
            <div className="profile__head">
                <h1 className= "heading">Profile</h1>
                
                <p>I'm a creative Javascript webdeveloper</p>
            </div>

            <div className="break"></div>

            <div className="profile__content">
                <div className="profile__left">
                    <h2 className="heading2">About me</h2>
                    <p>
                    I am an allround web developer. I am a junior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.
                    </p>
                </div>

                <div className="profile__right">
                    <h2 className="heading2">Details</h2>
                        <div className="profile__right__details">
                            <h3 className="heading3">Name:</h3>
                            <p className="profile__right__label">Vinay Rao Muthineni</p>
                            <h3 className="heading3">Email:</h3>
                            <p className="profile__right__label">vinayrao9704@gmail.com</p>
                            <h3 className="heading3">Location:</h3>
                            <p className="profile__right__label">Montreal, Quebec, Canada</p>
                        </div>
                </div>
            </div>
           
            </div>

            


        </div>
    )
}

export default Profile
