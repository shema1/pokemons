
export const countEventDuration = (startTime, endTime) => {

    let duration =
        endTime.slice(0, 2) * 60 -
        startTime.slice(0, 2) * 60 +
        (endTime.slice(3, 5) - startTime.slice(3, 5))

    return duration

}


export const countEventStart = (startTime) => {
    let hour = +startTime.slice(0, 2) * 60
    let minute = +startTime.slice(3, 5)

    return hour + minute
}
