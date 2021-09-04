import * as types from './types'

export async function request(
  url = `${types.HN_BASE_URL}/${types.HN_END_POINT}${types.HN_JSON_QUERY}`,
  method = 'GET',
  requestData = null
) {
  try {
    let responceData = null
    const headers = {}
    let body = ''
    if (requestData) {
      // headers['Content-Type'] = 'application/json'
      headers['Access-Control-Allow-Origin'] = '*'
      // headers['Access-Control-Allow-Methods'] = '*'
      body = JSON.stringify(requestData)
      await fetch(url, { method, headers, body })
        .then(response => response.json())
        .then(data => (responceData = data))
    }
    if (requestData === null) {
      headers['Access-Control-Allow-Origin'] = '*'
      // headers['Access-Control-Allow-Methods'] = '*'

      await fetch(url, { method, headers })
        .then(response => response.json())
        .then(data => (responceData = data))
    }
    return responceData
  } catch (error) {
    console.warn('Warning:', error.message)
  }
}
