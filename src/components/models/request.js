export async function request(url, method='GET', requestData = null) {
  try {
    let responceData = null
    const headers = {}
    let body = ''
    if (requestData) {
      headers['Access-Control-Allow-Origin'] = '*'
      body = JSON.stringify(requestData)
      await fetch(url, { method, headers, body })
        .then(response => response.json())
        .then(data => (responceData = data))
    }
    if (requestData === null) {
      headers['Access-Control-Allow-Origin'] = '*'
      await fetch(url, { method, headers })
        .then(response => response.json())
        .then(data => (responceData = data))
    }
    return responceData
  } catch (error) {
    console.warn('Warning:', error.message)
  }
}
