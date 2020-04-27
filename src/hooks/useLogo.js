import { useStaticQuery, graphql } from 'gatsby'

const pageQuery = graphql`
  query {
    allFile(filter: { absolutePath: { regex: "/logo.png/g" } }) {
      nodes {
        childImageSharp {
          fluid(maxHeight: 128) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export const useLogo = () => {
  const data = useStaticQuery(pageQuery)
  const { fluid } = data.allFile.nodes[0].childImageSharp

  return fluid
}
