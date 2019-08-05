/**
 * get all counters
 */
export const getCounters = () => {
  return fetch('api/v1/counters', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(res => res.json())
  .catch(e => {
    console.log('errr', e)
  })
}
/**
 * post counter
 * @param { Object } data
 */
export const postCounter = (data) => {
  return fetch('/api/v1/counter', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .catch(e => {
    console.log('err', e)
  })
}
/**
 * Delete counter
 * @param {*} data
 */

export const deleteCounter = (data) => {
  return fetch('/api/v1/counter', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .catch(e => {
    console.log('err', e)
  })
}
/**
 * Increment counter by id
 * @param {Object} data
 */
export const incrementCounter = (data) => {
  return fetch('/api/v1/counter/inc',{
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .catch(e => {
    console.log('err', e)
  })
}
/**
 * Decrement counter by id
 * @param {Object} data
 */
export const decrementCounter = (data) => {
  return fetch('/api/v1/counter/inc',{
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .catch(e => {
    console.log('err', e)
  })
}