import users from "./dataset"; //get all of the available data from our database.
const Resolvers = {
  Query: {
    getAllUsers: () => users, //if the user runs the getAllUsers command
    //if the user runs the getUser command:
    getUser: (_: any, args: any) => { 
      console.log(args);
      //get the object that contains the specified ID.
      return users.find((user) => user.id === args.id);
    },
  },
};
export default Resolvers;