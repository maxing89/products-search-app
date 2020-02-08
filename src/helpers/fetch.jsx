import { message } from 'antd';

export function fetchAPI (url, method) {
  return fetch(
    url,
    {
      method: method
    }
  )
  .then(r => r.json())
  .then(r => r)
  .catch(error => {
    message.error(error.message)
  });
}