import React from "react"
import {FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"
import '../styles/components/socialnetworks.sass'


const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, href:'https://www.linkedin.com/in/guilherme-padilha-44731a182/' },
  { name: "github", icon: <FaGithub />, href:'https://github.com/padilhx'},
  { name: "instagram", icon: <FaInstagram />, href:'https://www.instagram.com/padilhx/' },
]
const SocialNetworks = () => {
  return  <section id="social-networks">
    {socialNetworks.map((network) => (
      <a href={network.href} className="social-btn" id={network.name} key={network.name}>
        {network.icon}
      </a>
    ))}
  </section>
}

export default SocialNetworks;