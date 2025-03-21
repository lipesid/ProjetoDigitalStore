import Section from "../components/Section.jsx";

import Layout from "../components/Layout.jsx";

import FilterGroup from "../components/FilterGroup.jsx";

export default function ProductListingPage() {
  return (
    <>

      <Layout className="flex min-h-screen">
          <Section>
              <FilterGroup />
          </Section>
      </Layout>
    </>
  )
}