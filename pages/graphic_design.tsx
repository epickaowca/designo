import DesignPageGenerator from '../elements/designPageGenerator'

const friendlyArr = [
  {name:'tim brown', description: 'A book cover designed for Tim Brown’s new release, ‘Change’', designName: 'graphic', photoname: 'change'},
  {name:'boxed water', description: 'A simple packaging concept made for Boxed Water', designName: 'graphic', photoname: 'boxed-water'},
  {name:'science!', description: 'A poster made in collaboration with the Federal Art Project', designName: 'graphic', photoname: 'science'},
]

export default function Graphic_design() {
  return <DesignPageGenerator projectsArr={friendlyArr} title='app design' designCase='app' heroSection={{header: 'App Design', paragraf: 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'}}  />
}
