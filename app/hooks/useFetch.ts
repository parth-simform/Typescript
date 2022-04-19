import {useDispatch, useSelector} from 'react-redux';
import {Creators, saveTodos} from '../redux/reduxSause';

interface saveData {
  todosData: saveTodos;
}

const useFetch = (props: any) => {
  const dispetch = useDispatch();
  const todosData: any = useSelector<saveData>(state => state.todosData);

  const goToDashboard = () => {
    dispetch(Creators.fetchTodoData());
    props.navigation.push('Dashboard');
  };

  return {
    goToDashboard,
    todosData,
  };
};

export default useFetch;
