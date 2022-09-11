import { gql } from "apollo-server-express"; //will create a schema
const Schema = gql`
  type User {
    id: ID!
    email: String
    username: String
  }
  #handle user commands
  type Query {
    getAllUsers: [User] #will return multiple Person instances
    getUser(id: Int): User #has an argument of 'id' of type Integer.
  }
  type Mutation {
    #the addUser commmand will accept an argument of type String as email and argument of type String as username.
    #it will return a 'User' instance. 
    addUser(email: String, username: String): User
  }
`;
export default Schema; 
//export this Schema so we can use it in our project