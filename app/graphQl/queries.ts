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
  query GetAll($page: Int) {
    characters(page: $page) {
      results {
        name
        species
        gender
        image
      }
    }
  }
`;

export default GET_TODOS;
