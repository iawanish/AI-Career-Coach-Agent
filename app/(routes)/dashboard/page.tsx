import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import AiToolsList from './_components/AiToolsList'
import History from './_components/history'
function Dashboard() {
    return (
        <div>
            <WelcomeBanner/>
            <AiToolsList/>
            <History/>
        </div>
    )
}

export default Dashboard