import gql from 'graphql-tag';

export const GET_TODO = gql`
  query getData($id: ID) {
    getTodo(id: $id) {
      userId
      title
      completed
    }
  }
`;

export const GET_TODOS = gql`
  query getDatas {
    getTodos {
      userId
      title
      completed
    }
  }
`;
// export default {GET_TODOS, GET_TODO};
