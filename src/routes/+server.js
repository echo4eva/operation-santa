import { json } from '@sveltejs/kit'

export const POST = async ({ request }) => {
    const formData = await request.formData()
    const code1 = String(formData.get("i1"))
    const code2 = String(formData.get("i2"))
    const code3 = String(formData.get("i3"))
    const code4 = String(formData.get("i4"))

    const combo = "" + code1 + code2 + code3 + code4

    const data = {
        success: false,
    }

    if (combo == "3008") {
        data.success = true
    }

    return json(data)
}