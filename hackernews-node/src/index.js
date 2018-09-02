const { GraphQLServer } = require('graphql-yoga');

const links = [{
  id: 'link-0',
  url: 'www.how-to-graphql.com',
  description: 'fallback tutorial for GraphQL'
}];

const typeDefs = `
type Query {
  info: String!
  feed: [Link!]!
}

type Link {
  id: ID!
  description: String!
  url: String!
}
`;

const resolvers = {
  Query: {
    info: () => 'This is the API of a Hackernews Clone',
    feed: () => links
  },
  Link: {
    id: (root) => root.id,
    description: (root) => root.description,
    url: (root) => root.url
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log('Server is running on http://localhost:4000'));
