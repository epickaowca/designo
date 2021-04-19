import DesignPageGenerator from '../elements/designPageGenerator'

const friendlyArr = [
  {name:'express', description: 'A multi-carrier shipping website for ecommerce businesses', designName: 'web'},
  {name:'transfer', description: 'Site for low-cost money transfers and sending money within seconds', designName: 'web'},
  {name:'photon', description: 'A state-of-the-art music player with high-resolution audio and DSP effects', designName: 'web'},
  {name:'builder', description: 'Connects users with local contractors based on their location', designName: 'web'},
  {name:'blogr', description: 'Blogr is a platform for creating an online blog or publication', designName: 'web'},
  {name:'camp', description: 'Get expert training in coding, data, design, and digital marketing', designName: 'web'},
]

export default function Web_design() {
  return <DesignPageGenerator projectsArr={friendlyArr} title='web design' designCase='web' heroSection={{header: 'Web Design', paragraf: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.'}}  />
}
