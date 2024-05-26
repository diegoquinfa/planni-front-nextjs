export const getPopularPackage = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/package`)

    if (!res.ok) throw new Error('Ocurrio un problema.')

    const data = await res.json()

    return data
  } catch (e) {
    return {
      success: false,
      data: null,
      message: e.message
    }
  }
}
