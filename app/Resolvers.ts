import { prisma } from "./prisma"
const Resolvers = {
  Query: {
    getAllUsers: () => prisma.user.findMany({
      select: {
        id: true,
        email: true,
        userName: true
      }
    }),
    getUser: (_: any, args: any) => { 
      console.log(args);
      //get the object that contains the specified ID.
      return prisma.user.findUnique({
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
        email: args.email,
        username: args.username,
      };
      prisma.user.create({
           data: {
             email: newUser.email,
             userName: newUser.username
           }
         });
      return newUser;
    },
  },
};
export default Resolvers;