export const updateProject = (id: number | string, data: FormData) => {
    const response = fetch(`http://127.0.0.1:8000/api/proekti/proekt/${id}`, {
        method: 'PATCH',
        body: data
    })
}
