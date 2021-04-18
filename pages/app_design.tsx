import DesignPageGenerator from '../elements/designPageGenerator'

const friendlyArr = [
  {name:'airfilter', description: 'Solving the problem of poor indoor air quality by filtering the air', designName: 'app'},
  {name:'eyecam', description: 'Product that lets you edit your favorite photos and videos at any time', designName: 'app'},
  {name:'faceit', description: 'Get to meet your favorite internet superstar with the faceit app', designName: 'app'},
  {name:'todo', description: 'A todo app that features cloud sync with light and dark mode', designName: 'app'},
  {name:'loopstudios', description: 'A VR experience app made for Loopstudios', designName: 'app'},
]

export default function App_design() {
  return <DesignPageGenerator projectsArr={friendlyArr} title='app design' designCase='app' heroSection={{header: 'App Design', paragraf: 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'}}  />
}
