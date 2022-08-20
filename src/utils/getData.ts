export async function getData<T>(url: string) {
	try {
		const response = await fetch(url)
		const data: T = await response.json()

		return data
	} catch(err) {
		console.error(err)

		return undefined
	}
}
