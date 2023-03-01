import { useParams } from 'react-router-dom';
import { Form } from './form';
const defaultId = '1';

export function App() {
  const { id, ...rest } = useParams<{ id: string }>();
  console.log('id', id, rest);
  return (
    <div>
      <h1>Hello App!</h1>
      <Form id={id || defaultId} />
    </div>
  );
}
