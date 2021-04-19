import Head from 'next/head'

interface TitleTagInterface {
    title: string
}

const TitleTag:React.FC<TitleTagInterface> = ({title}) => (
    <Head><title>DESIGNO - {title}</title></Head>
)

export default TitleTag
