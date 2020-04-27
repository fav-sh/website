import { useStaticQuery, graphql } from 'gatsby'

const pageQuery = graphql`
  query {
    allFile(filter: { absolutePath: { regex: "/screenshot.png/g" } }) {
      nodes {
        childImageSharp {
          fluid(maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export const useScreenshot = () => {
  const data = useStaticQuery(pageQuery)
  const { fluid } = data.allFile.nodes[0].childImageSharp

  return fluid
}
