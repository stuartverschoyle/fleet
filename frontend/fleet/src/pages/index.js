import * as React from "react"
import { graphql } from "gatsby"

const IndexPage = ({data}) => {
  const range = data.allSanityFleet.edges.map(fleet => (
    <div style={{backgroundColor: '#ddd', padding: '20px', margin: '20px 0'}}>
      <h2>{fleet.node.range}</h2>
    </div>
  ))

  const fleet = data.allSanityFleet.edges.map(fleet => (
    <div style={{backgroundColor: '#ddd', padding: '20px', margin: '20px 0'}}>
      <p>{fleet.node.aircraft}</p>
    </div>
  ))


  return (
    <main>
      <h1>Fleet</h1> 
      {range}
      {fleet}
     </main>
  )
}

export default IndexPage

export const query = graphql`
    query {
      allSanityFleet {
        edges {
          node {
            aircraft
            range
          }
        }
      }
    }
`

export const Head = () => <title>Home Page</title>
