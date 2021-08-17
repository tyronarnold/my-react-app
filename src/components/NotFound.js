import { Card } from "react-bootstrap"

const NotFound = () => {
    return (
        <div>
            <Card style={{ marginLeft: '4rem', marginTop: '3rem', marginBottom: '2rem', width: '35rem', height: '20rem', padding: '5rem' }} bg={"secondary"}
                text={"light"}>
                <h1>
                    404 Page Not Found
                </h1>
            </Card>
        </div>
    )
}

export default NotFound
