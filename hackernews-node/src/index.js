const { GraphQLServer } = require('graphql-yoga');

const links = [{
  id: 'link-0',
  url: 'www.how-to-graphql.com',
  description: 'fallback tutorial for GraphQL'
}];

let idCount = links.length;

const resolvers = {
  Query: {
    info: () => 'This is the API of a Hackernews Clone',
    feed: () => links
  },
  Mutation: {
    post: (root, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url
      };
      links.push(link);
      return link;
    }
  }
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
});

server.start(() => console.log('Server is running on http://localhost:4000'));
