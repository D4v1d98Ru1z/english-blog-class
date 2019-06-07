import React from 'react'

const RelatedPost = () => {
  return (
    <a 
      href="https://www.facebook.com/UnilibreEFLA/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        backgroundColor: '#FAFBFC',
      }}
    >
      <p
        style={{
          color: '#959da5',
          marginBottom: 1
        }}
      >
        June 4, 2019
      </p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: 14,
        }}
      >
        <img 
          src={require('../../content/assets/profile-pic.png')}
          alt="University Logo"
          width={50}
          style={{
            margin: 0
          }}
        />
        <br/>
        <p
          style={{
            margin: 0,
            marginLeft: 15,
          }}
        >
          EFLA Universidad Libre
        </p>
      </div>
      <p
        style={{
          color: 'black'
        }}
      >
        "The creation of this virtual space helps students and teachers alike to keep in 
        touch with the latest events related to foreign languages inside the Engineering Faculty.
        Also, this space provides useful and interesting exercises to give extra practice and develop
        autonomous learning."
      </p>
    </a>
  )
}

export default RelatedPost
