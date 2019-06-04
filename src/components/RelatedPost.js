import React from 'react'

const RelatedPost = () => {
  return (
    <div>
      <p>June 4, 2019</p>
      <div>
        <img 
          src={require('../../content/assets/profile-pic.png')}
          width={50}
        />
        <span>EFLA Universidad Libre</span>
      </div>
      <p>
        The creation of this virtual space helps students and teachers alike to keep in 
        touch with the latest events related to foreign languages inside the Engineering Faculty.
        Also, this space provides useful and interesting exercises to give extra practice and develop
        autonomous learning.
      </p>
    </div>
  )
}

export default RelatedPost
