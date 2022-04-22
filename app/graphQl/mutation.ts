import gql from 'graphql-tag';

const NEW_TODO = gql`
  mutation CreateATodo($TodoData: TodoInput!) {
    addTodo(input: $TodoData) {
      id
      userId
      title
      completed
      __typename
    }
  }
`;
export default NEW_TODO;
