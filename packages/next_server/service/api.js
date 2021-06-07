import { gql } from "@apollo/client";
import client from "./apollo-client";

export  async function getServerSideProps() {
    const {data} = await client.query({
        query: gql`
        query GetuserItems {
          usersRecommendedItems(username: "monica") {
            id
          }
        }
      `,
    });
    console.log("data",data)
}
