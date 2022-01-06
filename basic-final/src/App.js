import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';
import HooksTodoPage from './components/HooksTodoPage';
import RQTodosPage from './components/RQTodosPage';
import RQTodoPage from './components/RQTodoPage';
import RQParallelQueriesPage from './components/RQParallelQueriesPage';
import RQDependentQueriesPage from './components/RQDependentQueriesPage';
import RQPaginatedQueriesPage from './components/RQPaginatedQueriesPage';
import RQRefetchPage from './components/RQRefetchPage';
import RQDynamicParallelQueriesPage from './components/RQDynamicParellelQueriesPage'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to='/'>Hooks To Do</Link>
              </li>
              <li>
                <Link to='/rq-todos'>RQ To Do</Link>
              </li>
              <li>
                <Link to='/rq-refetch'>RQ Refetch</Link>
              </li>
              <li>
                <Link to='/rq-parallel'>RQ Parallel</Link>
              </li>
              <li>
                <Link to='/rq-dynamic-parallel'>RQ Dynamic Parallel </Link>
              </li>
              <li>
                <Link to='/rq-dependent'>RQ Dependent</Link>
              </li>
              <li>
                <Link to='/rq-paginated'>RQ Paginated</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path='/' element={<HooksTodoPage />} />
          <Route path='/rq-todos' element={<RQTodosPage />} />
          <Route path='/rq-todos/:todoId' element={<RQTodoPage />} />
          <Route path='/rq-refetch' element={<RQRefetchPage />} />
          <Route path='/rq-parallel' element={<RQParallelQueriesPage />} />
          <Route path='/rq-dynamic-parallel' element={<RQDynamicParallelQueriesPage todoIds={[1, 2, 3, 4, 5]} />} />
          <Route path='/rq-dependent' element={<RQDependentQueriesPage />} />
          <Route path='/rq-paginated' element={<RQPaginatedQueriesPage />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
