export const getPackageDetails = async (packageId) => {
  try {
    if (!packageId)
      return {
        success: false,
        message: 'Falta el packageId',
        data: null
      }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/package/${packageId}`
    )

    console.log('Hola mundi')
    if (!res.ok) {
      console.log('Entre aca', res.status)
      return {
        success: false,
        message: 'Fallo la petición',
        data: null
      }
    }

    const details = await res.json()
    console.log('mojon', details)

    return {
      success: true,
      message: '',
      data: details.data
    }
  } catch (e) {
    console.log(e)
    return {
      success: false,
      message: 'Ocurrio un error',
      data: null
    }
  }
}
