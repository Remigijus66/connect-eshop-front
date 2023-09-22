import React, { Component } from 'react';
import { FaHeart, FaRegHeart, FaGithub } from 'react-icons/fa';


class Like extends Component {
  render() {
    return (
      <div>
        <FaHeart />
        <FaRegHeart />
        <FaGithub />
      </div>
    )
  }
}

export default Like