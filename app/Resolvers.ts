import users from "./dataset"; //get all of the available data from our database.
import { prisma } from "./prisma"
const Resolvers = {
  Query: {
    getAllUsers: () => prisma.users.findMany({
      select: {
        id: true,
        email: true,
        userName: true
      }
    }), //if the user runs the getAllUsers command
    //if the user runs the getUser command:
    getUser: (_: any, args: any) => { 
      console.log(args);
      //get the object that contains the specified ID.
      return prisma.users.findUnique({
        where: {
          id: args.id
        },
        select:{
          id: true,
          email: true,
          userName: true
        }
      });
    },
  },
  Mutation: {
    addUser: (_: any, args: any) => {
      const newUser = {
        id: users.length + 1,
        email: args.email,
        username: args.username,
      };
      users.push(newUser);
      return newUser;
    },
  },
};
export default Resolvers;