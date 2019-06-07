import React from 'react'

const SocialMedia = () => {
  return (
    <ul
      style={{
        display: 'flex',
        listStyleType: 'none',
        marginTop: 20,
        flexDirection: 'row-reverse',
      }}
    >
      <a
        href="https://www.facebook.com/UnilibreEFLA/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          boxShadow: 'none'
        }}
      >
        <li style={{marginLeft: 16}}>
          <img 
            src={require('../../content/assets/facebook.svg')}
            alt="Facebook"
            width={30}
          />
        </li>
      </a>
      <a
        href="https://www.instagram.com/ulibrebogota/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          boxShadow: 'none'
        }}
      >
        <li style={{marginLeft: 16}}>
          <img 
            src={require('../../content/assets/instagram.svg')}
            alt="Instagram"
            width={30}
          />
        </li>
      </a>
      <a
        href="https://twitter.com/Unilibrebog"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          boxShadow: 'none'
        }}
      >
        <li style={{marginLeft: 16}}>
          <img 
            src={require('../../content/assets/twitter.svg')}
            alt="Twitter"
            width={30}
          />
        </li>
      </a>
    </ul>
  )
}

export default SocialMedia
