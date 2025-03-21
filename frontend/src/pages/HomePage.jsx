import Gallery from "../components/Gallery.jsx";
import Layout from "../components/Layout.jsx";
import Laye from "../components/Laye.jsx";
import ProductListing from "../components/ProductListing.jsx";
import Section from "../components/Section.jsx";
import ColecaoDestaque from "../components/ColecaoDestaque.jsx";
import CardMine from "../components/CardMine.jsx"

export default function Home() {
    return (
        <Layout >
            <Gallery  hidden="hidden"/>
            <Section
            title="Coleções em destaque">
                <CardMine/>
            </Section>
            <Section
            title="Coleções em destaque"
            titleAlign="center">
                <ColecaoDestaque />
            </Section>
            <Section
                title="Produtos em alta"
                titleAlign="left"
                link={{
                    text: "ver todos",
                    href: "https://redirect.link",
                    color: "#C92071"
                }}>
                <ProductListing
                maxNumber='12' />
            </Section>
            <Laye />
        </Layout>
    );
}
