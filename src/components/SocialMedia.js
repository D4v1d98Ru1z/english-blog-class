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
        style={{
          boxShadow: 'none'
        }}
      >
        <li style={{marginLeft: 16}}>
          <img 
            src={require('../../content/assets/facebook.svg')}
            width={30}
          />
        </li>
      </a>
      <a
        href="https://www.instagram.com/ulibrebogota/"
        target="_blank"
        style={{
          boxShadow: 'none'
        }}
      >
        <li style={{marginLeft: 16}}>
          <img 
            src={require('../../content/assets/instagram.svg')}
            width={30}
          />
        </li>
      </a>
      <a
        href="https://twitter.com/Unilibrebog"
        target="_blank"
        style={{
          boxShadow: 'none'
        }}
      >
        <li style={{marginLeft: 16}}>
          <img 
            src={require('../../content/assets/twitter.svg')}
            width={30}
          />
        </li>
      </a>
    </ul>
  )
}

export default SocialMedia
