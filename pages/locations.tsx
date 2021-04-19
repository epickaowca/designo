import Header from '../elements/header'
import Footer from '../elements/footer'
import LocationItem from '../components/locations/locationItem'

const Locations = () => {
    const objectFriendly = [
        {locationName:'canada', officeName:'Designo Central Office', officeStreet1:'3886 Wellington Street', officeStreet2:'Toronto, Ontario M9C 3J5', phone:'+1 253-863-8967', email:'contact@designo.co'},
        {locationName:'australia', officeName:'Designo AU Office', officeStreet1:'19 Balonne Street', officeStreet2:'New South Wales 2443', phone:'(02) 6720 9092', email:'contact@designo.au', reversed: true},
        {locationName:'united kingdom', officeName:'Designo UK Office', officeStreet1:'13  Colorado Way', officeStreet2:'Rhyd-y-fro SA8 9GA', phone:'078 3115 1400', email:'contact@designo.uk'},
]
    return (
        <>
            <Header />
                {objectFriendly.map((item,index)=><LocationItem propsObject={item} key={index} />)}
            <Footer />
        </>
    )
}

export default Locations
