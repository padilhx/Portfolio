import SocialNetworks from "./SocialNetworks"
import Avatar from "../img/3.png"

import "../styles/components/sidebar.sass"
import InformationContainer from "./informationContainer"

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Guilherme Padilha Jobins" />
      <p className="title">
        Desenvolvedor FullStack Jr</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="https://drive.google.com/file/d/1zvUqgf4iEVvzRwEMB0_eUzPxIqo45BNZ/view?usp=share_link" className="btn">
        Download curriculo
      </a>
    </aside>
  )
}

export default Sidebar