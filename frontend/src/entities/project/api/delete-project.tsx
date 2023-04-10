export const deleteProject = (id: number | string) => {
    const response = fetch(`http://127.0.0.1:8000/api/proekti/proekt/${id}`, {
        method: 'DELETE',
    })
}
