import * as React from "react"
import { graphql } from "gatsby"

const IndexPage = ({data}) => {
  const animals = data.allSanityAnimal.edges.map(animals => (
    <div style={{backgroundColor: '#ddd', padding: '20px', margin: '20px 0'}}>
      <h2>{animals.node.name}</h2>
    </div>
  ))
  return (
    <main>
      <h1>Hi</h1> 
      {animals}
     </main>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allSanityAnimal {
      edges {
        node {
          name
        }
      }
    }
  }
`

export const Head = () => <title>Home Page</title>
