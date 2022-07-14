const googleapis = "https://www.googleapis.com"
const fakeData = "https://jsonplaceholder.typicode.com/users"
const googleCalender =  "/calendar/v3/calendars/"
const events = "https://fbfi0o0q43.execute-api.us-west-1.amazonaws.com/dev/events"

export const apiConnections = {
    getUsers: fakeData,
    getGoogleEvents: googleapis + googleCalender,
    getMylifeEvents: events,
}