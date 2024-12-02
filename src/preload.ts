/**
 * 预加载资源，支持图片、视频和音频文件的预加载
 *
 * @param resources 资源URL的数组
 * @param onProgress 加载进度回调函数，接受2个参数，loadedCount：已加载数量， totalCount：总数量
 * @param onComplete 加载完成回调函数，接受1个参数，errorResourceList：错误资源数组
 */
export function preload(
  resources: Array<string>,
  onProgress: (loadedCount: number, totalCount: number) => void,
  onComplete: (errorResources: Array<string>) => void,
) {
  let loadedCount = 0
  const totalCount = resources?.length || 0
  const errors = []


  // 处理空资源列表
  if (totalCount === 0) {
    typeof onComplete === 'function' && onComplete([])
    return
  }

  function handleLoad() {
    loadedCount++
    typeof onProgress === 'function' && onProgress(loadedCount, totalCount)
    if (loadedCount === totalCount) {
      onComplete && onComplete(errors)
    }
  }

  function handleError(resource: string) {
    errors.push(resource)
    handleLoad()
  }

  resources.forEach((resource) => {
    const ext = resource.split('.').pop().toLowerCase()
    let element = null

    if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext)) {
      // 图片资源
      element = new Image()
      element.src = resource
    } else if (['mp4', 'webm', 'ogg'].includes(ext)) {
      // 视频资源
      element = document.createElement('video')
      element.src = resource
    } else if (['mp3', 'wav', 'ogg'].includes(ext)) {
      // 音频资源
      element = document.createElement('audio')
      element.src = resource
    } else {
      console.warn(`Unsupported resource type: ${resource}`)
      handleError(resource)
      return
    }

    element.onload = handleLoad
    element.onerror = () => handleError(resource)
  })
}
