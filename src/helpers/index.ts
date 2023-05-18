export const getCurrentMonth = () => {
    const months = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ]

    const currentDate = new Date()
    const currentMonth = currentDate.getMonth()
    const prevMonth = (currentMonth === 0) ? 11 : currentMonth - 1

    return months[prevMonth]
}

export function formatCurrentDate() {
    const currentDate = new Date()

    const year = currentDate.getFullYear().toString().padStart(4, '0')
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
    const day = currentDate.getDate().toString().padStart(2, '0')

    return `${year}-${month}-${day}`
}