import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'

function Messages({user,message}) {
    const isuser = user === message.user;
    return (
        <>
        <div className={`message ${isuser && "message_user"}`}>
            <Card className={isuser ? "message_self" : "message_guist"}>
                <CardContent>
                    <Typography
                        color="white"
                        varient="h5"
                        component="h2"
                    >
                        {message.user}:{message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
        </>
    )
}

export default Messages
